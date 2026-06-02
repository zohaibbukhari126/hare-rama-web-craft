import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { MapPin, Phone, Mail, Globe, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, HoverCard } from "@/components/ui/animation-wrappers";

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
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageShell eyebrow="GET IN TOUCH" title="Contact Us" intro="We'd love to hear from you — for partnerships, volunteering, media or general inquiries.">
      <div className="grid lg:grid-cols-2 gap-10">
        <ScrollReveal direction="left" className="bg-card rounded-xl p-8 shadow-card border border-border/30 overflow-hidden">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                {/* Elastic check circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                  className="h-16 w-16 bg-brand-7/40 text-brand-1 rounded-full grid place-items-center mb-5 shadow-inner"
                >
                  <svg className="h-8 w-8 stroke-current fill-none stroke-[3px]" viewBox="0 0 24 24">
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold text-foreground">Message Sent!</h3>
                <p className="text-sm text-muted-foreground mt-2.5 max-w-sm leading-relaxed">
                  Thank you for reaching out. A representative from the Hare Rama Foundation will review your request and get back to you shortly.
                </p>
                <motion.button
                  onClick={() => setSubmitted(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 text-xs font-bold text-accent tracking-wider uppercase bg-accent-soft px-4 py-2.5 rounded-md hover:bg-accent/20 transition-colors cursor-pointer"
                >
                  Send another message
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Your Name" type="text" required />
                  <Field label="Your Email" type="email" required />
                </div>
                <Field label="Subject" type="text" required />
                <div>
                  <label htmlFor="message" className="text-sm font-semibold text-foreground">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="mt-2 w-full px-4 py-3 rounded-md border-2 border-border focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all duration-300 bg-background text-sm md:text-base"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-accent text-accent-foreground font-bold px-7 py-3.5 rounded-md shadow-card hover:shadow-elegant transition-all cursor-pointer"
                >
                  SEND MESSAGE
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </ScrollReveal>

        <div className="space-y-4">
          <InfoRow index={0} icon={MapPin} title="Address" value="106-D Zaman Park, Lahore, Pakistan" />
          <InfoRow index={1} icon={Phone} title="Phone" value="+92 42 3742 0741" />
          <InfoRow index={2} icon={Mail} title="Email" value="info@hrfpk.org" />
          <InfoRow index={3} icon={Globe} title="Website" value="www.hrfpk.org" />
        </div>
      </div>
    </PageShell>
  );
}

function Field({ label, type, required = false }: { label: string; type: string; required?: boolean }) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-foreground">{label}</label>
      <input
        id={id}
        type={type}
        required={required}
        className="mt-2 w-full px-4 py-3 rounded-md border-2 border-border focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all duration-300 bg-background text-sm md:text-base"
      />
    </div>
  );
}

function InfoRow({ icon: Icon, title, value, index }: { icon: LucideIcon; title: string; value: string; index: number }) {
  return (
    <ScrollReveal direction="right" delay={index * 0.08} className="flex">
      <HoverCard className="bg-card rounded-xl p-6 shadow-card border border-border/30 flex items-start gap-4 w-full group">
        <span className="h-12 w-12 grid place-items-center rounded-full bg-accent-soft text-accent shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h4 className="font-bold text-foreground text-sm md:text-base">{title}</h4>
          <p className="text-muted-foreground mt-1 text-xs md:text-sm">{value}</p>
        </div>
      </HoverCard>
    </ScrollReveal>
  );
}