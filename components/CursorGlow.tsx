"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let raf = 0;
    let running = false;

    function tick() {
      x += (targetX - x) * 0.08;
      y += (targetY - y) * 0.08;
      el!.style.transform = `translate(${x}px, ${y}px)`;
      // 收斂後停下迴圈，游標靜止時不佔用每一幀
      if (Math.abs(targetX - x) < 0.1 && Math.abs(targetY - y) < 0.1) {
        running = false;
        return;
      }
      raf = requestAnimationFrame(tick);
    }

    function onMove(e: MouseEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    }

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} aria-hidden="true" className="cursor-glow" />;
}
