import { content } from "@/data/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 -right-6 select-none font-serif text-[13rem] italic leading-none text-foreground/5 sm:text-[20rem]"
      >
        {content.initials}
      </p>

      <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {content.role}
        </p>
        <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          {content.name}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {content.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            看作品
          </a>
          <a
            href="#contact"
            className="rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            聯絡我
          </a>
        </div>

        <p className="mt-14 text-sm text-muted">{content.location}</p>
      </div>
    </section>
  );
}
