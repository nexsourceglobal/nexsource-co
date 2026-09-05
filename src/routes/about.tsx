import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, User } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";
import inspectionImg from "@/assets/inspection.jpg";
import { PageHero, SectionHeading } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { company, process } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Nex Source Global — Sourcing & Procurement Partner" },
      {
        name: "description",
        content:
          "Nex Source Global is a global sourcing and procurement company based in New Delhi, India, supporting businesses with supplier discovery, evaluation and production coordination.",
      },
      { property: "og:title", content: "About Nex Source Global" },
      { property: "og:description", content: "Who we are, what we do and how we work as your sourcing partner." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { title: "Clarity first", text: "A written requirement before a price. Every option explained in plain terms." },
  { title: "Transparency", text: "You always know who the supplier is and why an option was recommended." },
  { title: "Realistic advice", text: "If a specification does not fit a target price, we say so early." },
  { title: "Consistency", text: "The same evaluation criteria applied to every supplier on your shortlist." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A sourcing partner built around clear requirements"
        text="Nex Source Global connects businesses with capable manufacturers and supports the procurement work that follows — from quotation to dispatch preparation."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <SectionHeading eyebrow="Company Information" title="Nex Source Global Pvt. Limited" />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <dl className="rounded-2xl border border-border bg-card p-7 lg:col-span-2">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Company name</dt>
                <dd className="mt-1.5 font-semibold">{company.name}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Business type</dt>
                <dd className="mt-1.5 font-semibold">Global sourcing, procurement &amp; supply-chain support</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Website</dt>
                <dd className="mt-1.5 font-semibold">{company.domain}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Email</dt>
                <dd className="mt-1.5 font-semibold">{company.email}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Registered address</dt>
                <dd className="mt-1.5 font-semibold">
                  {company.address.line1}, {company.address.line2}, {company.address.city}, {company.address.country}
                </dd>
              </div>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Registration, tax and certification details will be published here once confirmed by the company.
            </p>
          </dl>

          <div className="rounded-2xl border border-border bg-secondary p-7">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Contact Person</h3>
            <p className="mt-3 flex items-center gap-2 font-display text-lg font-bold">
              <User className="h-5 w-5 text-accent-foreground" /> {company.contactPerson}
            </p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent-foreground" />
                <a href={`tel:${company.phoneRaw}`} className="hover:underline">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent-foreground" />
                <a href={`mailto:${company.email}`} className="hover:underline">
                  {company.email}
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground" />
                <span>
                  {company.address.line1}, {company.address.line2}
                  <br />
                  {company.address.city}, {company.address.country}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="Between the buyer and the manufacturing floor"
              text="We work as an extension of your procurement function. That means understanding your product properly, researching suppliers who can genuinely make it, and staying involved while it is produced."
            />
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Our approach is deliberately practical. We document the requirement, research suitable manufacturers, compare them on the
              same basis, and keep communication moving between both sides until the order is complete.
            </p>
          </div>
          <img
            src={aboutImg}
            alt="Business team discussing supplier evaluation documents"
            loading="lazy"
            width={1408}
            height={912}
            className="w-full rounded-2xl border border-border object-cover shadow-lg"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <SectionHeading eyebrow="What We Do" title="Our scope of work" />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <img
            src={inspectionImg}
            alt="Quality inspector checking machined metal components on a production line"
            loading="lazy"
            width={1408}
            height={912}
            className="w-full rounded-2xl border border-border object-cover shadow-lg"
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              "Supplier discovery and shortlisting",
              "Supplier capability evaluation",
              "RFQ and quotation comparison",
              "Supplier verification support",
              "Quality and inspection coordination",
              "Production and dispatch follow-up",
              "Sourcing diversification support",
              "Custom sourcing project management",
            ].map((s) => (
              <li key={s} className="rounded-xl border border-border bg-card p-5 text-sm font-semibold">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <SectionHeading eyebrow="Our Values" title="How we prefer to work" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <SectionHeading eyebrow="How We Work" title="Six steps, applied consistently" />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((p) => (
            <li key={p.no} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-display text-2xl font-extrabold text-accent-foreground/30">{p.no}</span>
              <h3 className="mt-2 text-base font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <CTASection source="about" />
    </>
  );
}
