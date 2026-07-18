import { content } from "@/data/content";
import SectionHeading from "@/components/SectionHeading";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="03" title="聯絡" />

        <p className="max-w-xl leading-relaxed text-muted">
          有專案想討論，或只是想打聲招呼，都歡迎寫信給我。
        </p>

        <a
          href={`mailto:${content.email}`}
          className="mt-8 inline-flex items-center gap-3 text-2xl font-medium tracking-tight transition-colors hover:text-accent sm:text-3xl"
        >
          <MailIcon className="size-6 text-accent shrink-0" />
          {content.email}
        </a>

        <div className="mt-10 flex items-center gap-5">
          <a
            href={content.social.github}
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-6" />
          </a>
          <a
            href={content.social.linkedin}
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-foreground"
          >
            <LinkedinIcon className="size-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
