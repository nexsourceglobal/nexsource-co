import { ArrowRight, MessageCircle } from "lucide-react";
import { company, whatsappLink } from "@/lib/site";
import { useSourcing } from "./SourcingProvider";

export function CTASection({ source }: { source: string }) {
  const { open } = useSourcing();

  return (
    <section className="border-y border-border bg-secondary">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:py-20">
        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">Have a product to source?</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Tell us what you need. We&apos;ll help you explore the right sourcing path.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => open(source)}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Start a Sourcing Project <ArrowRight className="h-4 w-4" />
          </button>
          <a
            href={whatsappLink(`Hello ${company.brand}, I would like to discuss a sourcing requirement.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-7 py-3.5 font-semibold text-foreground transition-colors hover:bg-accent"
          >
            <MessageCircle className="h-4 w-4" /> Talk on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
