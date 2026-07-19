"use client";

import { useEffect } from "react";

const glyphs = ["♪", "♫", "♩", "♬"];

export default function ClickNotes() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function onClick(e: MouseEvent) {
      const target = e.target as Element | null;
      if (!target?.closest("a, button")) return;
      if (document.querySelectorAll(".click-note").length >= 12) return;

      const note = document.createElement("span");
      note.className = "click-note";
      note.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
      note.style.left = `${e.clientX}px`;
      note.style.top = `${e.clientY - 12}px`;
      note.style.fontSize = `${18 + Math.random() * 10}px`;
      document.body.appendChild(note);
      note.addEventListener("animationend", () => note.remove());
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
