type SectionHeadingProps = {
  index: string;
  title: string;
};

export default function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex items-baseline gap-4">
      <span className="font-serif text-2xl italic text-accent">{index}</span>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
    </div>
  );
}
