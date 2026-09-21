"use client";

import { systemSteps } from "@/data/profile";
import { useGsapScope } from "@/hooks/useGsapScope";

function StaticSystem() {
  return (
    <section id="systems" className="section-shell py-24">
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-moss">
        Systems thinking
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {systemSteps.map((step) => (
          <article key={step.label} className="border border-line bg-panel p-6">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
              {step.label}
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-paper">{step.title}</h2>
            <p className="mt-4 leading-7 text-paper/68">{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function SystemsSection() {
  const { scope, reducedMotion } = useGsapScope<HTMLElement>(({ gsap, scope }) => {
    const steps = gsap.utils.toArray<HTMLElement>(".system-copy", scope);
    const vizItems = gsap.utils.toArray<HTMLElement>(".system-viz-item", scope);
    const flowLines = gsap.utils.toArray<HTMLElement>(".system-flow", scope);

    gsap.set(steps, { autoAlpha: 0, y: 26 });
    gsap.set(steps[0], { autoAlpha: 1, y: 0 });
    gsap.set(vizItems, { autoAlpha: 0, scale: 0.88 });
    gsap.set(flowLines, { autoAlpha: 0, scaleX: 0, transformOrigin: "left center" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".systems-pin",
        start: "top top",
        end: "+=3200",
        scrub: 0.8,
        pin: true,
        anticipatePin: 1
      }
    });

    systemSteps.forEach((_, index) => {
      const position = index;

      if (index > 0) {
        timeline.to(steps[index - 1], { autoAlpha: 0, y: -22, duration: 0.32 }, position);
      }

      timeline.to(steps[index], { autoAlpha: 1, y: 0, duration: 0.38 }, position);
      timeline.to(
        scope.querySelectorAll(`[data-viz-step="${index}"]`),
        { autoAlpha: 1, scale: 1, duration: 0.42, stagger: 0.08 },
        position + 0.1
      );

      if (flowLines[index]) {
        timeline.to(flowLines[index], { autoAlpha: 1, scaleX: 1, duration: 0.46 }, position + 0.24);
      }
    });

    timeline.to(".system-assembly", { rotate: 1.4, duration: 0.8 }, 1.2);
  }, []);

  if (reducedMotion) {
    return <StaticSystem />;
  }

  return (
    <section ref={scope} id="systems" className="relative bg-ink">
      <div className="systems-pin min-h-screen">
        <div className="section-shell grid min-h-screen items-center gap-12 py-20 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="relative min-h-[420px]">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.28em] text-moss">
              Systems thinking
            </p>
            {systemSteps.map((step, index) => (
              <article
                key={step.label}
                className="system-copy absolute inset-x-0 top-12 max-w-xl"
              >
                <div className="mb-5 inline-flex border border-line px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                  0{index + 1} / {step.label}
                </div>
                <h2 className="text-balance text-4xl font-semibold leading-tight text-paper sm:text-5xl">
                  {step.title}
                </h2>
                <p className="mt-6 text-lg leading-8 text-paper/70">{step.body}</p>
              </article>
            ))}
          </div>

          <div className="system-assembly relative min-h-[560px] border border-line bg-panel/56 p-5 shadow-glow backdrop-blur">
            <div className="absolute left-5 right-5 top-5 flex items-center justify-between font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted">
              <span>system map</span>
              <span className="text-cyan">scrub linked</span>
            </div>

            <div className="relative mt-14 h-[470px] overflow-hidden border border-line bg-ink/60">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,241,232,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(244,241,232,0.08)_1px,transparent_1px)] bg-[size:56px_56px]" />

              <div data-viz-step="0" className="system-viz-item absolute left-[8%] top-[16%] w-44 border border-coral/60 bg-coral/10 p-4">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-coral">constraint</p>
                <p className="mt-3 text-sm leading-6 text-paper/72">Real user pain, messy data, limited time.</p>
              </div>

              <div data-viz-step="1" className="system-viz-item absolute right-[10%] top-[13%] w-48 border border-cyan/60 bg-cyan/10 p-4">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-cyan">architecture</p>
                <p className="mt-3 text-sm leading-6 text-paper/72">Pipeline, interface, monitoring, handoff.</p>
              </div>

              <div data-viz-step="2" className="system-viz-item absolute left-[18%] bottom-[18%] w-48 border border-amber/60 bg-amber/10 p-4">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-amber">adoption</p>
                <p className="mt-3 text-sm leading-6 text-paper/72">Onboarding, repeat usage, operator trust.</p>
              </div>

              <div data-viz-step="3" className="system-viz-item absolute right-[8%] bottom-[15%] w-48 border border-moss/60 bg-moss/10 p-4">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-moss">impact</p>
                <p className="mt-3 text-sm leading-6 text-paper/72">Behavior changed, decisions improved.</p>
              </div>

              <span className="system-flow absolute left-[32%] top-[28%] h-px w-[28%] bg-cyan/60" />
              <span className="system-flow absolute right-[30%] top-[38%] h-px w-[22%] rotate-90 bg-amber/70" />
              <span className="system-flow absolute left-[35%] bottom-[31%] h-px w-[32%] bg-moss/70" />
              <span className="system-flow absolute left-[23%] top-[45%] h-px w-[34%] rotate-[34deg] bg-paper/25" />

              <div data-viz-step="3" className="system-viz-item absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 border border-paper/18 bg-paper/5">
                <div className="grid h-full place-items-center font-mono text-[0.62rem] uppercase tracking-[0.18em] text-paper/64">
                  feedback loop
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
