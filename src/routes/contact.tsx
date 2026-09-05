import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SpringPath — Book a Free Demo Class" },
      { name: "description", content: "Free demo class book karo, counsellor se baat karo ya corporate training ka proposal maango. Hum 24 ghante me reply karte hain." },
      { property: "og:title", content: "Contact SpringPath — Book a Free Demo Class" },
      { property: "og:description", content: "Book a free demo class or request a corporate training proposal." },
    ],
  }),
  component: Contact,
});

const faqs = [
  { q: "Kya bina coding background ke join kar sakte hain?", a: "Haan. Zero to Hero course Core Java refresher se shuru hota hai, isliye bilkul beginners bhi comfortable rehte hain." },
  { q: "Job ke saath manage ho jayega?", a: "Weekend aur late-evening batches hain, plus sab recordings lifetime available rehti hain. Hafte me 8-10 ghante kaafi hain." },
  { q: "Placement support milta hai?", a: "Haan — resume review, mock interviews aur 600+ hiring partners ke saath referrals." },
  { q: "Corporate training ka pricing kya hai?", a: "Team size aur duration par depend karta hai. Form bharo, hum 24 ghante me custom proposal bhej denge." },
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <h1 className="font-display text-4xl font-bold sm:text-5xl">Baat karte hain</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Free demo class, course guidance ya corporate proposal — jo bhi chahiye, form bhar do. Hum 24 ghante ke andar reply karte hain.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-7 shadow-sm">
          {sent ? (
            <div className="py-16 text-center">
              <MessageSquare className="mx-auto h-12 w-12 text-primary" />
              <h2 className="mt-4 font-display text-2xl font-bold">Shukriya! Message mil gaya.</h2>
              <p className="mt-2 text-muted-foreground">Hamari team 24 ghante ke andar aapse contact karegi.</p>
            </div>
          ) : (
            <form
              className="grid gap-5 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div>
                <label htmlFor="name" className="text-sm font-semibold">Naam</label>
                <input id="name" required className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 outline-none focus:ring-2 focus:ring-ring" placeholder="Aapka poora naam" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-semibold">Email</label>
                <input id="email" type="email" required className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 outline-none focus:ring-2 focus:ring-ring" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-semibold">Phone</label>
                <input id="phone" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 outline-none focus:ring-2 focus:ring-ring" placeholder="+91 ..." />
              </div>
              <div>
                <label htmlFor="type" className="text-sm font-semibold">Aap kaun ho?</label>
                <select id="type" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 outline-none focus:ring-2 focus:ring-ring">
                  <option>Student</option>
                  <option>Working Professional</option>
                  <option>Corporate / HR</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="msg" className="text-sm font-semibold">Message</label>
                <textarea id="msg" rows={5} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 outline-none focus:ring-2 focus:ring-ring" placeholder="Kis course me interest hai?" />
              </div>
              <button type="submit" className="sm:col-span-2 rounded-xl bg-primary px-7 py-3.5 font-bold text-primary-foreground transition-transform hover:scale-[1.02]">
                Send Message
              </button>
            </form>
          )}
        </div>

        <div className="space-y-4">
          {[
            { icon: Mail, label: "Email", value: "hello@springpath.in" },
            { icon: Phone, label: "Phone", value: "+91 98765 43210" },
            { icon: MapPin, label: "Office", value: "Sector 62, Noida, India" },
          ].map((c) => (
            <div key={c.label} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-brand-foreground">
                <c.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold">{c.label}</p>
                <p className="text-sm text-muted-foreground">{c.value}</p>
              </div>
            </div>
          ))}
          <p className="rounded-2xl border border-border bg-secondary/50 p-5 text-sm leading-relaxed text-muted-foreground">
            Ye contact details placeholder hain — apne asli email, phone aur address bhej do, main update kar dunga.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">Aksar poochhe jaane wale sawal</h2>
          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-border bg-card p-6">
                <summary className="cursor-pointer list-none font-bold">{f.q}</summary>
                <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
