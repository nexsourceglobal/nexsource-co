import { createFileRoute } from "@tanstack/react-router";
import industriesImg from "@/assets/industries.jpg";
import { PageHero, SectionHeading } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { industries, regions } from "@/lib/site";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Can Support — Nex Source Global" },
      {
        name: "description",
        content:
          "Sourcing support across industrial components, automotive, engineering products, consumer goods, packaging, textiles, electricals, construction materials and custom manufacturing.",
      },
      { property: "og:title", content: "Industries We Can Support — Nex Source Global" },
      { property: "og:description", content: "Product categories our sourcing process is built to handle." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/industries" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: Industries,
});

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Industries we can support"
        text="These are the categories our sourcing process is built to handle. Every enquiry is confirmed against your specific product, quality level and volumes before we commit to a scope."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-lg">
              <h2 className="text-base font-bold">{i}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Supplier research, evaluation and procurement coordination for {i.toLowerCase()} requirements.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
          <img
            src={industriesImg}
            alt="Warehouse with palletised goods being moved by a forklift"
            loading="lazy"
            width={1408}
            height={912}
            className="w-full rounded-2xl border border-border object-cover shadow-lg"
          />
          <div>
            <SectionHeading
              eyebrow="Markets"
              title="Manufacturing markets we can evaluate"
              text="Depending on your product and commercial expectations, we research suppliers across the following markets and other emerging manufacturing regions."
            />
            <div className="mt-7 flex flex-wrap gap-2">
              {regions.map((r) => (
                <span key={r} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection source="industries" />
    </>
  );
}
