import { content } from "@/data/content";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading index="mp" title="關於我" />
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr] sm:gap-16">
          <Reveal delay={100}>
            <div className="space-y-4 leading-relaxed text-muted">
              {content.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div>
              <p className="mb-4 font-serif text-sm italic text-accent">技能</p>
              <ul className="flex flex-wrap gap-2">
                {content.about.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border px-3 py-1 text-sm text-foreground/90 transition-colors hover:border-accent hover:text-accent"
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
