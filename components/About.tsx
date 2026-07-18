import { content } from "@/data/content";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading index="01" title="關於我" />
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-[1.2fr_1fr] sm:gap-10">
          <Reveal delay={100}>
            <div className="glass h-full space-y-4 rounded-3xl p-8 leading-relaxed text-muted">
              {content.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="glass h-full rounded-3xl p-8">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                技能
              </p>
              <ul className="flex flex-wrap gap-2">
                {content.about.skills.map((skill) => (
                  <li
                    key={skill}
                    className="glass rounded-full px-3 py-1 text-sm text-foreground/90 transition-transform hover:-translate-y-0.5"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
