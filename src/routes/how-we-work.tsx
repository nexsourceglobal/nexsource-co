import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-sourcing.jpg";
import inspectionImg from "@/assets/inspection.jpg";
import { PageHero, SectionHeading } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { process } from "@/lib/site";

export const Route = createFileRoute("/how-we-work")({
  head: () => ({
    meta: [
      { title: "How We Work — Our Sourcing Process | Nex Source Global" },
      {
        name: "description",
        content:
          "Our six-step sourcing workflow: understand the requirement, research suppliers, evaluate capability, compare options, coordinate production and follow up to delivery.",
      },
      { property: "og:title", content: "How We Work — Our Sourcing Process" },
      { property: "og:description", content: "A six-step sourcing workflow applied consistently to every project." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/how-we-work" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/how-we-work" }],
  }),
  component: HowWeWork,
});

const deliverables = [
  "A written requirement summary agreed with you",
  "A shortlist of researched suppliers with reasoning",
  "Comparable quotations on the same specification",
  "Sampling and inspection coordination notes",
  "Production and dispatch status updates",
];

function HowWeWork() {
  return (
    <>
      <PageHero
        eyebrow="How We Work"
        title="A clear process, from requirement to dispatch"
        text="Sourcing goes wrong when steps are skipped. We follow the same six stages on every project, so decisions are made on comparable information."
         image={heroImg}
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-20">
        <ol className="relative space-y-6 border-l border-border pl-8">
          {process.map((p) => (
            <li key={p.no} className="relative">
            <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-[#D40000] text-xs font-bold text-white">           
              {p.no}
              </span>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="text-lg font-bold">{p.title}</h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            <SectionHeading eyebrow="What You Receive" title="What we deliver on a sourcing project" />
            <ul className="mt-7 space-y-3">
              {deliverables.map((d) => (
                <li key={d} className="rounded-xl border border-border bg-card p-4 text-sm font-semibold">
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={inspectionImg}
            alt="Inspector reviewing components against a specification sheet"
            loading="lazy"
            width={1408}
            height={912}
            className="w-full rounded-2xl border border-border object-cover shadow-lg"
          />
        </div>
      </section>

      <CTASection source="how-we-work" />
    </>
  );
}
