import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ClipboardCheck,
  Globe2,
  Handshake,
  MessageCircle,
  Search,
  ShieldCheck,
} from "lucide-react";
import heroImg from "@/assets/hero-sourcing.jpg";
import aboutImg from "@/assets/about-team.jpg";
import mapImg from "@/assets/network-map.jpg";
import industriesImg from "@/assets/industries.jpg";
import { SectionHeading } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { useSourcing } from "@/components/SourcingProvider";
import { articles, company, industries, process, regions, services, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nex Source Global — Source Smarter, Build Better Supply Chains" },
      {
        name: "description",
        content:
          "Global sourcing and procurement support: supplier discovery, evaluation, verification, quality coordination and production follow-up for businesses building reliable supplier networks.",
      },
      { property: "og:title", content: "Nex Source Global — Source Smarter, Build Better Supply Chains" },
      {
        property: "og:description",
        content: "Supplier discovery, evaluation, procurement support and production follow-up for growing businesses.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: company.name,
          url: company.domain,
          email: company.email,
          telephone: company.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: `${company.address.line1}, ${company.address.line2}`,
            addressLocality: "New Delhi",
            postalCode: "110015",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: Home,
});

const trust = [
  { icon: Search, title: "Supplier Discovery", text: "Manufacturers matched to your product and volumes." },
  { icon: ShieldCheck, title: "Quality Focus", text: "Expectations agreed before production begins." },
  { icon: ClipboardCheck, title: "Procurement Support", text: "RFQs, comparisons and order coordination." },
  { icon: Globe2, title: "Global Coordination", text: "Communication across time zones and markets." },
  { icon: Handshake, title: "Long-Term Partnerships", text: "Supplier relationships built to repeat." },
];

const why = [
  "Requirement-Led Sourcing",
  "Transparent Communication",
  "Supplier-Focused Research",
  "Commercial Awareness",
  "Quality-Conscious Processes",
  "Long-Term Partnership",
];

function Home() {
  const { open } = useSourcing();

  return (
    <>
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img
          src={heroImg}
          alt="Container terminal at dusk with cargo ship and stacked shipping containers"
          width={1600}
          height={912}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-32">
          <p className="text-xs font-bold uppercase tracking-[0.22em] opacity-75">Global Sourcing &amp; Procurement</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Source smarter.
            <br />
            Build better supply chains.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-85 sm:text-lg">
            From supplier discovery to procurement coordination, {company.brand} helps businesses build reliable, competitive and
            scalable sourcing networks.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
           <button 
  onClick={() => open("home-hero")} 
  className="inline-flex items-center gap-2 rounded-xl bg-[#D40000] px-7 py-3.5 font-semibold text-white transition-transform hover:scale-105 hover:bg-[#B00000]" 
> 
  Start a Sourcing Project <ArrowRight className="h-4 w-4" /> 
</button>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/30 px-7 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">Built Around Your Supply Chain</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {trust.map((t) => (
              <div key={t.title} className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
                <t.icon className="h-6 w-6 text-accent-foreground" />
                <h3 className="mt-4 text-sm font-bold">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <img
          src={aboutImg}
          alt="International procurement team reviewing supplier documents in a meeting room"
          loading="lazy"
          width={1408}
          height={912}
          className="w-full rounded-2xl border border-border object-cover shadow-lg"
        />
        <div>
          <SectionHeading
            eyebrow="Who We Are"
            title="Your Partner Beyond the Factory Gate"
            text="Nex Source Global works between buyers and manufacturing ecosystems. We translate a product requirement into a shortlist of capable suppliers, then stay involved through quotation, sampling, production and dispatch preparation."
          />
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {["Supplier discovery", "Supplier evaluation", "Procurement coordination", "Quality awareness", "Production follow-up", "Supply-chain visibility"].map((i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <BadgeCheck className="h-4 w-4 shrink-0 text-accent-foreground" /> {i}
              </li>
            ))}
          </ul>
         <Link
  to="/about"
  className="mt-7 inline-flex items-center gap-1.5 font-semibold text-[#D40000] hover:underline"
>
  Discover Nex Source Global <ArrowRight className="h-4 w-4" />
</Link>
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="Services" title="Sourcing support, structured end to end" />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link
                key={s.no}
                to="/services"
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="font-display text-xs font-bold tracking-[0.2em] text-muted-foreground">{s.no}</span>
                <h3 className="mt-3 text-base font-bold">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-foreground">
                  Explore Service <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img src={mapImg} alt="World map with glowing connection lines between manufacturing regions" loading="lazy" width={1408} height={800} className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.22em] opacity-70">Global Sourcing Network</p>
          <h2 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">Local Insight. Global Reach.</h2>
          <p className="mt-4 max-w-2xl leading-relaxed opacity-85">
            Manufacturing markets we can evaluate and coordinate across for your requirement.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {regions.map((r) => (
              <span key={r} className="rounded-full border border-primary-foreground/25 px-4 py-2 text-sm">
                {r}
              </span>
            ))}
            <span className="rounded-full border border-primary-foreground/25 px-4 py-2 text-sm opacity-80">
              Other emerging manufacturing markets
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Industries"
              title="Industries we can support"
              text="These are the categories our sourcing process is built to handle. Scope is always confirmed against your specific product and volumes."
            />
            <div className="mt-7 flex flex-wrap gap-2">
              {industries.map((i) => (
                <span key={i} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
                  {i}
                </span>
              ))}
            </div>
            <Link to="/industries" className="mt-7 inline-flex items-center gap-1.5 font-semibold text-accent-foreground hover:underline">
              View industries <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <img
            src={industriesImg}
            alt="Warehouse interior with pallets, forklift and logistics staff"
            loading="lazy"
            width={1408}
            height={912}
            className="w-full rounded-2xl border border-border object-cover shadow-lg"
          />
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="How We Work" title="A six-step sourcing workflow" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((p) => (
              <div key={p.no} className="rounded-2xl border border-border bg-card p-6">
                <span className="font-display text-2xl font-extrabold text-accent-foreground/30">{p.no}</span>
                <h3 className="mt-2 text-base font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
          <Link to="/how-we-work" className="mt-8 inline-flex items-center gap-1.5 font-semibold text-accent-foreground hover:underline">
            See the full process <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading
            eyebrow="Why Nex Source Global"
            title="Why businesses choose a sourcing partner"
            text="Sourcing works best when it is structured, documented and honest about limits. That is the standard we hold ourselves to."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {why.map((w) => (
              <div key={w} className="rounded-2xl border border-border bg-card p-6">
                <Building2 className="h-5 w-5 text-accent-foreground" />
                <h3 className="mt-3 text-sm font-bold">{w}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

     <section className="border-t border-border bg-[#EFF4F8] text-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Send us your requirement today</h2>
            <p className="mt-3 max-w-xl opacity-85">
              Share your product, volumes and target market. Our team will review it and come back with the next step.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
         <button 
  onClick={() => open("home-mid-cta")} 
  className="inline-flex items-center gap-2 rounded-xl bg-[#D40000] px-7 py-3.5 font-semibold text-white transition-transform hover:scale-105 hover:bg-[#B00000]" 
> 
  Start a Sourcing Project 
            </button>
<a
  href={whatsappLink(`Hello ${company.brand}, I would like to discuss a sourcing requirement.`)}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-7 py-3.5 font-semibold text-foreground transition-colors hover:bg-gray-100"
>
  <MessageCircle className="h-4 w-4" /> Talk on WhatsApp
</a>
          </div>
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Insights" title="Practical sourcing reading" />
          <Link to="/blog" className="font-semibold text-accent-foreground hover:underline">
            All insights →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {articles.slice(0, 3).map((a) => (
            <Link key={a.slug} to="/blog" className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent-foreground">{a.category}</span>
              <h3 className="mt-3 text-base font-bold leading-snug">{a.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
              <span className="mt-5 text-xs text-muted-foreground">
                {a.date} · {a.readTime}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTASection source="home-final" />
    </>
  );
}
