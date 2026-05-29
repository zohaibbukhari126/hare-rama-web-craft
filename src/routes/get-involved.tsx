import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { HandHeart, Briefcase, Users, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved | Hare Rama Foundation Pakistan" },
      { name: "description", content: "Volunteer, intern, partner or fundraise with Hare Rama Foundation Pakistan and help us build a better tomorrow." },
      { property: "og:title", content: "Get Involved" },
      { property: "og:description", content: "Volunteer, intern, partner, fundraise and donate." },
    ],
    links: [{ rel: "canonical", href: "/get-involved" }],
  }),
  component: GetInvolvedPage,
});

const ways = [
  { icon: HandHeart, title: "Volunteer", body: "Join our community of volunteers across Pakistan and contribute your time and skills." },
  { icon: Briefcase, title: "Internships", body: "Gain hands-on experience in development, advocacy, media and program management." },
  { icon: Users, title: "Partnerships", body: "Partner with us as an organization, university or business to scale meaningful impact." },
  { icon: Sparkles, title: "Fundraise", body: "Run a fundraising campaign in your community, workplace or online and amplify our work." },
];

function GetInvolvedPage() {
  return (
    <PageShell eyebrow="JOIN US" title="Get Involved" intro="There are many ways to support our work. Choose the path that fits you and help us build a better tomorrow.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ways.map(({ icon: Icon, title, body }) => (
          <div key={title} className="bg-card rounded-xl p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth">
            <div className="h-12 w-12 rounded-full bg-accent-soft text-accent grid place-items-center mb-4">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
      <div className="mt-14 bg-gradient-primary text-primary-foreground rounded-2xl p-10 text-center shadow-elegant">
        <h2 className="text-2xl md:text-3xl font-extrabold">Ready to make a difference?</h2>
        <p className="mt-3 opacity-90 max-w-xl mx-auto">Your support — in time, skills or contribution — directly changes lives across Pakistan.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/donate" className="inline-flex items-center gap-2 bg-gradient-accent text-accent-foreground font-bold px-6 py-3 rounded-md">Donate Now <ArrowRight className="h-4 w-4" /></Link>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/30 font-bold px-6 py-3 rounded-md hover:bg-white/25 transition-smooth">Contact Us <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </PageShell>
  );
}