import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-sourcing.jpg";
import { PageHero } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { articles } from "@/lib/site";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Sourcing Insights & Articles — Nex Source Global" },
      {
        name: "description",
        content:
          "Practical articles on global sourcing, procurement, supplier management, quality and supply-chain planning from the Nex Source Global team.",
      },
      { property: "og:title", content: "Sourcing Insights & Articles — Nex Source Global" },
      { property: "og:description", content: "Practical reading on sourcing, procurement, suppliers and quality." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  const categories = Array.from(new Set(articles.map((a) => a.category)));

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Sourcing and procurement, explained simply"
        text="Short, practical articles for buyers, procurement teams and business owners working with manufacturers."
         image={heroImg}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <span key={c} className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-muted-foreground">
              {c}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <article key={a.slug} className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-xl">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent-foreground">{a.category}</span>
              <h2 className="mt-3 font-display text-lg font-bold leading-snug">
                <Link to="/blog/$slug" params={{ slug: a.slug }} className="hover:underline">
                  {a.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
              <p className="mt-5 text-xs text-muted-foreground">
                {a.date} · {a.readTime}
              </p>
              <Link
                to="/blog/$slug"
                params={{ slug: a.slug }}
                className="mt-4 text-sm font-semibold text-accent-foreground hover:underline"
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CTASection source="blog" />
    </>
  );
}
