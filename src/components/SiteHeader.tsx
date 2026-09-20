import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useSourcing } from "./SourcingProvider";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/how-we-work", label: "How We Work" },
  { to: "/blog", label: "Insights" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [bar, setBar] = useState(true);
  const { open: openForm } = useSourcing();

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="sticky top-0 z-50">
      {bar && (
        <div className="bg-[#D40000] text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-xs sm:px-6">
            <p className="truncate">
              Global sourcing support across Asia &amp; emerging manufacturing markets
              <span className="hidden sm:inline"> • Talk to our sourcing team</span>
            </p>
            <div className="flex shrink-0 items-center gap-3">
              <button onClick={() => openForm("announcement-bar")} className="font-semibold underline-offset-4 hover:underline">
                Start a Conversation →
              </button>
              <button onClick={() => setBar(false)} aria-label="Dismiss announcement" className="opacity-70 hover:opacity-100">
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <header className="border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
  to="/"
  className="flex items-center"
  aria-label="Nex Source Global home"
>
  <img
    src="https://stimg.cardekho.com/images/uploadimages/1789898215458/WhatsApp-Image-2026-09-20-at-3.26.40-PM.jpeg"
    alt="Nex Source Global"
    className="h-14 w-[200px] object-contain object-left"
  />
</Link>

          <nav className="hidden items-center gap-0.5 xl:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => openForm("navbar")}
              className="hidden items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 lg:inline-flex"
            >
              Start a Sourcing Project <ArrowRight className="h-4 w-4" />
            </button>
            <button className="rounded-lg p-2 xl:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="max-h-[70vh] overflow-y-auto border-t border-border bg-background px-4 py-3 xl:hidden">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-primary" }}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent"
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                openForm("mobile-nav");
              }}
              className="mt-2 w-full rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Start a Sourcing Project
            </button>
          </nav>
        )}
      </header>
    </div>
  );
}
