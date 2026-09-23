import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  text,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  text: string;
  image?: string;
}) {
  return (
    <section
      className="relative isolate overflow-hidden border-b border-border bg-[#0C2036] bg-cover bg-center bg-no-repeat text-white"
      style={
        image
          ? {
              backgroundImage: `
linear-gradient(
  90deg,
  rgba(5, 25, 45, 0.92) 0%,
  rgba(5, 25, 45, 0.72) 45%,
  rgba(5, 25, 45, 0.25) 100%
),
                url(${image})
              `,
            }
          : undefined
      }
    >
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">
          {eyebrow}
        </p>

        <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          {text}
        </p>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      {text && (
        <p className="mt-4 leading-relaxed text-muted-foreground">{text}</p>
      )}
    </div>
  );
}
