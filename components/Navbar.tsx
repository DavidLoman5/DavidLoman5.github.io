"use client";

import { useState } from "react";
import { content } from "@/data/content";
import { CloseIcon, MenuIcon } from "@/components/icons";

const links = [
  { href: "#about", label: "關於我" },
  { href: "#projects", label: "作品" },
  { href: "#contact", label: "聯絡" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-serif text-xl italic tracking-tight text-accent"
          onClick={() => setOpen(false)}
        >
          {content.initials}
        </a>

        <ul className="hidden items-center gap-8 text-sm text-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="underline-offset-8 transition-colors hover:text-accent hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="btn-outline-cream hidden rounded-full px-4 py-2 text-sm sm:inline-block"
        >
          聯絡我
        </a>

        <button
          type="button"
          aria-label={open ? "關閉選單" : "開啟選單"}
          className="sm:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border px-6 py-4 text-sm sm:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 text-muted transition-colors hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
