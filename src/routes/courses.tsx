import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, PlayCircle, Star, Users } from "lucide-react";
import coursesPoster from "@/assets/courses-poster.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { courses } from "@/lib/courses";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Spring & Java Courses — SpringPath" },
      { name: "description", content: "Spring Boot, microservices, Spring Security aur interview prep courses. Beginner se advanced tak, live batches aur lifetime access ke saath." },
      { property: "og:title", content: "Spring & Java Courses — SpringPath" },
      { property: "og:description", content: "Beginner se advanced tak Spring Boot, microservices aur interview prep courses." },
    ],
  }),
  component: Courses,
});

function Courses() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl font-bold sm:text-5xl">Courses</h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Har course me recorded lectures, live doubt sessions, real projects aur lifetime access milta hai. Apna level chuno aur shuru karo.
            </p>
          </div>
          <img src={coursesPoster} alt="Student watching an online Spring Framework lecture" loading="lazy" width={1344} height={768} className="w-full rounded-3xl border border-border shadow-lg" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-7 md:grid-cols-2">
          {courses.map((c) => (
            <article key={c.slug} className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-lg">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">{c.audience}</span>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">{c.level}</span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold">{c.title}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{c.tagline}</p>

              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {c.topics.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <PlayCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {t}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-primary" /> {c.duration}</span>
                <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-primary" /> {c.learners}</span>
                <span className="flex items-center gap-1.5"><Star className="h-4 w-4 fill-brand text-brand" /> {c.rating}</span>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
                <div>
                  <span className="font-display text-2xl font-bold text-primary">{c.price}</span>
                  {c.oldPrice && <span className="ml-2 text-sm text-muted-foreground line-through">{c.oldPrice}</span>}
                </div>
                <Link to="/contact" className="rounded-xl bg-brand px-5 py-2.5 text-sm font-bold text-brand-foreground transition-transform hover:scale-105">
                  Enroll Now
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
