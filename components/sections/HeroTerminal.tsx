"use client";

import { ChevronDown, Cpu, Radio } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { profile } from "@/data/profile";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import GraphBackground from "@/components/visuals/GraphBackground";

export default function HeroTerminal() {
  const reducedMotion = useReducedMotion();
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [activeLine, setActiveLine] = useState("");

  const bootLines = useMemo(() => profile.bootLines, []);

  useEffect(() => {
    if (reducedMotion) {
      setCompletedLines(bootLines);
      setActiveLine("");
      return undefined;
    }

    const timers: number[] = [];
    let lineIndex = 0;
    let charIndex = 0;

    const typeNext = () => {
      const line = bootLines[lineIndex];
      setActiveLine(line.slice(0, charIndex + 1));
      charIndex += 1;

      if (charIndex < line.length) {
        timers.push(window.setTimeout(typeNext, 34 + (charIndex % 4) * 10));
        return;
      }

      timers.push(
        window.setTimeout(() => {
          setCompletedLines((lines) => [...lines, line]);
          setActiveLine("");
          lineIndex += 1;
          charIndex = 0;

          if (lineIndex < bootLines.length) {
            timers.push(window.setTimeout(typeNext, 170));
          }
        }, 320)
      );
    };

    timers.push(window.setTimeout(typeNext, 420));
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [bootLines, reducedMotion]);

  const scrollToSystems = () => {
    document.querySelector("#systems")?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start"
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      <GraphBackground />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,7,0.18),rgba(7,8,7,0.92)_82%,#070807)]" />

      <div className="section-shell relative z-10 flex min-h-screen flex-col justify-between pb-8 pt-8 sm:pt-10">
        <header className="flex items-center justify-between gap-4 font-mono text-[0.68rem] uppercase tracking-[0.26em] text-paper/60">
          <a href="#top" className="flex items-center gap-2 text-paper">
            <Cpu className="h-4 w-4 text-moss" aria-hidden="true" />
            {profile.name}
          </a>
          <div className="hidden items-center gap-2 sm:flex">
            <Radio className="h-4 w-4 text-cyan" aria-hidden="true" />
            live systems portfolio
          </div>
        </header>

        <div id="top" className="grid items-end gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-8 inline-flex items-center border border-line bg-ink/55 px-3 py-2 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-muted backdrop-blur">
              research / systems / impact
            </div>
            <h1 className="max-w-5xl text-balance text-5xl font-semibold leading-[0.96] tracking-normal text-paper sm:text-7xl lg:text-8xl">
              Building deployed intelligence for real-world constraints.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-paper/70 sm:text-xl">
              {profile.role}. The work spans biomedical ML research, full-stack
              deployment, nonprofit leadership, competitive programming, and
              environmental decision systems.
            </p>
          </div>

          <div className="border border-line bg-ink/70 p-4 shadow-glow backdrop-blur">
            <div className="mb-4 flex items-center justify-between border-b border-line pb-3 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted">
              <span>system boot</span>
              <span className="text-moss">online</span>
            </div>
            <div className="min-h-[212px] space-y-3 font-mono text-sm leading-7 text-paper/84 sm:text-base">
              {completedLines.map((line) => (
                <p key={line}>
                  <span className="text-moss">&gt;</span> {line}
                </p>
              ))}
              {activeLine ? (
                <p className="terminal-caret">
                  <span className="text-moss">&gt;</span> {activeLine}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={scrollToSystems}
          className="group mb-2 inline-flex w-fit items-center gap-3 border border-line bg-paper px-4 py-3 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-ink transition hover:bg-moss focus:outline-none focus:ring-2 focus:ring-moss focus:ring-offset-2 focus:ring-offset-ink"
        >
          <ChevronDown className="h-4 w-4 transition group-hover:translate-y-1" aria-hidden="true" />
          Scroll the system
        </button>
      </div>
    </section>
  );
}
