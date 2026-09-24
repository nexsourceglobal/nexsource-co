import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-sourcing.jpg";
import { PageHero } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { useSourcing } from "@/components/SourcingProvider";
import { company, services, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Sourcing & Procurement Services — Nex Source" },
      {
        name: "description",
        content:
          "Global sourcing, supplier identification and evaluation, procurement support, supplier verification, quality coordination, production follow-up and custom sourcing projects.",
      },
      { property: "og:title", content: "Sourcing & Procurement Services — Nex Source" },
      { property: "og:description", content: "Eight sourcing services covering discovery, evaluation, procurement and production follow-up." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  const { open } = useSourcing();

  return (
    <>
     <PageHero
  eyebrow="Services"
  title="Sourcing services that cover the whole requirement"
  text="Each service can run on its own or as part of a complete sourcing project. Scope, timelines and deliverables are always agreed before work starts."
  image={heroImg}
/>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((s) => (
            <article key={s.no} className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-xl">
              <span className="font-display text-xs font-bold tracking-[0.2em] text-muted-foreground">{s.no}</span>
              <h2 className="mt-3 font-display text-xl font-bold">{s.title}</h2>
              <p className="mt-3 text-sm font-semibold text-foreground">{s.short}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
              <div className="mt-6 flex flex-wrap gap-3">
<button
  onClick={() => open(`service-${s.title}`)}
  className="rounded-xl bg-[#D40000] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#B00000]"
>
  Start your project
</button>
                <a
                  href={whatsappLink(
                    `Hello ${company.brand}, I am interested in your ${s.title} service. I would like to discuss my requirement.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-border px-5 py-2.5 text-sm font-semibold hover:bg-accent"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection source="services" />
    </>
  );
}
