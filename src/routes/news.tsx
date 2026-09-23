import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-sourcing.jpg";
import { PageHero } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { news } from "@/lib/site";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Company Updates — Nex Source Global" },
      {
        name: "description",
        content:
          "Company updates, industry news and sourcing notes from Nex Source Global. Sample content is clearly marked until official announcements are published.",
      },
      { property: "og:title", content: "News & Company Updates — Nex Source Global" },
      { property: "og:description", content: "Company updates, industry news and sourcing notes." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/news" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: News,
});

function News() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="Company and industry updates"
        text="Updates from our sourcing desk and notes on what we are seeing in manufacturing markets."
         image={heroImg}
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="rounded-xl border border-border bg-secondary p-4 text-sm text-muted-foreground">
          The items below are sample entries used to demonstrate the news layout. They will be replaced with official announcements.
        </p>
        <div className="mt-8 space-y-4">
          {news.map((n) => (
            <article key={n.slug} className="rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-lg">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="rounded-full bg-accent px-3 py-1 font-semibold text-accent-foreground">{n.category}</span>
                <span className="text-muted-foreground">{n.date}</span>
              </div>
              <h2 className="mt-4 font-display text-lg font-bold leading-snug">{n.title}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{n.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection source="news" />
    </>
  );
}
