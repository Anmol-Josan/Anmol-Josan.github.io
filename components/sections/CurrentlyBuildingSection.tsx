"use client";

import { currentlyBuilding } from "@/data/profile";
import { useGsapScope } from "@/hooks/useGsapScope";

export default function CurrentlyBuildingSection() {
  const { scope } = useGsapScope<HTMLElement>(({ gsap, scope }) => {
    gsap.fromTo(
      gsap.utils.toArray<HTMLElement>(".building-item", scope),
      { autoAlpha: 0, x: -20 },
      {
        autoAlpha: 1,
        x: 0,
        stagger: 0.12,
        duration: 0.5,
        scrollTrigger: {
          trigger: scope,
          start: "top 70%"
        }
      }
    );
  }, []);

  return (
    <section ref={scope} className="bg-paper py-24 text-ink">
      <div className="section-shell grid gap-10 md:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-ink/56">
            Currently building
          </p>
          <h2 className="mt-6 text-4xl font-semibold leading-tight">
            Work in motion.
          </h2>
        </div>

        <div className="space-y-4">
          {currentlyBuilding.map((item) => (
            <div
              key={item}
              className="building-item border border-ink/12 bg-white/35 p-5 text-xl font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
