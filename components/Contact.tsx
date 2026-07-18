import { content } from "@/data/content";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading index="03" title="聯絡" />
        </Reveal>

        <Reveal delay={120}>
          <div className="glass rounded-3xl p-8 sm:p-12">
            <p className="max-w-xl leading-relaxed text-muted">
              有專案想討論，或只是想打聲招呼，都歡迎寫信給我。
            </p>

            <a
              href={`mailto:${content.email}`}
              className="mt-8 inline-flex items-center gap-3 text-2xl font-semibold tracking-tight transition-opacity hover:opacity-80 sm:text-3xl"
            >
              <MailIcon className="size-6 shrink-0 text-accent" />
              <span className="text-gradient">{content.email}</span>
            </a>

            <div className="mt-10 flex items-center gap-4">
              <a
                href={content.social.github}
                aria-label="GitHub"
                className="glass rounded-full p-3 text-muted transition-all hover:-translate-y-0.5 hover:text-foreground"
              >
                <GithubIcon className="size-5" />
              </a>
              <a
                href={content.social.linkedin}
                aria-label="LinkedIn"
                className="glass rounded-full p-3 text-muted transition-all hover:-translate-y-0.5 hover:text-foreground"
              >
                <LinkedinIcon className="size-5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
