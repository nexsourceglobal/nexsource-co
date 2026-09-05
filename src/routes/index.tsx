import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, BookOpen, Briefcase, CheckCircle2, GraduationCap, Star, Users } from "lucide-react";
import heroPoster from "@/assets/hero-poster.jpg";
import successPoster from "@/assets/success-poster.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { courses, testimonials } from "@/lib/courses";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SpringPath — Learn Java & Spring Framework Simply" },
      { name: "description", content: "Java aur Spring Framework seekho simple bhasha me. Students, working professionals aur corporate teams ke liye live batches, projects aur placement support." },
      { property: "og:title", content: "SpringPath — Learn Java & Spring Framework Simply" },
      { property: "og:description", content: "Live batches, real projects aur mock interviews ke saath Spring Boot aur microservices master karo." },
    ],
  }),
  component: Home,
});

const audiences = [
  { icon: GraduationCap, title: "Students", text: "College ke baad seedha job-ready. Basics se shuruaat, projects aur mock interviews tak." },
  { icon: Briefcase, title: "Working Professionals", text: "Weekend aur late-evening batches. Support role se backend developer tak switch karo." },
  { icon: Users, title: "Corporate Teams", text: "Aapke stack pe customized training, live sprints aur certification ke saath." },
];

const stats = [
  { value: "1.5 Lakh+", label: "Learners" },
  { value: "4.8 / 5", label: "Average Rating" },
  { value: "600+", label: "Hiring Partners" },
  { value: "92%", label: "Course Completion" },
];

function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="border-b border-border bg-gradient-to-b from-secondary/60 to-background">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-1.5 text-xs font-bold text-brand-foreground">
              <Star className="h-3.5 w-3.5" /> New batch starting 15 September
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Java & Spring seekho, <span className="text-primary">aasaan bhasha</span> me.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Har concept simple examples se. Har hafte ek real project. Students, working professionals aur corporate teams — sabke liye alag-alag batches.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/courses" className="rounded-xl bg-primary px-7 py-3.5 font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105">
                Explore Courses
              </Link>
              <Link to="/contact" className="rounded-xl border border-border bg-card px-7 py-3.5 font-bold text-foreground transition-colors hover:bg-accent">
                Book a Free Demo
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["Lifetime access", "Doubt support in 12 hrs", "Placement assistance"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
                </span>
              ))}
            </div>
          </div>
          <img src={heroPoster} alt="Students learning Java and Spring Framework in a classroom" width={1344} height={768} className="w-full rounded-3xl border border-border shadow-xl" />
        </div>
      </section>

      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-bold sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm opacity-80">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">Aap kaun ho? Hum uske hisaab se padhate hain.</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Ek hi course sabke liye theek nahi hota. Isliye har audience ke liye alag pace, alag timing aur alag projects.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {audiences.map((a) => (
            <div key={a.title} className="rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-lg">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-brand-foreground">
                <a.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold">{a.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Popular Courses</h2>
            <Link to="/courses" className="font-semibold text-primary hover:underline">View all courses →</Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {courses.slice(0, 3).map((c) => (
              <Link key={c.slug} to="/courses" className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg">
                <span className="w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">{c.level}</span>
                <h3 className="mt-4 text-lg font-bold">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{c.tagline}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="font-display text-xl font-bold text-primary">{c.price}</span>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-brand text-brand" /> {c.rating}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <img src={successPoster} alt="Learners celebrating job offers and certificates" loading="lazy" width={1344} height={768} className="w-full rounded-3xl border border-border shadow-xl" />
        <div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Result bolte hain, hum nahi.</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Har mahine hazaaron learners naye role, promotion ya pehli job tak pahunchte hain. Aap bhi unka safar padho.
          </p>
          <div className="mt-8 space-y-5">
            {testimonials.slice(0, 2).map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-card p-6">
                <p className="leading-relaxed text-muted-foreground">“{t.quote}”</p>
                <p className="mt-3 font-bold">{t.name} <span className="font-normal text-muted-foreground">— {t.role}</span></p>
              </div>
            ))}
          </div>
          <Link to="/success-stories" className="mt-7 inline-block font-semibold text-primary hover:underline">Read more stories →</Link>
        </div>
      </section>

      <section className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <Award className="mx-auto h-12 w-12 text-brand" />
          <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl">Aaj hi shuruaat karo</h2>
          <p className="mt-3 opacity-85">Free demo class lo, mentor se baat karo, phir decide karo. Koi jaldbazi nahi.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand px-8 py-3.5 font-bold text-brand-foreground transition-transform hover:scale-105">
            <BookOpen className="h-5 w-5" /> Book Free Demo Class
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
