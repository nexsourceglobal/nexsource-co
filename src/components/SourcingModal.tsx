import { useEffect, useRef, useState } from "react";
import { CheckCircle2, MessageCircle, X } from "lucide-react";
import { company, serviceOptions, whatsappLink } from "@/lib/site";

type Form = {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  product: string;
  requirement: string;
  quantity: string;
  country: string;
  budget: string;
  services: string[];
  contact: string;
  bot: string;
};

const empty: Form = {
  name: "",
  companyName: "",
  email: "",
  phone: "",
  product: "",
  requirement: "",
  quantity: "",
  country: "",
  budget: "",
  services: [],
  contact: "Email",
  bot: "",
};

export function SourcingModal({ sourcePage, onClose }: { sourcePage: string; onClose: () => void }) {
  const [form, setForm] = useState<Form>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const firstField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstField.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const set = (k: keyof Form, v: string | string[]) => setForm((f) => ({ ...f, [k]: v }));

  const toggleService = (s: string) =>
    setForm((f) => ({
      ...f,
      services: f.services.includes(s) ? f.services.filter((x) => x !== s) : [...f.services, s],
    }));

  const summary = () =>
    [
      `Sourcing request from ${company.brand} website (${sourcePage})`,
      `Name: ${form.name}`,
      `Company: ${form.companyName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Product: ${form.product}`,
      `Requirement: ${form.requirement}`,
      `Quantity: ${form.quantity}`,
      `Target market: ${form.country}`,
      form.budget ? `Budget: ${form.budget}` : "",
      `Services: ${form.services.join(", ") || "Not specified"}`,
      `Preferred contact: ${form.contact}`,
    ]
      .filter(Boolean)
      .join("\n");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.bot) return;
    const next: Record<string, string> = {};
    if (form.name.trim().length < 2) next["name"] = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) next["email"] = "Please enter a valid business email.";
    if (form.phone.trim().length < 7) next["phone"] = "Please enter a reachable phone or WhatsApp number.";
    if (form.product.trim().length < 2) next["product"] = "Tell us what you want to source.";
    if (form.requirement.trim().length < 10) next["requirement"] = "A short requirement description helps us respond accurately.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-foreground/70 p-4 backdrop-blur-sm sm:items-center">
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Start a sourcing project"
        className="relative my-6 w-full max-w-2xl rounded-2xl border border-border bg-card shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Close form"
         className="absolute right-4 top-4 rounded-lg bg-[#D40000] p-2 text-white transition-colors hover:bg-[#B00000]"
        >
        </button>  <X className="h-5 w-5" />
        </button>

        {sent ? (
          <div className="px-7 py-14 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-accent-foreground" />
            <h2 className="mt-5 font-display text-2xl font-bold">Thank you — your sourcing request has been received.</h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              One of our team members will review your requirement and contact you on your preferred channel.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={whatsappLink(summary())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" /> Send on WhatsApp
              </a>
              <a
                href={`mailto:${company.email}?subject=${encodeURIComponent(
                  `New sourcing enquiry — ${form.companyName || form.name}`,
                )}&body=${encodeURIComponent(summary())}`}
                className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent"
              >
                Email the details
              </a>
              <button onClick={onClose} className="rounded-xl px-6 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground">
                Return to website
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} className="px-6 py-7 sm:px-8">
            <h2 className="pr-10 font-display text-2xl font-bold">Start a sourcing project</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Share your requirement and our sourcing team will get back to you. Fields marked * are required.
            </p>

            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={form.bot}
              onChange={(e) => set("bot", e.target.value)}
              className="pointer-events-none absolute left-[-9999px] h-0 w-0 opacity-0"
            />

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Full name *" error={errors["name"]}>
                <input ref={firstField} value={form.name} onChange={(e) => set("name", e.target.value)} maxLength={100} className={inputCls} />
              </Field>
              <Field label="Company name">
                <input value={form.companyName} onChange={(e) => set("companyName", e.target.value)} maxLength={120} className={inputCls} />
              </Field>
              <Field label="Business email *" error={errors["email"]}>
                <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} maxLength={160} className={inputCls} />
              </Field>
              <Field label="Phone / WhatsApp *" error={errors["phone"]}>
                <input value={form.phone} onChange={(e) => set("phone", e.target.value)} maxLength={30} className={inputCls} />
              </Field>
              <Field label="What do you want to source? *" error={errors["product"]}>
                <input value={form.product} onChange={(e) => set("product", e.target.value)} maxLength={120} className={inputCls} />
              </Field>
              <Field label="Quantity / estimated volume">
                <input value={form.quantity} onChange={(e) => set("quantity", e.target.value)} maxLength={60} className={inputCls} />
              </Field>
              <Field label="Target country / market">
                <input value={form.country} onChange={(e) => set("country", e.target.value)} maxLength={80} className={inputCls} />
              </Field>
              <Field label="Target budget (optional)">
                <input value={form.budget} onChange={(e) => set("budget", e.target.value)} maxLength={60} className={inputCls} />
              </Field>
            </div>

            <div className="mt-4">
              <Field label="Brief product requirement *" error={errors["requirement"]}>
                <textarea
                  value={form.requirement}
                  onChange={(e) => set("requirement", e.target.value)}
                  rows={4}
                  maxLength={1500}
                  className={inputCls}
                />
              </Field>
            </div>

            <fieldset className="mt-6">
              <legend className="text-sm font-semibold text-foreground">Services required</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {serviceOptions.map((s) => {
                  const active = form.services.includes(s);
                  return (
                    <button
                      key={s}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggleService(s)}
                      className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                        active
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-muted-foreground hover:bg-accent"
                      }`}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <fieldset className="mt-6">
              <legend className="text-sm font-semibold text-foreground">Preferred contact method</legend>
              <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                {["Email", "WhatsApp", "Phone Call"].map((c) => (
                  <label key={c} className="flex items-center gap-2">
                    <input type="radio" name="contact" checked={form.contact === c} onChange={() => set("contact", c)} />
                    {c}
                  </label>
                ))}
              </div>
            </fieldset>

            <button
              type="submit"
              className="mt-8 w-full rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.01]"
            >
              Submit sourcing request
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              You can also write to {company.email} or call {company.phone}.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

const inputCls =
  "mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30";

function Field({ label, error, children }: { label: string; error?: string | undefined; children: React.ReactNode }) {
  return (
    <label className="block text-sm">
      <span className="font-semibold text-foreground">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
