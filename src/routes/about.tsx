import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Target, Eye, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Hare Rama Foundation Pakistan" },
      { name: "description", content: "Learn about Hare Rama Foundation Pakistan — our mission, vision and values in serving marginalized communities across Pakistan." },
      { property: "og:title", content: "About Hare Rama Foundation Pakistan" },
      { property: "og:description", content: "Our mission, vision and values for a just and inclusive Pakistan." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const pillars = [
    { icon: Target, title: "Our Mission", body: "To empower marginalized communities through education, skills, advocacy and humanitarian support — ensuring dignity and opportunity for all." },
    { icon: Eye, title: "Our Vision", body: "A just, inclusive and compassionate Pakistan where every individual can realize their full potential." },
    { icon: Heart, title: "Our Values", body: "Compassion, integrity, equity, accountability and collaboration guide every program we run." },
  ];
  return (
    <PageShell eyebrow="WHO WE ARE" title="About Hare Rama Foundation" intro="Founded on the belief that every human being deserves dignity, opportunity and a voice, we serve the most marginalized communities across Pakistan.">
      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map(({ icon: Icon, title, body }) => (
          <div key={title} className="bg-card rounded-xl p-7 shadow-card">
            <div className="h-12 w-12 grid place-items-center rounded-full bg-accent-soft text-accent mb-4">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground">{title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 max-w-3xl">
        <h2 className="text-2xl font-extrabold text-foreground">Our Story</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Hare Rama Foundation Pakistan began with a simple commitment: to stand beside the people most often left behind. Over the years we have grown from grassroots community work into a national platform delivering programs in education, livelihoods, women's leadership, emergency response and rights advocacy.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          We collaborate with local communities, government bodies and international partners — including CARE, UN Women, Oxfam, UNHCR, SDPI and Sightsavers — to drive lasting change.
        </p>
      </div>
    </PageShell>
  );
}