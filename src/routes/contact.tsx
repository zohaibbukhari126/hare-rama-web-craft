import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { MapPin, Phone, Mail, Globe, type LucideIcon } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Hare Rama Foundation Pakistan" },
      { name: "description", content: "Get in touch with Hare Rama Foundation Pakistan — partnerships, media, volunteering or general inquiries." },
      { property: "og:title", content: "Contact Us" },
      { property: "og:description", content: "Reach out to Hare Rama Foundation Pakistan." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell eyebrow="GET IN TOUCH" title="Contact Us" intro="We'd love to hear from you — for partnerships, volunteering, media or general inquiries.">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="bg-card rounded-xl p-8 shadow-card">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Your Name" type="text" />
              <Field label="Your Email" type="email" />
            </div>
            <Field label="Subject" type="text" />
            <div>
              <label className="text-sm font-semibold text-foreground">Message</label>
              <textarea rows={5} className="mt-2 w-full px-4 py-3 rounded-md border-2 border-border focus:outline-none focus:border-accent" />
            </div>
            <button type="submit" className="bg-gradient-accent text-accent-foreground font-bold px-7 py-3 rounded-md shadow-card hover:shadow-elegant transition-smooth">
              SEND MESSAGE
            </button>
          </form>
        </div>
        <div className="space-y-4">
          <InfoRow icon={MapPin} title="Address" value="106-D Zaman Park, Lahore, Pakistan" />
          <InfoRow icon={Phone} title="Phone" value="+92 42 3742 0741" />
          <InfoRow icon={Mail} title="Email" value="info@hrfpk.org" />
          <InfoRow icon={Globe} title="Website" value="www.hrfpk.org" />
        </div>
      </div>
    </PageShell>
  );
}

function Field({ label, type }: { label: string; type: string }) {
  return (
    <div>
      <label className="text-sm font-semibold text-foreground">{label}</label>
      <input type={type} className="mt-2 w-full px-4 py-3 rounded-md border-2 border-border focus:outline-none focus:border-accent" />
    </div>
  );
}

function InfoRow({ icon: Icon, title, value }: { icon: LucideIcon; title: string; value: string }) {
  return (
    <div className="bg-card rounded-xl p-6 shadow-card flex items-start gap-4">
      <span className="h-12 w-12 grid place-items-center rounded-full bg-accent-soft text-accent shrink-0">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <h4 className="font-bold text-foreground">{title}</h4>
        <p className="text-muted-foreground mt-1">{value}</p>
      </div>
    </div>
  );
}