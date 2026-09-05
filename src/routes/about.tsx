import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Languages, Target, Wallet } from "lucide-react";
import heroPoster from "@/assets/hero-poster.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SpringPath — Simple Learning for Everyone" },
      { name: "description", content: "SpringPath ka mission: quality Java aur Spring education sabke liye affordable aur samajhne me aasaan banana." },
      { property: "og:title", content: "About SpringPath — Simple Learning for Everyone" },
      { property: "og:description", content: "Our mission: affordable, easy-to-understand Java and Spring education for everyone." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Languages, title: "Simple bhasha", text: "Jargon nahi. Har concept rozmarra ke example se samjhaya jaata hai." },
  { icon: Wallet, title: "Affordable", text: "Quality education 4-5 hazaar me — lakhon ki fees ka koi matlab nahi." },
  { icon: Target, title: "Outcome-focused", text: "Certificate se zyada important hai ki aapko job ya promotion mile." },
  { icon: Heart, title: "Learner-first", text: "Doubt ka jawab 12 ghante ke andar. Mentor hamesha reachable." },
];

const team = [
  { name: "Vikram Iyer", role: "Founder & Lead Mentor", bio: "Ex-Amazon, 14 saal Java backend. 60,000+ students ko padha chuke hain." },
  { name: "Sneha Kulkarni", role: "Head of Curriculum", bio: "Ex-ThoughtWorks architect. Microservices aur clean code ki specialist." },
  { name: "Imran Qureshi", role: "Corporate Training Lead", bio: "12 saal enterprise Java. 120+ corporate batches deliver ki hain." },
];

function About() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl font-bold sm:text-5xl">Hamare baare me</h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              SpringPath 2019 me ek chhote YouTube channel se shuru hua tha. Aaj 1.5 lakh se zyada learners hamare saath Java aur Spring seekh rahe hain — wahi simple, patient style me.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Hum maante hain ki achhi padhai mehngi nahi honi chahiye, aur na hi complicated. Isliye har course affordable hai aur har lecture aise banaya jaata hai jaise aapka bada bhai aapko samjha raha ho.
            </p>
          </div>
          <img src={heroPoster} alt="SpringPath classroom with students learning" loading="lazy" width={1344} height={768} className="w-full rounded-3xl border border-border shadow-lg" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">Hamari values</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-brand-foreground">
                <v.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-bold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">Team</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {team.map((m) => (
              <div key={m.name} className="rounded-2xl border border-border bg-card p-7 text-center shadow-sm">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary font-display text-2xl font-bold text-primary-foreground">
                  {m.name.charAt(0)}
                </span>
                <h3 className="mt-4 text-lg font-bold">{m.name}</h3>
                <p className="text-sm font-semibold text-primary">{m.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold">Hamare saath padhna shuru karo</h2>
        <Link to="/courses" className="mt-7 inline-block rounded-xl bg-primary px-8 py-3.5 font-bold text-primary-foreground transition-transform hover:scale-105">
          Browse Courses
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
