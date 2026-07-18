import { content } from "@/data/content";

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-5xl px-6 pt-40 pb-24 sm:pt-48 sm:pb-32">
        <p
          className="intro-item glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-muted"
          style={{ animationDelay: "80ms" }}
        >
          <span className="inline-block size-2 rounded-full bg-[var(--g2)]" />
          {content.role}
        </p>

        <h1
          className="intro-item mt-6 max-w-2xl text-5xl font-bold tracking-tight text-balance sm:text-7xl"
          style={{ animationDelay: "200ms" }}
        >
          <span className="text-gradient">{content.name}</span>
        </h1>

        <p
          className="intro-item mt-6 max-w-xl text-lg leading-relaxed text-muted"
          style={{ animationDelay: "340ms" }}
        >
          {content.tagline}
        </p>

        <div
          className="intro-item mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "480ms" }}
        >
          <a
            href="#projects"
            className="btn-gradient rounded-full px-7 py-3 text-sm font-medium text-white"
          >
            看作品
          </a>
          <a
            href="#contact"
            className="glass rounded-full px-7 py-3 text-sm font-medium transition-colors hover:text-accent"
          >
            聯絡我
          </a>
        </div>

        <p
          className="intro-item mt-14 text-sm text-muted"
          style={{ animationDelay: "620ms" }}
        >
          {content.location}
        </p>
      </div>
    </section>
  );
}
