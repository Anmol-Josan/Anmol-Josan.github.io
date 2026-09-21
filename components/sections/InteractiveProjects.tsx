"use client";

import type { CSSProperties } from "react";
import { projects, type ProjectStory } from "@/data/profile";
import { useGsapScope } from "@/hooks/useGsapScope";

function ProjectVisual({ project }: { project: ProjectStory }) {
  return (
    <div className="relative h-[460px] overflow-hidden border border-line bg-ink/72 p-5 md:h-[560px]">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,241,232,0.07)_1px,transparent_1px),linear-gradient(0deg,rgba(244,241,232,0.07)_1px,transparent_1px)] bg-[size:54px_54px]" />

      <div className="project-visual-layer absolute inset-5 opacity-100" data-project-layer="0">
        <div className="absolute left-[8%] top-[12%] h-28 w-28 border border-coral/60 bg-coral/10" />
        <div className="absolute bottom-[16%] left-[18%] h-20 w-44 border border-paper/15 bg-paper/5" />
        <div className="absolute right-[12%] top-[20%] h-48 w-2 bg-coral/80" />
        <div className="absolute bottom-[22%] right-[18%] h-32 w-2 bg-coral/40" />
        <p className="absolute bottom-4 left-4 max-w-[250px] font-mono text-xs uppercase leading-6 tracking-[0.18em] text-paper/54">
          ambiguous signals / fragmented workflow
        </p>
      </div>

      <div className="project-visual-layer absolute inset-5 opacity-0" data-project-layer="1">
        <div className="absolute left-[8%] top-[18%] flex gap-2">
          {project.signals.map((signal) => (
            <span
              key={signal}
              className="border border-paper/16 px-3 py-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-paper/64"
            >
              {signal}
            </span>
          ))}
        </div>
        <div className="absolute left-[14%] top-[45%] h-px w-[64%] bg-paper/20" />
        <div
          className="absolute left-[17%] top-[39%] h-16 w-16 rounded-full border bg-panel"
          style={{ borderColor: project.accent }}
        />
        <div
          className="absolute left-[42%] top-[38%] h-20 w-20 rounded-full border bg-panel"
          style={{ borderColor: project.secondaryAccent }}
        />
        <div
          className="absolute right-[13%] top-[37%] h-24 w-24 rounded-full border bg-panel"
          style={{ borderColor: project.accent }}
        />
        <p className="absolute bottom-4 left-4 max-w-[260px] font-mono text-xs uppercase leading-6 tracking-[0.18em] text-paper/54">
          typed pipeline / observable system / deployable interface
        </p>
      </div>

      <div className="project-visual-layer absolute inset-5 opacity-0" data-project-layer="2">
        <div className="absolute left-6 top-8 w-[72%] space-y-4">
          {project.metrics.map((metric, index) => (
            <div key={metric.label}>
              <div className="mb-2 flex justify-between font-mono text-[0.62rem] uppercase tracking-[0.18em] text-paper/56">
                <span>{metric.label}</span>
                <span>{metric.value}</span>
              </div>
              <div className="h-2 overflow-hidden bg-paper/10">
                <div
                  className="metric-fill h-full"
                  style={{
                    background: index % 2 ? project.secondaryAccent : project.accent,
                    transform: "scaleX(0.18)"
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div
          className="absolute bottom-10 right-10 grid h-32 w-32 place-items-center rounded-full border font-mono text-xs uppercase tracking-[0.18em]"
          style={{ borderColor: project.accent, color: project.accent }}
        >
          impact loop
        </div>
      </div>
    </div>
  );
}

function ProjectStoryBlock({ project, index }: { project: ProjectStory; index: number }) {
  return (
    <section
      className="project-story min-h-[260vh]"
      style={
        {
          "--project-accent": project.accent,
          "--project-secondary": project.secondaryAccent
        } as CSSProperties
      }
    >
      <div className="project-sticky sticky top-0 grid min-h-screen items-center gap-10 py-16 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--project-accent)]">
            0{index + 1} / {project.kicker}
          </p>
          <h2 className="mt-6 max-w-xl text-balance text-4xl font-semibold leading-tight text-paper sm:text-5xl">
            {project.title}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-paper/68">
            {project.summary}
          </p>

          <div className="relative mt-10 min-h-[270px]">
            {project.stages.map((stage, stageIndex) => (
              <article
                key={stage.label}
                className={`project-stage absolute inset-x-0 top-0 border-l border-[color:var(--project-accent)] pl-5 ${stageIndex === 0 ? "opacity-100" : "opacity-0"}`}
                data-stage={stageIndex}
              >
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                  {stage.label}
                </p>
                <h3 className="mt-4 text-2xl font-semibold leading-snug text-paper">
                  {stage.title}
                </h3>
                <p className="mt-4 leading-7 text-paper/66">{stage.body}</p>
                <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--project-accent)]">
                  {stage.metric}
                </p>
              </article>
            ))}
          </div>
        </div>

        <ProjectVisual project={project} />
      </div>
    </section>
  );
}

function StaticProjects() {
  return (
    <section className="bg-[#090a08] py-28">
      <div className="section-shell">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan">
          Projects as systems
        </p>
        <h2 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-tight text-paper sm:text-6xl">
          Each project is shown as a flow from constraint to shipped behavior.
        </h2>

        <div className="mt-14 space-y-10">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="border border-line bg-panel/58 p-6"
              style={
                {
                  "--project-accent": project.accent
                } as CSSProperties
              }
            >
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--project-accent)]">
                0{index + 1} / {project.kicker}
              </p>
              <h3 className="mt-5 text-3xl font-semibold text-paper">{project.title}</h3>
              <p className="mt-4 max-w-3xl leading-7 text-paper/68">{project.summary}</p>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {project.stages.map((stage) => (
                  <div key={stage.label} className="border border-line p-5">
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                      {stage.label}
                    </p>
                    <h4 className="mt-4 text-xl font-semibold text-paper">{stage.title}</h4>
                    <p className="mt-3 text-sm leading-6 text-paper/64">{stage.body}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function InteractiveProjects() {
  const { scope, reducedMotion } = useGsapScope<HTMLElement>(({ gsap, scope }) => {
    const stories = gsap.utils.toArray<HTMLElement>(".project-story", scope);

    stories.forEach((story) => {
      const stages = gsap.utils.toArray<HTMLElement>(".project-stage", story);
      const layers = gsap.utils.toArray<HTMLElement>(".project-visual-layer", story);
      const fills = gsap.utils.toArray<HTMLElement>(".metric-fill", story);

      gsap.set(stages, { autoAlpha: 0, y: 24 });
      gsap.set(stages[0], { autoAlpha: 1, y: 0 });
      gsap.set(layers, { autoAlpha: 0, y: 18 });
      gsap.set(layers[0], { autoAlpha: 1, y: 0 });
      gsap.set(fills, { scaleX: 0.16, transformOrigin: "left center" });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: story,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.7
        }
      });

      stages.forEach((stage, index) => {
        const position = index;
        if (index > 0) {
          timeline.to(stages[index - 1], { autoAlpha: 0, y: -18, duration: 0.3 }, position);
          timeline.to(layers[index - 1], { autoAlpha: 0, y: -16, duration: 0.3 }, position);
        }

        timeline.to(stage, { autoAlpha: 1, y: 0, duration: 0.36 }, position + 0.05);
        timeline.to(layers[index], { autoAlpha: 1, y: 0, duration: 0.42 }, position + 0.05);

        if (index === stages.length - 1) {
          timeline.to(fills, { scaleX: 1, duration: 0.75, stagger: 0.08 }, position + 0.28);
        }
      });
    });
  }, []);

  if (reducedMotion) {
    return <StaticProjects />;
  }

  return (
    <section ref={scope} className="bg-[#090a08] py-28">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan">
            Projects as systems
          </p>
          <h2 className="mt-6 text-balance text-4xl font-semibold leading-tight text-paper sm:text-6xl">
            Each project is shown as a flow from constraint to shipped behavior.
          </h2>
        </div>

        <div className="mt-12 space-y-10">
          {projects.map((project, index) => (
            <ProjectStoryBlock key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>

      {reducedMotion ? (
        <p className="section-shell mt-8 font-mono text-xs uppercase tracking-[0.24em] text-muted">
          Motion reduced: stories are presented without scroll scrubbing.
        </p>
      ) : null}
    </section>
  );
}
