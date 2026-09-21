"use client";

import { principles } from "@/data/profile";
import { useGsapScope } from "@/hooks/useGsapScope";

export default function ThinkingSection() {
  const { scope } = useGsapScope<HTMLElement>(({ gsap, scope }) => {
    gsap.fromTo(
      gsap.utils.toArray<HTMLElement>(".thinking-line", scope),
      { autoAlpha: 0, y: 24 },
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.14,
        duration: 0.62,
        scrollTrigger: {
          trigger: scope,
          start: "top 64%"
        }
      }
    );
  }, []);

  return (
    <section ref={scope} className="bg-[#0b0c09] py-28">
      <div className="section-shell">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-moss">
          Thinking
        </p>
        <div className="mt-10 border-y border-line">
          {principles.map((principle, index) => (
            <div
              key={principle}
              className="thinking-line grid gap-4 border-b border-line py-8 last:border-b-0 md:grid-cols-[160px_1fr]"
            >
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                Principle 0{index + 1}
              </p>
              <h2 className="text-balance text-3xl font-semibold leading-tight text-paper sm:text-5xl">
                {principle}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
