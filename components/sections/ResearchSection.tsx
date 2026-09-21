"use client";

import { researchResults } from "@/data/profile";
import { useGsapScope } from "@/hooks/useGsapScope";

export default function ResearchSection() {
  const { scope } = useGsapScope<HTMLElement>(({ gsap, scope }) => {
    gsap.fromTo(
      gsap.utils.toArray<HTMLElement>(".research-reveal", scope),
      { autoAlpha: 0, y: 22 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.11,
        scrollTrigger: {
          trigger: scope,
          start: "top 70%"
        }
      }
    );
  }, []);

  return (
    <section ref={scope} className="bg-paper py-28 text-ink">
      <div className="section-shell">
        <div className="research-reveal max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-ink/58">
            Research pipeline
          </p>
          <h2 className="mt-6 text-balance text-4xl font-semibold leading-tight sm:text-6xl">
            Minimal surface, rigorous machinery underneath.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="research-reveal border border-ink/12 bg-white/35 p-5">
            <div className="grid gap-4 md:grid-cols-5">
              {["Cohort", "Features", "Model", "Explain", "Deploy"].map((item, index) => (
                <div key={item} className="relative min-h-[168px] border border-ink/16 bg-paper p-4">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ink/48">
                    0{index + 1}
                  </p>
                  <p className="mt-10 text-xl font-semibold">{item}</p>
                  {index < 4 ? (
                    <span className="absolute -right-5 top-1/2 hidden h-px w-5 bg-ink/28 md:block" />
                  ) : null}
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {researchResults.map((result) => (
                <article key={result.label} className="border border-ink/12 p-4">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ink/48">
                    {result.label}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">{result.value}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/62">{result.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="research-reveal flex flex-col justify-between border border-ink/12 bg-ink p-6 text-paper">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-moss">
                Key result framing
              </p>
              <p className="mt-8 text-2xl leading-9 text-paper/82">
                The research section avoids inflated claims and instead shows
                the repeatable system: split discipline, model calibration,
                explainability, and deployable inference.
              </p>
            </div>
            <div className="mt-12 space-y-3 font-mono text-xs uppercase tracking-[0.18em] text-paper/56">
              <p>data flow verified</p>
              <p>error analysis exposed</p>
              <p>results ready for review</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
