import { createFileRoute, Link } from "@tanstack/react-router";
import { Quote, TrendingUp } from "lucide-react";
import successPoster from "@/assets/success-poster.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { testimonials } from "@/lib/courses";

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — SpringPath Learners" },
      { name: "description", content: "Students aur working professionals ke real placement aur career-switch stories. Salary hikes, first jobs aur team transformations." },
      { property: "og:title", content: "Success Stories — SpringPath Learners" },
      { property: "og:description", content: "Real placement and career-switch stories from SpringPath learners." },
    ],
  }),
  component: Stories,
});

const outcomes = [
  { value: "9,400+", label: "Learners placed" },
  { value: "78%", label: "Average salary hike" },
  { value: "₹28 LPA", label: "Highest package" },
];

function Stories() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl font-bold sm:text-5xl">Success Stories</h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Ye sirf numbers nahi hain — ye wo log hain jinhone raat ko padh kar, weekends dekar apni career badli.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {outcomes.map((o) => (
                <div key={o.label} className="rounded-xl border border-border bg-card p-4 text-center">
                  <p className="font-display text-xl font-bold text-primary sm:text-2xl">{o.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{o.label}</p>
                </div>
              ))}
            </div>
          </div>
          <img src={successPoster} alt="Learners celebrating with certificates and graduation caps" loading="lazy" width={1344} height={768} className="w-full rounded-3xl border border-border shadow-lg" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-7 md:grid-cols-2">
          {testimonials.map((t) => (
            <article key={t.name} className="rounded-2xl border border-border bg-card p-7 shadow-sm">
              <Quote className="h-8 w-8 text-brand" />
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-display font-bold text-primary-foreground">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <TrendingUp className="mx-auto h-12 w-12 text-brand" />
          <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl">Agli story aapki ho sakti hai</h2>
          <Link to="/courses" className="mt-7 inline-block rounded-xl bg-brand px-8 py-3.5 font-bold text-brand-foreground transition-transform hover:scale-105">
            Start Learning Today
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
