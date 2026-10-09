type Props = { eyebrow: string; title: string; description?: string; align?: "left" | "center" };

export function SectionIntro({ eyebrow, title, description, align = "left" }: Props) {
  return (
    <div className={`section-intro ${align === "center" ? "center" : ""}`} data-reveal>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
