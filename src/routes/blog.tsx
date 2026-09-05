import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Clock } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Free Resources — SpringPath" },
      { name: "description", content: "Spring Boot tutorials, interview questions, roadmaps aur career guides — sab simple bhasha me, bilkul free." },
      { property: "og:title", content: "Blog & Free Resources — SpringPath" },
      { property: "og:description", content: "Free Spring Boot tutorials, interview questions and career roadmaps." },
    ],
  }),
  component: Blog,
});

const posts = [
  { title: "Spring Boot Roadmap 2026: Kya seekhein, kis order me", cat: "Roadmap", date: "2 Sep 2026", read: "8 min", excerpt: "Core Java se microservices tak ka step-by-step plan, har step par kitna time dena hai iske saath." },
  { title: "Dependency Injection ekdum simple example se samjho", cat: "Tutorial", date: "28 Aug 2026", read: "6 min", excerpt: "IoC container asal me karta kya hai? Ek chai ki dukaan ke example se poori concept clear." },
  { title: "Top 40 Spring Interview Questions (with short answers)", cat: "Interview", date: "21 Aug 2026", read: "12 min", excerpt: "Freshers aur 3-5 saal experience wale dono ke liye — sabse zyada pooche jaane wale sawal." },
  { title: "@Transactional ke 5 common mistakes", cat: "Deep Dive", date: "14 Aug 2026", read: "9 min", excerpt: "Self-invocation, checked exceptions aur propagation — production me ye bugs sabse zyada milte hain." },
  { title: "Monolith se Microservices: kab shift karna chahiye?", cat: "Architecture", date: "5 Aug 2026", read: "10 min", excerpt: "Har project ko microservices nahi chahiye. Decision lene ke liye ek practical checklist." },
  { title: "Working professionals ke liye study plan (10 hrs/week)", cat: "Career", date: "30 Jul 2026", read: "7 min", excerpt: "Job ke saath consistent kaise rahein — realistic weekly schedule jo actually chalta hai." },
];

function Blog() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <h1 className="font-display text-4xl font-bold sm:text-5xl">Blog & Free Resources</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Tutorials, roadmaps aur interview prep — sab free. Koi login nahi, koi paywall nahi.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg">
              <span className="w-fit rounded-full bg-brand px-3 py-1 text-xs font-bold text-brand-foreground">{p.cat}</span>
              <h2 className="mt-4 text-lg font-bold leading-snug">{p.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
              <div className="mt-5 flex gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {p.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {p.read} read</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-secondary/50 p-8 text-center">
          <h2 className="font-display text-2xl font-bold">Har hafte ek naya guide chahiye?</h2>
          <p className="mt-2 text-muted-foreground">Newsletter join karo — sirf useful content, spam nahi.</p>
          <Link to="/contact" className="mt-6 inline-block rounded-xl bg-primary px-7 py-3 font-bold text-primary-foreground transition-transform hover:scale-105">
            Subscribe
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
