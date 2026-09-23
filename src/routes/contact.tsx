import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone, User } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-sourcing.jpg";
import { PageHero, SectionHeading } from "@/components/Section";
import { useSourcing } from "@/components/SourcingProvider";
import { company, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Nex Source Global — Talk to Our Sourcing Team" },
      {
        name: "description",
        content:
          "Contact Nex Source Global in New Delhi for global sourcing and procurement support. Email info@nexsource.com, call +91 96231 32257 or send your requirement online.",
      },
      { property: "og:title", content: "Contact Nex Source Global" },
      { property: "og:description", content: "Let's talk about your next sourcing requirement." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const faqs = [
  {
    q: "What information do you need to start?",
    a: "A product description or drawing, approximate quantity, target market and any quality or packaging expectations. We can work with an outline and refine it together.",
  },
  {
    q: "Do you work with small volumes?",
    a: "Yes, where a suitable supplier exists at that volume. If the quantity is too low for a category, we will tell you before spending your time.",
  },
  {
    q: "Which markets do you source from?",
    a: "India, China, Vietnam, Thailand, Indonesia, Malaysia, Taiwan, Mexico and other emerging manufacturing markets, depending on the product.",
  },
  {
    q: "How do you charge for sourcing work?",
    a: "Commercial terms depend on the scope of the project. We confirm the scope and terms in writing before any work begins.",
  },
];

function Contact() {
  const { open } = useSourcing();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (form.name.trim().length < 2) next["name"] = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) next["email"] = "Please enter a valid email address.";
    if (form.message.trim().length < 10) next["message"] = "Please add a few lines about your requirement.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your next sourcing requirement."
        text="Send us a short brief and our sourcing team will come back to you with the next step."
         image={heroImg}
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:py-20">
        <div>
          <SectionHeading title="Send a message" text="Prefer a quick chat? Use WhatsApp or call us directly." />
          {sent ? (
            <div className="mt-8 rounded-2xl border border-border bg-secondary p-8 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-accent-foreground" />
              <h3 className="mt-4 font-display text-xl font-bold">Thank you — your message is ready to send.</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Send it through WhatsApp or email below and our team will respond shortly.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href={whatsappLink(
                    `Hello ${company.brand}, my name is ${form.name}. ${form.message} (Email: ${form.email}${form.phone ? `, Phone: ${form.phone}` : ""})`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
                >
                  <MessageCircle className="h-4 w-4" /> Send on WhatsApp
                </a>
                <a
                  href={`mailto:${company.email}?subject=${encodeURIComponent(`Website enquiry — ${form.name}`)}&body=${encodeURIComponent(
                    `${form.message}\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}`,
                  )}`}
                  className="rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-accent"
                >
                  Send by email
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} className="mt-8 rounded-2xl border border-border bg-card p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="font-semibold">Full name *</span>
                  <input
                    value={form.name}
                    maxLength={100}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
                  />
                  {errors["name"] && <span className="mt-1 block text-xs text-destructive">{errors["name"]}</span>}
                </label>
                <label className="block text-sm">
                  <span className="font-semibold">Email *</span>
                  <input
                    type="email"
                    value={form.email}
                    maxLength={160}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
                  />
                  {errors["email"] && <span className="mt-1 block text-xs text-destructive">{errors["email"]}</span>}
                </label>
                <label className="block text-sm sm:col-span-2">
                  <span className="font-semibold">Phone / WhatsApp</span>
                  <input
                    value={form.phone}
                    maxLength={30}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
                  />
                </label>
                <label className="block text-sm sm:col-span-2">
                  <span className="font-semibold">Your requirement *</span>
                  <textarea
                    rows={5}
                    value={form.message}
                    maxLength={1500}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
                  />
                  {errors["message"] && <span className="mt-1 block text-xs text-destructive">{errors["message"]}</span>}
                </label>
              </div>
           <button
  type="submit"
  className="mt-6 w-full rounded-xl bg-[#D40000] px-6 py-3.5 font-semibold text-white transition-colors hover:bg-[#B00000]"
>
  Send message
</button>
              <button
                type="button"
                onClick={() => open("contact-page")}
                className="mt-3 w-full rounded-xl border border-border px-6 py-3.5 font-semibold hover:bg-accent"
              >
                Or open the detailed sourcing form
              </button>
            </form>
          )}
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-secondary p-7">
            <h2 className="font-display text-lg font-bold">Contact details</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <User className="h-5 w-5 text-accent-foreground" />
                <span>
                  <span className="block text-xs uppercase tracking-[0.14em] text-muted-foreground">Contact person</span>
                  {company.contactPerson}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent-foreground" />
                <a href={`tel:${company.phoneRaw}`} className="hover:underline">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent-foreground" />
                <a href={`mailto:${company.email}`} className="hover:underline">
                  {company.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground" />
                <span>
                  {company.address.line1}, {company.address.line2}
                  <br />
                  {company.address.city}, {company.address.country}
                </span>
              </li>
            </ul>
    <a
  href={whatsappLink(`Hello ${company.brand}, I would like to discuss a sourcing requirement.`)}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#D40000] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#B00000]"
>
  <MessageCircle className="h-4 w-4" /> Talk on WhatsApp
</a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Nex Source Global office location map"
              src="https://www.google.com/maps?q=Sharda+Puri+Ramesh+Nagar+New+Delhi+110015&output=embed"
              loading="lazy"
              className="h-64 w-full border-0"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <SectionHeading title="Frequently asked questions" />
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-2xl border border-border bg-card p-6">
                <summary className="cursor-pointer font-semibold">{f.q}</summary>
                <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
