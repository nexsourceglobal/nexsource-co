import { createFileRoute, Link } from "@tanstack/react-router";
import { BarChart3, CheckCircle2, ClipboardList, Rocket, ShieldCheck, Users2 } from "lucide-react";
import corporatePoster from "@/assets/corporate-poster.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/corporate")({
  head: () => ({
    meta: [
      { title: "Corporate Java & Spring Training — SpringPath" },
      { name: "description", content: "Apni dev team ke liye customized Spring Boot aur microservices training. Skill assessment, live sprints, code reviews aur certification." },
      { property: "og:title", content: "Corporate Java & Spring Training — SpringPath" },
      { property: "og:description", content: "Customized team training with skill assessment, live sprints and certification." },
    ],
  }),
  component: Corporate,
});

const steps = [
  { icon: ClipboardList, title: "1. Skill Assessment", text: "Team ka current level samajhne ke liye ek short technical assessment." },
  { icon: BarChart3, title: "2. Custom Curriculum", text: "Aapke tech stack aur project goals ke hisaab se syllabus design hota hai." },
  { icon: Rocket, title: "3. Live Sprints", text: "Real code par hands-on sessions, weekly milestones ke saath." },
  { icon: ShieldCheck, title: "4. Certification & Support", text: "Assessment, certificate aur 90 din ka post-training doubt support." },
];

const benefits = [
  "Onsite ya online — jaisa suit kare",
  "Batch size 8 se 100+ tak",
  "Mentors with 10+ years industry experience",
  "Aapke internal codebase par case studies",
  "Manager dashboard with progress reports",
  "Flexible timings — team ke sprint ko disturb kiye bina",
];

function Corporate() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-1.5 text-xs font-bold text-brand-foreground">
              <Users2 className="h-3.5 w-3.5" /> 120+ teams trained
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold sm:text-5xl">Corporate Training</h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Aapki team ko Spring Boot, microservices aur clean architecture par upskill karte hain — theory nahi, aapke apne project par kaam karke.
            </p>
            <Link to="/contact" className="mt-7 inline-block rounded-xl bg-primary px-7 py-3.5 font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105">
              Request a Proposal
            </Link>
          </div>
          <img src={corporatePoster} alt="Corporate trainer teaching a developer team in an office" loading="lazy" width={1344} height={768} className="w-full rounded-3xl border border-border shadow-lg" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">Kaise kaam karta hai</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Kya milta hai</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold">Team ke liye plan banayein?</h2>
        <p className="mt-3 text-muted-foreground">Ek 20-minute discovery call — hum aapki requirement samajh kar custom proposal bhejenge.</p>
        <Link to="/contact" className="mt-7 inline-block rounded-xl bg-brand px-8 py-3.5 font-bold text-brand-foreground transition-transform hover:scale-105">
          Talk to Our Team
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
