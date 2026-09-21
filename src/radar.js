/** One full-screen triangle, one fragment shader. HTML remains the interactive layer.
 * Rendering stops offscreen/hidden, honors reduced motion, caps pixel ratio, and
 * drops to 24fps on small devices. Context loss leaves all content usable.
 */
const vertexSource = `attribute vec2 position; void main(){gl_Position=vec4(position,0.,1.);}`;
const fragmentSource = `precision mediump float;
uniform vec2 resolution; uniform float sweep; uniform float sector; uniform vec2 target;
const float PI=3.14159265;
float line(float d,float w){return 1.-smoothstep(w,w+.002,abs(d));}
void main(){
 vec2 uv=gl_FragCoord.xy/resolution; uv.y=1.-uv.y; vec2 p=uv-.5;
 float r=length(p); float a=mod(atan(p.x,-p.y)+2.*PI,2.*PI);
 float inside=1.-smoothstep(.428,.432,r);
 float rings=0.; for(int i=1;i<=4;i++){rings+=line(r-float(i)*.105,.0005);}
 float cross=max(line(p.x,.00025),line(p.y,.00025));
 float spokes=line(sin((a+PI/5.)*2.5)*r,.0005);
 float phase=mod(sweep-a+2.*PI,2.*PI);
 float beam=exp(-phase*4.)*.20+exp(-phase*180.)*.28;
 float field=sector<0.?0.:1.-step(PI/5.,abs(mod(a-sector*2.*PI/5.+PI,2.*PI)-PI));
 float rim=line(r-.427,.0013);
 float ticks=step(.983,cos(a*100.))*step(.408,r)*step(r,.426);
 vec2 d=abs(uv-target); float bracket=max(line(d.x-.039,.0007)*step(.024,d.y)*step(d.y,.04),line(d.y-.039,.0007)*step(.024,d.x)*step(d.x,.04));
 float reticle=target.x<0.?0.:bracket;
 float scanline=.96+.04*sin(gl_FragCoord.y*PI);
 vec3 color=vec3(.63,.83,.44)*(rings*.15+cross*.12+spokes*.10+beam+field*.045+rim*.4+ticks*.3)*inside;
 color+=vec3(.74,.94,.56)*reticle*.8;
 gl_FragColor=vec4(color*scanline,1.);
}`;
export class RadarRenderer {
  constructor(canvas, { onMode = () => {} } = {}) {
    this.canvas = canvas;
    this.onMode = onMode;
    this.visible = true;
    this.motion = true;
    this.sector = -1;
    this.target = [-0.5, -0.5];
    this.scanStart = performance.now();
    this.lowPower =
      (navigator.hardwareConcurrency || 8) <= 4 ||
      navigator.connection?.saveData;
    this.frameInterval = 1000 / (this.lowPower ? 24 : 60);
    this.ratio = Math.min(devicePixelRatio || 1, this.lowPower ? 1 : 1.5);
    this.tick = this.tick.bind(this);
    this.visibility = () => this.schedule();
    this.lost = (e) => {
      e.preventDefault();
      this.ready = false;
      this.stop();
      this.canvas.hidden = true;
      this.onMode("STATIC RADAR");
    };
    this.restored = () => {
      this.init();
      this.resize();
      this.schedule();
    };
    canvas.addEventListener("webglcontextlost", this.lost);
    canvas.addEventListener("webglcontextrestored", this.restored);
    document.addEventListener("visibilitychange", this.visibility);
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(canvas.parentElement);
    this.intersectionObserver = new IntersectionObserver(([entry]) => {
      this.visible = entry.isIntersecting;
      this.schedule();
    });
    this.intersectionObserver.observe(canvas.parentElement);
    this.init();
    this.resize();
    this.schedule();
  }
  init() {
    try {
      this.gl = this.canvas.getContext("webgl", {
        alpha: false,
        antialias: false,
        depth: false,
        powerPreference: "low-power",
      });
      if (!this.gl) throw new Error("WebGL unavailable");
      const gl = this.gl;
      const compile = (type, source) => {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          gl.deleteShader(shader);
          throw new Error("Shader compilation failed");
        }
        return shader;
      };
      const vertex = compile(gl.VERTEX_SHADER, vertexSource),
        fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
      this.program = gl.createProgram();
      gl.attachShader(this.program, vertex);
      gl.attachShader(this.program, fragment);
      gl.linkProgram(this.program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
      if (!gl.getProgramParameter(this.program, gl.LINK_STATUS))
        throw new Error("Shader linking failed");
      gl.useProgram(this.program);
      this.buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 3, -1, -1, 3]),
        gl.STATIC_DRAW,
      );
      const location = gl.getAttribLocation(this.program, "position");
      gl.enableVertexAttribArray(location);
      gl.vertexAttribPointer(location, 2, gl.FLOAT, false, 0, 0);
      this.uniforms = Object.fromEntries(
        ["resolution", "sweep", "sector", "target"].map((k) => [
          k,
          gl.getUniformLocation(this.program, k),
        ]),
      );
      this.ready = true;
      this.canvas.hidden = false;
      this.onMode(this.motion ? "GPU RADAR" : "STATIC RADAR");
    } catch {
      this.ready = false;
      this.canvas.hidden = true;
      this.onMode("STATIC RADAR");
    }
  }
  resize() {
    if (!this.ready) return;
    const bounds = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = Math.round(bounds.width * this.ratio);
    this.canvas.height = Math.round(bounds.height * this.ratio);
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    this.draw(performance.now());
  }
  draw(now) {
    if (!this.ready) return;
    const gl = this.gl;
    const elapsed = now - this.scanStart;
    const angle = this.motion
      ? elapsed < 900
        ? (elapsed / 900) * Math.PI * 2
        : Math.PI * 2 + ((elapsed - 900) / 12000) * Math.PI * 2
      : -0.2;
    gl.uniform2f(
      this.uniforms.resolution,
      this.canvas.width,
      this.canvas.height,
    );
    gl.uniform1f(this.uniforms.sweep, angle);
    gl.uniform1f(this.uniforms.sector, this.sector);
    gl.uniform2f(this.uniforms.target, ...this.target);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }
  tick(now) {
    this.frame = 0;
    if (!this.ready || !this.motion || !this.visible || document.hidden) return;
    if (now - (this.lastFrame || 0) >= this.frameInterval - 1) {
      if (this.lastFrame && now - this.lastFrame > 45)
        this.slowFrames = (this.slowFrames || 0) + 1;
      if (this.slowFrames > 40) this.frameInterval = 1000 / 24;
      this.draw(now);
      this.lastFrame = now;
    }
    this.frame = requestAnimationFrame(this.tick);
  }
  stop() {
    cancelAnimationFrame(this.frame);
    this.frame = 0;
  }
  schedule() {
    this.stop();
    if (this.ready) {
      this.draw(performance.now());
      if (this.motion && this.visible && !document.hidden)
        this.frame = requestAnimationFrame(this.tick);
    }
  }
  setMotion(value) {
    this.motion = value;
    this.onMode(value && this.ready ? "GPU RADAR" : "STATIC RADAR");
    this.schedule();
  }
  scan(sector) {
    this.sector = sector;
    this.scanStart = performance.now();
    this.schedule();
  }
  select(position) {
    this.target = position ? [position.x, position.y] : [-0.5, -0.5];
    this.draw(performance.now());
  }
  dispose() {
    this.stop();
    this.resizeObserver.disconnect();
    this.intersectionObserver.disconnect();
    document.removeEventListener("visibilitychange", this.visibility);
    this.canvas.removeEventListener("webglcontextlost", this.lost);
    this.canvas.removeEventListener("webglcontextrestored", this.restored);
    if (this.gl) {
      this.gl.deleteProgram(this.program);
      this.gl.deleteBuffer(this.buffer);
    }
  }
}
