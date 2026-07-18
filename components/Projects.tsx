import { content } from "@/data/content";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { ArrowUpRightIcon } from "@/components/icons";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading index="f" title="作品" />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 120} className="h-full">
              <article
                className="sheet flex h-full flex-col rounded-lg p-6"
                style={{ ["--rot" as string]: `${i % 2 === 0 ? -1.2 : 1.1}deg` }}
              >
                <h3 className="font-serif text-lg font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-paper-muted">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-paper-border px-2.5 py-1 text-xs text-paper-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {(project.links.demo || project.links.code) && (
                  <div className="mt-6 flex gap-5 text-sm font-medium">
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        className="inline-flex items-center gap-1 text-paper-ink underline-offset-4 hover:underline"
                      >
                        Demo
                        <ArrowUpRightIcon className="size-3.5" />
                      </a>
                    )}
                    {project.links.code && (
                      <a
                        href={project.links.code}
                        className="inline-flex items-center gap-1 text-paper-muted hover:text-paper-ink"
                      >
                        程式碼
                        <ArrowUpRightIcon className="size-3.5" />
                      </a>
                    )}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
