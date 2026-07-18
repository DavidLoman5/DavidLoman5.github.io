import { content } from "@/data/content";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading index="fine" title="聯絡" />
        </Reveal>

        <Reveal delay={120}>
          <p className="max-w-xl leading-relaxed text-muted">
            有專案想討論，或只是想打聲招呼，都歡迎寫信給我。
          </p>

          <a
            href={`mailto:${content.email}`}
            className="mt-8 inline-flex items-center gap-3 font-serif text-2xl font-semibold italic tracking-tight transition-colors hover:text-accent sm:text-3xl"
          >
            <MailIcon className="size-6 shrink-0 text-accent" />
            {content.email}
          </a>

          <div className="mt-10 flex items-center gap-4">
            <a
              href={content.social.github}
              aria-label="GitHub"
              className="rounded-full border border-border p-3 text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <GithubIcon className="size-5" />
            </a>
            <a
              href={content.social.linkedin}
              aria-label="LinkedIn"
              className="rounded-full border border-border p-3 text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <LinkedinIcon className="size-5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
