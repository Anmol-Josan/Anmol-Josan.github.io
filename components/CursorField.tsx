"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function CursorField() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !window.matchMedia("(pointer: fine)").matches) {
      return undefined;
    }

    let frame = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const update = () => {
      frame = 0;
      cursorRef.current?.style.setProperty(
        "transform",
        `translate3d(${x - 18}px, ${y - 18}px, 0)`
      );
    };

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [reducedMotion]);

  if (reducedMotion) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-9 w-9 rounded-full border border-paper/35 mix-blend-difference md:block"
      aria-hidden="true"
    />
  );
}
