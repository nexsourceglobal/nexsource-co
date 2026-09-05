import { Link } from "@tanstack/react-router";
import { Code2, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Code2 className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-bold">
              Spring<span className="text-primary">Path</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Java & Spring Framework seekho — simple bhasha me, real projects ke saath. Students, working professionals aur corporate teams ke liye.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-foreground">Learn</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/courses" className="hover:text-primary">All Courses</Link></li>
            <li><Link to="/corporate" className="hover:text-primary">Corporate Training</Link></li>
            <li><Link to="/success-stories" className="hover:text-primary">Success Stories</Link></li>
            <li><Link to="/blog" className="hover:text-primary">Blog & Resources</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-foreground">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><Link to="/courses" className="hover:text-primary">Free Demo Class</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-foreground">Reach Us</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@springpath.in</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Noida, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © 2026 SpringPath Learning. Made with care for every learner.
      </div>
    </footer>
  );
}
