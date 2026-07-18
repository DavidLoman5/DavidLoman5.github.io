import { content } from "@/data/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* 五線譜裝飾:一段譜線與停在上面的音符 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-14 text-foreground/12"
      >
        <div className="staff-lines" />
        <span className="absolute -top-5 left-[18%] font-serif text-3xl text-accent/50">
          ♪
        </span>
        <span className="absolute -top-7 left-[63%] font-serif text-4xl text-foreground/25">
          ♫
        </span>
      </div>

      <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-36 sm:pt-32 sm:pb-44">
        <p
          className="intro-item font-serif text-lg italic text-accent"
          style={{ animationDelay: "80ms" }}
        >
          ♪ {content.role}
        </p>

        <h1
          className="intro-item mt-6 max-w-2xl font-serif text-5xl font-semibold tracking-tight text-balance sm:text-7xl"
          style={{ animationDelay: "200ms" }}
        >
          {content.name}
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
            className="btn-brass rounded-full px-7 py-3 text-sm font-medium"
          >
            看作品
          </a>
          <a
            href="#contact"
            className="btn-outline-cream rounded-full px-7 py-3 text-sm font-medium"
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
