type Props = { eyebrow: string; title: string; intro?: string };

export default function SectionHeading({ eyebrow, title, intro }: Props) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="title-page">{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}
