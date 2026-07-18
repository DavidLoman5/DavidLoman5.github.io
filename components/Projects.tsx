import { content } from "@/data/content";
import SectionHeading from "@/components/SectionHeading";
import { ArrowUpRightIcon } from "@/components/icons";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="02" title="作品" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/5"
            >
              <h3 className="text-lg font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted"
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
                      className="inline-flex items-center gap-1 text-accent hover:underline"
                    >
                      Demo
                      <ArrowUpRightIcon className="size-3.5" />
                    </a>
                  )}
                  {project.links.code && (
                    <a
                      href={project.links.code}
                      className="inline-flex items-center gap-1 text-foreground/80 hover:text-accent"
                    >
                      程式碼
                      <ArrowUpRightIcon className="size-3.5" />
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
