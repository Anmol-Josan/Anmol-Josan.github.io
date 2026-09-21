"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

export default function GraphBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return undefined;
    }

    let width = 0;
    let height = 0;
    let frame = 0;
    const nodes: Node[] = Array.from({ length: 34 }, (_, index) => ({
      x: 0,
      y: 0,
      vx: index % 2 ? 0.12 : -0.08,
      vy: index % 3 ? 0.06 : -0.1,
      r: index % 5 === 0 ? 2.4 : 1.6
    }));

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.6);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

      nodes.forEach((node, index) => {
        const column = index % 7;
        const row = Math.floor(index / 7);
        node.x = ((column + 0.5) / 7) * width + ((index % 3) - 1) * 16;
        node.y = ((row + 0.5) / 5) * height + ((index % 4) - 1.5) * 18;
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(7, 8, 7, 0.22)";
      ctx.fillRect(0, 0, width, height);

      nodes.forEach((node, index) => {
        if (!reducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }

        for (let otherIndex = index + 1; otherIndex < nodes.length; otherIndex++) {
          const other = nodes[otherIndex];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 190) {
            const alpha = (1 - distance / 190) * 0.22;
            ctx.strokeStyle = `rgba(110, 214, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        ctx.fillStyle = index % 4 === 0 ? "rgba(155, 216, 112, 0.9)" : "rgba(244, 241, 232, 0.58)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!reducedMotion) {
        frame = window.requestAnimationFrame(draw);
      }
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-70"
      aria-hidden="true"
    />
  );
}
