"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Setup = (helpers: {
  gsap: typeof gsap;
  ScrollTrigger: typeof ScrollTrigger;
  scope: HTMLElement;
}) => void;

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? () => undefined : useLayoutEffect;

export function useGsapScope<T extends HTMLElement>(
  setup: Setup,
  dependencies: React.DependencyList = []
) {
  const scope = useRef<T | null>(null);
  const reducedMotion = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    if (reducedMotion || !scope.current) {
      return undefined;
    }

    gsap.registerPlugin(ScrollTrigger);

    // gsap.context scopes selectors to this component and cleans every trigger on unmount.
    const context = gsap.context(() => {
      setup({ gsap, ScrollTrigger, scope: scope.current as HTMLElement });
    }, scope);

    return () => context.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion, ...dependencies]);

  return { scope, reducedMotion };
}
