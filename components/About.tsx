import { content } from "@/data/content";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="01" title="關於我" />

        <div className="grid gap-10 sm:grid-cols-[1fr_1.2fr] sm:gap-16">
          <div className="space-y-4 leading-relaxed text-muted">
            {content.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              技能
            </p>
            <ul className="flex flex-wrap gap-2">
              {content.about.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border px-3 py-1 text-sm text-foreground/90"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
