import { content } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border px-6 py-8 text-sm text-muted">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p>
          &copy; {year} {content.name}
        </p>
        <a href="#top" className="transition-colors hover:text-foreground">
          回到頂端 ↑
        </a>
      </div>
    </footer>
  );
}
