import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { ArrowRight, BookOpen, Wrench, Users, LifeBuoy, Scale } from "lucide-react";
import { ScrollReveal, HoverCard } from "@/components/ui/animation-wrappers";
import progEducation from "@/assets/program-education.jpg";
import progSkills from "@/assets/program-skills.jpg";
import progWomen from "@/assets/program-women.jpg";
import progRelief from "@/assets/program-relief.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Our Programs | Hare Rama Foundation Pakistan" },
      { name: "description", content: "Explore our programs — Education, Skill Development, Women Empowerment, Emergency Relief and Advocacy across Pakistan." },
      { property: "og:title", content: "Our Programs" },
      { property: "og:description", content: "Education, skills, women empowerment, relief and advocacy." },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsPage,
});

const programs = [
  { img: progEducation, icon: BookOpen, title: "Education", body: "Schools, learning centers, scholarships and digital literacy initiatives serving children and youth from underserved areas." },
  { img: progSkills, icon: Wrench, title: "Skill Development", body: "Vocational training, digital skills and entrepreneurship support to build self-reliant livelihoods." },
  { img: progWomen, icon: Users, title: "Women Empowerment", body: "Leadership, health awareness, micro-enterprise and rights protection programs for women and girls." },
  { img: progRelief, icon: LifeBuoy, title: "Emergency Relief", body: "Rapid food, shelter, medical aid and rehabilitation during natural disasters and humanitarian crises." },
  { img: progEducation, icon: Scale, title: "Advocacy & Policy", body: "Research, policy briefs and grassroots campaigns that advance the rights of marginalized communities." },
];

function ProgramsPage() {
  return (
    <PageShell eyebrow="WHAT WE DO" title="Our Programs" intro="Five integrated programs working together to uplift the most marginalized across Pakistan.">
      <div className="grid md:grid-cols-2 gap-8">
        {programs.map(({ img, icon: Icon, title, body }, index) => (
          <ScrollReveal key={title} direction="up" delay={index * 0.1} className="flex">
            <HoverCard className="bg-card rounded-xl overflow-hidden shadow-card border border-border/30 w-full flex flex-col justify-between group">
              <div>
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={img}
                    alt={title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3">
                    <span className="h-10 w-10 rounded-full bg-accent-soft text-accent grid place-items-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-bold text-foreground">{title}</h3>
                  </div>
                  <p className="mt-4 text-muted-foreground leading-relaxed text-sm md:text-base">{body}</p>
                </div>
              </div>
              <div className="p-7 pt-0">
                <Link
                  to="/get-involved"
                  className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:text-accent transition-colors duration-300"
                >
                  GET INVOLVED <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </HoverCard>
          </ScrollReveal>
        ))}
      </div>
    </PageShell>
  );
}