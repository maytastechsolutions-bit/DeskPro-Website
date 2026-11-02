interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export function SectionHeading({ eyebrow, title, description, center = true }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-navy/60 text-balance">{description}</p>
      )}
    </div>
  );
}
