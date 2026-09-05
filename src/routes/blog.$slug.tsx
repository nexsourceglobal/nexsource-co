import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CTASection } from "@/components/CTASection";
import { articles, company } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article unavailable — Nex Source Global" }, { name: "robots", content: "noindex" }] };
    }
    const a = loaderData.article;
    return {
      meta: [
        { title: `${a.title} — Nex Source Global` },
        { name: "description", content: a.excerpt },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.title,
            datePublished: a.date,
            articleSection: a.category,
            publisher: { "@type": "Organization", name: company.name },
          }),
        },
      ],
    };
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-2xl font-bold">Article not found</h1>
      <p className="mt-3 text-muted-foreground">This article may have moved or been unpublished.</p>
      <Link to="/blog" className="mt-6 inline-block font-semibold text-accent-foreground hover:underline">
        Back to all insights →
      </Link>
    </div>
  ),
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.22em] opacity-75">{article.category}</p>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{article.title}</h1>
          <p className="mt-5 text-sm opacity-80">
            Nex Source Global team · {article.date} · {article.readTime}
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-lg font-semibold leading-relaxed">{article.excerpt}</p>
        <div className="mt-7 space-y-5">
          {article.body.map((p) => (
            <p key={p.slice(0, 24)} className="leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>

        <h2 className="mt-14 font-display text-xl font-bold">Related articles</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              to="/blog/$slug"
              params={{ slug: r.slug }}
              className="rounded-2xl border border-border bg-card p-5 text-sm font-semibold leading-snug transition-shadow hover:shadow-lg"
            >
              {r.title}
            </Link>
          ))}
        </div>
      </article>

      <CTASection source={`blog-${article.slug}`} />
    </>
  );
}
