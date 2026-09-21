"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { beyondCode, currentWork, leadership, navigation, profile, projects, researchSteps } from "@/data/profile";

const delay = (index: number) => ({ "--delay": `${index * 80}ms` } as CSSProperties);

function ProjectDisplay({ active }: { active: number }) {
  const project = projects[active];
  const modes = ["BIO / CELLULAR", "EDU / INTERVENTION", "CAMPUS / NETWORK", "COMMUNITY / SCALE"];

  return (
    <div className="project-display" data-active={active} aria-live="polite">
      <div className="display-bar"><span><i /> FLIGHT RECORDER</span><span>{project.number} / 04</span></div>
      <div className="display-screen">
        <div className="screen-grid" />
        <div className="screen-orbit orbit-primary" />
        <div className="screen-orbit orbit-secondary" />
        <div className="scan-sweep" />
        <div className="target-frame"><span className="target-corner corner-a" /><span className="target-corner corner-b" /><span className="target-corner corner-c" /><span className="target-corner corner-d" /><b>{project.number}</b></div>
        <div className="display-core"><small>ACTIVE MODULE</small><strong>{project.label}</strong><em>{modes[active]}</em></div>
        <div className="screen-point point-one" /><div className="screen-point point-two" /><div className="screen-point point-three" />
        <div className="screen-label label-one">INPUT / OBSERVE</div><div className="screen-label label-two">CONSTRAINT</div><div className="screen-label label-three">NEXT MOVE</div>
        <div className="trace trace-one" /><div className="trace trace-two" /><div className="trace trace-three" />
        <div className="display-coordinates">47°40&apos;N<br />122°12&apos;W</div>
      </div>
      <div className="display-bottom"><span>STATUS <b>ADAPTING</b></span><span>NO CLEAN DATA</span></div>
      <p className="display-caption">{project.lesson}</p>
    </div>
  );
}

function ResearchDisplay({ active }: { active: number }) {
  return (
    <div className="research-display" data-active={active} aria-live="polite">
      <div className="research-display-top"><span>BIOSIGNAL / TRACE 001</span><span>LIVE</span></div>
      <div className="cell-field">
        <div className="cell-grid" />
        <div className="cell cell-a"><i /><b /></div><div className="cell cell-b"><i /><b /></div><div className="cell cell-c"><i /><b /></div><div className="cell cell-d"><i /><b /></div><div className="cell cell-e"><i /><b /></div>
        <div className="cell-link link-a" /><div className="cell-link link-b" /><div className="cell-link link-c" /><div className="cell-link link-d" />
        <div className="scan-line" />
        <span className="cell-note note-one">SIGNAL</span><span className="cell-note note-two">CONTRADICTION</span><span className="cell-note note-three">STRUCTURE</span>
        <div className="research-equation"><span className="eq-question">?</span><span className="eq-test">ƒ(x)</span><span className="eq-rebuild">∫ ∂</span></div>
      </div>
      <div className="research-readout"><span>PHASE</span><strong>{researchSteps[active].label.toUpperCase()}</strong><span>MODEL / HUMAN / METHOD</span></div>
    </div>
  );
}

export default function HomeExperience() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const [activeResearch, setActiveResearch] = useState(0);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let px = 0.5;
    let py = 0.5;

    const paint = () => {
      frame = 0;
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      page.style.setProperty("--progress", (window.scrollY / maxScroll).toFixed(4));
      page.style.setProperty("--pointer-x", px.toFixed(4));
      page.style.setProperty("--pointer-y", py.toFixed(4));
    };
    const schedulePaint = () => { if (!frame) frame = window.requestAnimationFrame(paint); };
    const pointerMove = (event: PointerEvent) => {
      if (reducedMotion) return;
      px = event.clientX / window.innerWidth;
      py = event.clientY / window.innerHeight;
      schedulePaint();
    };

    paint();
    window.addEventListener("scroll", schedulePaint, { passive: true });
    window.addEventListener("pointermove", pointerMove, { passive: true });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("is-visible"); });
    }, { threshold: 0.12, rootMargin: "0px 0px -9% 0px" });
    page.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));

    const projectObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActiveProject(Number((entry.target as HTMLElement).dataset.projectIndex)); });
    }, { threshold: 0.6, rootMargin: "-16% 0px -34% 0px" });
    page.querySelectorAll("[data-project-index]").forEach((element) => projectObserver.observe(element));

    const researchObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActiveResearch(Number((entry.target as HTMLElement).dataset.researchIndex)); });
    }, { threshold: 0.55, rootMargin: "-12% 0px -30% 0px" });
    page.querySelectorAll("[data-research-index]").forEach((element) => researchObserver.observe(element));

    return () => {
      window.removeEventListener("scroll", schedulePaint);
      window.removeEventListener("pointermove", pointerMove);
      if (frame) window.cancelAnimationFrame(frame);
      revealObserver.disconnect(); projectObserver.disconnect(); researchObserver.disconnect();
    };
  }, []);

  return (
    <div className="hud-page" ref={pageRef}>
      <a className="skip-link" href="#content">Skip to content</a>
      <div className="hud-corners" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="progress-track" aria-hidden="true"><span /></div>

      <header className="hud-header">
        <a className="hud-logo" href="#top" aria-label="Anmol Josan home"><span>AJ</span><b>ANMOL JOSAN</b><small>SYS / 001</small></a>
        <div className="header-flight"><span className="live-dot" /> FLIGHT DECK // SEATTLE, WA <i>ALT 047</i></div>
        <div className="header-status">OPEN TO <b>THOUGHTFUL PROBLEMS</b></div>
        <nav aria-label="Primary navigation">{navigation.map((item, index) => <a key={item.href} href={item.href}><small>0{index + 1}</small>{item.label}</a>)}</nav>
      </header>

      <main id="content">
        <section className="hud-hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hud-kicker" data-reveal style={delay(0)}><span>MISSION 00</span> Orientation / systems in contact with reality</p>
            <h1 id="hero-title" data-reveal style={delay(1)}>Build for<br /><em>the moment<br />after launch.</em></h1>
            <p className="hero-description" data-reveal style={delay(2)}>I&apos;m Anmol Josan—a student researcher, software builder, and community operator. I work where biomedical ML, education, and the infrastructure of everyday life meet.</p>
            <div className="hero-actions" data-reveal style={delay(3)}><a className="hud-button" href="#work">View flight log <b>↓</b></a><a className="hud-text-link" href={profile.contact.github} target="_blank" rel="noreferrer">Open GitHub ↗</a></div>
          </div>
          <div className="hero-instrument" aria-label="Interactive systems radar visualization">
            <div className="radar"><div className="radar-scan" /><div className="radar-ring ring-outer" /><div className="radar-ring ring-middle" /><div className="radar-ring ring-inner" /><div className="radar-cross cross-horizontal" /><div className="radar-cross cross-vertical" /><div className="radar-target target-main"><span>AJ</span></div><div className="radar-target target-one" /><div className="radar-target target-two" /><div className="radar-target target-three" /><div className="radar-label radar-label-a">SIGNAL / 001</div><div className="radar-label radar-label-b">ITERATE</div><div className="radar-label radar-label-c">RETURN TO DATA</div></div>
            <div className="instrument-readouts"><div><span>VECTOR</span><b>CURIOUS</b></div><div><span>MODE</span><b>ADAPTIVE</b></div><div><span>RANGE</span><b>HUMAN</b></div></div>
          </div>
          <div className="hero-footer"><span>SCROLL TO DECODE THE SYSTEM</span><span>43°</span><span>© 2025—26</span></div>
        </section>

        <section className="telemetry-strip" data-reveal><div className="telemetry-intro"><span>LIVE TELEMETRY</span><b>What is moving</b></div>{profile.stats.map((stat, index) => <div className="telemetry-item" key={stat.label} style={delay(index)}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</section>

        <section className="mission-brief" data-reveal><div className="section-tag">MISSION BRIEF / 01</div><h2>Software is only<br /><em>interesting under load.</em></h2><p>The clean prototype is the easy part. I care about the people, constraints, edge cases, and feedback loops that decide whether a system earns another day of use.</p><div className="brief-line"><span /> <b>NO CLEAN DATA. NO PERFECT USERS.</b></div></section>

        <section className="mission-section" id="work" aria-labelledby="mission-title">
          <div className="section-heading-hud" data-reveal><div><span className="section-tag">MISSION LOG / 02</span><h2 id="mission-title">Four systems.<br /><em>Four kinds of friction.</em></h2></div><p>Follow the active signal. Each entry changes the instrument because the lesson changed the system.</p></div>
          <div className="mission-layout"><div className="mission-entries">{projects.map((project, index) => <article className={`mission-entry ${activeProject === index ? "is-active" : ""}`} data-project-index={index} data-reveal style={delay(index)} key={project.number}><button type="button" onClick={() => setActiveProject(index)} aria-pressed={activeProject === index}><span className="entry-id">{project.number}</span><span className="entry-main"><small>{project.label}</small><strong>{project.title}</strong></span><span className="entry-state">{activeProject === index ? "ACTIVE" : "TRACE"}</span></button><div className="entry-body"><p>{project.summary}</p><div className="entry-facts">{project.facts.map((fact) => <span key={fact}>+ {fact}</span>)}</div><div className="entry-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div><div className="mission-sticky"><ProjectDisplay active={activeProject} /></div></div>
        </section>

        <section className="research-section" id="research" aria-labelledby="research-title">
          <div className="research-heading" data-reveal><span className="section-tag">LAB TRACE / 03</span><h2 id="research-title">Follow the<br /><em>contradiction.</em></h2><p>In biomedical research, a good score is not the end of the question. It is the beginning of the investigation.</p><div className="research-tabs">{researchSteps.map((step, index) => <button key={step.label} type="button" className={activeResearch === index ? "is-active" : ""} onClick={() => setActiveResearch(index)} aria-pressed={activeResearch === index}><span>0{index + 1}</span>{step.label}</button>)}</div></div>
          <div className="research-stages">{researchSteps.map((step, index) => <article className="research-stage" data-research-index={index} data-reveal style={delay(index)} key={step.label}><span>0{index + 1} / {step.label}</span><h3>{step.title}</h3><p>{step.body}</p></article>)}</div>
          <ResearchDisplay active={activeResearch} />
        </section>

        <section className="operations-section" id="systems" aria-labelledby="operations-title"><div className="section-heading-hud" data-reveal><div><span className="section-tag">OPERATIONS / 04</span><h2 id="operations-title">Make the invisible<br /><em>part work.</em></h2></div><p>Some systems are measured in accuracy. Others are measured in a line that moves, a tutor who stays, or a door that opens.</p></div><div className="operations-grid">{leadership.map((item, index) => <article className="operation-card" data-reveal style={delay(index)} key={item.title}><span>0{index + 1} / FIELD NOTE</span><h3>{item.title}</h3><p>{item.description}</p><b>↗</b></article>)}</div></section>

        <section className="field-section" id="beyond" aria-labelledby="field-title"><div className="section-heading-hud" data-reveal><div><span className="section-tag">OFF-DUTY SYSTEMS / 05</span><h2 id="field-title">The lab is<br /><em>everywhere.</em></h2></div><p>Climbing, coaching, debate, and building a plane all ask the same question: what happens when the model meets the real thing?</p></div><div className="field-list">{beyondCode.map((item, index) => <details className="field-item" data-reveal style={delay(index)} key={item.title}><summary><span>0{index + 1}</span><strong>{item.title}</strong><i>+</i></summary><p>{item.description}</p></details>)}</div></section>

        <section className="current-section"><div className="current-orbit" aria-hidden="true"><span>NOW</span><i /><i /><i /></div><div data-reveal><span className="section-tag">CURRENT POSITION / 06</span><h2>Still looking for<br /><em>the useful question.</em></h2></div><ul>{currentWork.map((item, index) => <li data-reveal style={delay(index)} key={item}><span>0{index + 1}</span>{item}</li>)}</ul></section>

        <footer className="hud-footer" id="contact"><div className="footer-main" data-reveal><span className="section-tag">END OF TRANSMISSION / 07</span><h2>Have a problem<br /><em>worth thinking through?</em></h2><a className="hud-button light" href={`mailto:${profile.contact.email}`}>Open a channel <b>↗</b></a></div><div className="footer-meta"><span>ANMOL JOSAN / SEATTLE</span><div><a href={profile.contact.github} target="_blank" rel="noreferrer">GitHub</a><a href={profile.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={profile.contact.resume}>Resume</a></div><span>BUILT WITH CURIOSITY</span></div></footer>
      </main>
    </div>
  );
}
