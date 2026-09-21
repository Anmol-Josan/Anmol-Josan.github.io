"use client";

import { useRef } from "react";
import { useGsapScope } from "@/hooks/useGsapScope";

export default function LeadershipSection() {
  const countRef = useRef<HTMLSpanElement | null>(null);

  const { scope } = useGsapScope<HTMLElement>(({ gsap, scope }) => {
    const counter = { value: 0 };
    const nodes = gsap.utils.toArray<HTMLElement>(".leadership-node", scope);

    gsap.set(nodes, { autoAlpha: 0, scale: 0.62 });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: scope,
        start: "top 62%",
        end: "bottom 72%",
        scrub: 0.8
      }
    });

    timeline.to(counter, {
      value: 2500,
      duration: 1.2,
      ease: "none",
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.textContent = Math.round(counter.value).toLocaleString();
        }
      }
    });

    timeline.to(nodes, { autoAlpha: 1, scale: 1, stagger: 0.05, duration: 0.6 }, 0.12);
    timeline.to(".leadership-graph-fill", { scaleY: 1, duration: 0.9, stagger: 0.05 }, 0.22);
  }, []);

  return (
    <section ref={scope} className="bg-ink py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-amber">
            Leadership / scale
          </p>
          <h2 className="mt-6 text-balance text-4xl font-semibold leading-tight text-paper sm:text-6xl">
            Leadership shows up as systems that keep scaling after launch.
          </h2>
          <p className="mt-6 text-lg leading-8 text-paper/68">
            The nonprofit and hackathon work are framed around operational
            design: onboarding, trust, measurable reach, and the technical
            systems that let a small team serve a larger community.
          </p>
        </div>

        <div className="border border-line bg-panel/58 p-5">
          <div className="grid gap-5 md:grid-cols-[0.75fr_1.25fr]">
            <div className="border border-line p-5">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                users reached
              </p>
              <p className="mt-8 text-6xl font-semibold text-paper">
                <span ref={countRef}>0</span>
              </p>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-moss">
                community scale
              </p>
            </div>

            <div className="relative min-h-[420px] overflow-hidden border border-line bg-ink p-5">
              <div className="absolute bottom-5 left-6 right-6 flex h-48 items-end gap-3">
                {[34, 58, 82, 124, 160, 196].map((height, index) => (
                  <div key={height} className="flex flex-1 items-end bg-paper/8">
                    <div
                      className="leadership-graph-fill h-full w-full origin-bottom scale-y-[0.08]"
                      style={{
                        height,
                        background: index % 2 ? "#f6c85f" : "#9bd870"
                      }}
                    />
                  </div>
                ))}
              </div>

              {[
                ["left-[12%] top-[14%]", "core team"],
                ["left-[42%] top-[18%]", "mentors"],
                ["right-[13%] top-[12%]", "students"],
                ["left-[18%] top-[42%]", "events"],
                ["right-[22%] top-[46%]", "partners"],
                ["left-[45%] top-[62%]", "feedback"]
              ].map(([position, label]) => (
                <div
                  key={label}
                  className={`leadership-node absolute ${position} rounded-full border border-cyan/50 bg-cyan/10 px-4 py-3 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-paper/72`}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
