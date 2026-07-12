import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-primary-deep text-primary-foreground mt-20">
      <div className="container-wide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-14">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="" width={44} height={44} className="h-11 w-11" />
            <div className="leading-tight">
              <div className="font-extrabold">HARE RAMA</div>
              <div className="text-[10px] tracking-[0.18em] opacity-80">FOUNDATION PAKISTAN</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 mt-5">
            {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-accent transition-smooth">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Quick Links" links={[
          ["About Us", "/about"], ["Our Programs", "/programs"], ["Advocacy", "/advocacy"],
          ["Media Center", "/media"], ["Get Involved", "/get-involved"], ["Contact Us", "/contact"],
        ]} />

        <FooterCol title="Our Programs" links={[
          ["Education", "/programs"], ["Skill Development", "/programs"], ["Women Empowerment", "/programs"],
          ["Emergency Relief", "/programs"], ["Advocacy & Policy", "/advocacy"],
        ]} />

        <FooterCol title="Get Involved" links={[
          ["Volunteer", "/get-involved"], ["Internships", "/get-involved"],
          ["Partnerships", "/get-involved"], ["Fundraise", "/get-involved"], ["Donate", "/donate"],
        ]} />

        <div>
          <h4 className="font-bold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" /> Chak No111/P East. St.# 04 Rahim Yar Khan , Rahim Yar Khan, Pakistan </li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" /> +92 300 9675588</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" /> info@hrfpk.org</li>
            <li className="flex gap-3"><Globe className="h-4 w-4 mt-0.5 text-accent shrink-0" /> www.hrfpk.org</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between py-5 text-xs opacity-80 gap-2">
          <p>© {new Date().getFullYear()} Hare Rama Foundation Pakistan. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-accent">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="font-bold mb-4">{title}</h4>
      <ul className="space-y-2 text-sm opacity-90">
        {links.map(([label, to]) => (
          <li key={label + to}>
            <Link to={to} className="hover:text-accent transition-smooth">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}