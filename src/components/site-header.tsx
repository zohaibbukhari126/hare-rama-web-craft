import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Heart, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/programs", label: "Programs" },
  { to: "/advocacy", label: "Advocacy" },
  { to: "/media", label: "Media Center" },
  { to: "/get-involved", label: "Get Involved" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="bg-primary-deep text-primary-foreground text-xs">
        <div className="container-wide flex items-center justify-between py-2">
          <span className="opacity-90">Welcome to Hare Rama Foundation Pakistan</span>
          <div className="hidden md:flex items-center gap-4 opacity-90">
            <a href="#" aria-label="Facebook" className="hover:text-accent transition-smooth"><Facebook className="h-3.5 w-3.5" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-accent transition-smooth"><Instagram className="h-3.5 w-3.5" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-accent transition-smooth"><Youtube className="h-3.5 w-3.5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-accent transition-smooth"><Linkedin className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </div>
      <div className="container-wide flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Hare Rama Foundation Pakistan logo" width={48} height={48} className="h-12 w-12" />
          <div className="leading-tight">
            <div className="font-extrabold text-primary text-base sm:text-lg tracking-tight">HARE RAMA</div>
            <div className="text-[10px] sm:text-xs font-semibold text-foreground/80 tracking-[0.18em]">FOUNDATION PAKISTAN</div>
            <div className="text-[10px] text-accent italic">Serving Humanity</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm font-semibold text-foreground/80 hover:text-primary transition-smooth [&.active]:text-accent"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/donate"
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-accent text-accent-foreground font-bold px-5 py-2.5 rounded-md shadow-card hover:shadow-elegant hover:-translate-y-0.5 transition-smooth"
          >
            DONATE NOW <Heart className="h-4 w-4 fill-current" />
          </Link>
          <button
            type="button"
            className="lg:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-border bg-background">
          <div className="container-wide flex flex-col py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-semibold text-foreground/80 [&.active]:text-accent"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center items-center gap-2 bg-gradient-accent text-accent-foreground font-bold px-5 py-2.5 rounded-md"
            >
              DONATE NOW <Heart className="h-4 w-4 fill-current" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}