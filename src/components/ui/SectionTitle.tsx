interface SectionTitleProps {
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="text-3xl font-bold text-primary border-b-2 border-primary inline-block mb-8">
      {title}
    </h2>
  );
}