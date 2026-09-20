import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { company, whatsappLink } from "@/lib/site";
import { useSourcing } from "./SourcingProvider";

export function SiteFooter() {
  const { open } = useSourcing();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
         <div className="flex items-center">
  <img
    src="https://stimg.cardekho.com/images/uploadimages/1789898215458/WhatsApp-Image-2026-09-20-at-3.26.40-PM.jpeg"
    alt="Nex Source Global"
    className="h-14 w-auto object-contain"
  />
</div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed opacity-80">
            Global sourcing, procurement and supply-chain support for businesses building reliable supplier networks.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm opacity-85">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${company.email}`} className="hover:underline">
                {company.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href={`tel:${company.phoneRaw}`} className="hover:underline">
                {company.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                {company.address.line1}, {company.address.line2}
                <br />
                {company.address.city}, {company.address.country}
              </span>
            </li>
          </ul>
          <p className="mt-4 text-sm opacity-85">Contact person: {company.contactPerson}</p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.18em] opacity-70">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm opacity-85">
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/how-we-work" className="hover:underline">How We Work</Link></li>
            <li><Link to="/industries" className="hover:underline">Industries</Link></li>
            <li><Link to="/blog" className="hover:underline">Insights</Link></li>
            <li><Link to="/news" className="hover:underline">News</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.18em] opacity-70">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm opacity-85">
            <li><Link to="/services" className="hover:underline">Global Sourcing</Link></li>
            <li><Link to="/services" className="hover:underline">Supplier Evaluation</Link></li>
            <li><Link to="/services" className="hover:underline">Procurement Support</Link></li>
            <li><Link to="/services" className="hover:underline">Supplier Verification</Link></li>
            <li><Link to="/services" className="hover:underline">Quality &amp; Inspection</Link></li>
            <li><Link to="/services" className="hover:underline">Production Follow-Up</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.18em] opacity-70">Get Started</h4>
          <ul className="mt-4 space-y-2.5 text-sm opacity-85">
            <li>
            <button onClick={() => open("footer")} className="hover:underline"> Start a Sourcing Project </button>
            </li>
            <li>
              <button onClick={() => open("footer-quote")} className="hover:underline">
                Request a Quote
              </button>
            </li>
            <li>
              <a
                href={whatsappLink(`Hello ${company.brand}, I would like to discuss a sourcing requirement.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:underline"
              >
                <MessageCircle className="h-4 w-4" /> Talk on WhatsApp
              </a>
            </li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs opacity-70 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2026 {company.name} All rights reserved.</p>
          <p>Privacy Policy · Terms of Use · Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
}
