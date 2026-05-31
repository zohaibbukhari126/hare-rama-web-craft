import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Target, Eye, Heart, Users, Activity, HandHeart, Scale } from "lucide-react";
import { ScrollReveal, HoverCard } from "@/components/ui/animation-wrappers";

// Import team headshots
import rameshJaipal from "@/assets/ramesh-jaipal.png";
import priyaKumari from "@/assets/priya-kumari.png";
import muhammadAli from "@/assets/muhammad-ali.png";
import soniaMasih from "@/assets/sonia-masih.png";

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

  const team = [
    {
      name: "Ramesh Jaipal",
      role: "Founder & Executive Director",
      bio: "Ramesh Jaipal is a prominent Pakistani social and human rights activist widely recognized for his advocacy on behalf of marginalized communities and religious minorities in the Sindh and Punjab regions. As the Chairman of the Scheduled Caste Rights Movement and founder of the Hare Rama Foundation, he played a historic legislative role in drafting and campaigning for the landmark Hindu Marriage Bill, securing legal marriage recognition for Hindu minorities.",
      image: rameshJaipal,
      icon: Users,
    },
    {
      name: "Dr. Priya Kumari",
      role: "Medical Relief Coordinator",
      bio: "Dr. Priya coordinates our mobile health clinics, organizing medical camps that deliver free treatment and healthcare supplies to remote and flood-affected communities.",
      image: priyaKumari,
      icon: Activity,
    },
    {
      name: "Muhammad Ali",
      role: "Volunteer Network Manager",
      bio: "Ali mobilizes and manages our active network of over 500 volunteers across Pakistan, coordinating local learning center programs and emergency relief operations.",
      image: muhammadAli,
      icon: HandHeart,
    },
    {
      name: "Sonia Masih",
      role: "Advocacy & Legal Advisor",
      bio: "Sonia leads our grassroots legal awareness workshops, educating marginalized communities about their constitutional rights, employment quotas, and family laws.",
      image: soniaMasih,
      icon: Scale,
    },
  ];

  return (
    <PageShell eyebrow="WHO WE ARE" title="About Hare Rama Foundation" intro="Founded on the belief that every human being deserves dignity, opportunity and a voice, we serve the most marginalized communities across Pakistan.">
      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map(({ icon: Icon, title, body }, index) => (
          <ScrollReveal key={title} direction="up" delay={index * 0.1} className="h-full flex">
            <HoverCard className="bg-card rounded-xl p-7 shadow-card border border-border/40 w-full flex flex-col group">
              <div className="h-12 w-12 grid place-items-center rounded-full bg-accent-soft text-accent mb-4 transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed text-sm md:text-base">{body}</p>
            </HoverCard>
          </ScrollReveal>
        ))}
      </div>
      
      <ScrollReveal direction="up" delay={0.2} className="mt-16 max-w-3xl">
        <h2 className="text-2xl font-extrabold text-foreground">Our Story</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed text-sm md:text-base">
          Hare Rama Foundation Pakistan began with a simple commitment: to stand beside the people most often left behind. Over the years we have grown from grassroots community work into a national platform delivering programs in education, livelihoods, women's leadership, emergency response and rights advocacy.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed text-sm md:text-base">
          We collaborate with local communities, government bodies and international partners — including CARE, UN Women, Oxfam, UNHCR, SDPI and Sightsavers — to drive lasting change.
        </p>
      </ScrollReveal>

      {/* Leadership & Staff Segment */}
      <ScrollReveal direction="up" delay={0.3} className="mt-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-1">Our Leadership & Team</h2>
        <p className="text-muted-foreground text-sm md:text-base mb-8">The dedicated activists, medical practitioners, and coordinators driving our mission forward.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Prominent Founder Highlight Card */}
          <div className="md:col-span-3">
            <HoverCard className="bg-gradient-to-br from-primary-deep/95 via-primary-deep/80 to-primary/45 text-primary-foreground rounded-xl p-8 shadow-elegant relative overflow-hidden group">
              <div className="relative z-10 lg:grid lg:grid-cols-12 gap-8 items-stretch">
                <div className="lg:col-span-4 relative min-h-[320px] overflow-hidden rounded-xl bg-muted/20 border border-white/20 shadow-2xl shrink-0 mb-6 lg:mb-0">
                  <img
                    src={rameshJaipal}
                    alt="Ramesh Jaipal - Founder & Executive Director of Hare Rama Foundation"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                    Founder
                  </div>
                </div>
                
                <div className="lg:col-span-8 flex flex-col justify-center">
                  <span className="text-accent text-xs font-extrabold uppercase tracking-widest border-b border-accent/20 pb-2 mb-3 inline-block">
                    FOUNDER & EXECUTIVE DIRECTOR
                  </span>
                  <h3 className="text-3xl font-extrabold text-white">Ramesh Jaipal</h3>
                  <p className="text-sm text-accent-foreground/90 italic mt-1 font-semibold">
                    Pakistani Social & Human Rights Activist • Hubert H. Humphrey Fellow • Scheduled Caste Rights Chairman
                  </p>
                  
                  {/* Founder Quote block */}
                  <blockquote className="mt-4 border-l-4 border-accent pl-4 italic text-sm md:text-base text-white/95 leading-relaxed bg-white/5 py-3 pr-3 rounded-r-lg">
                    “Our mission is not merely to provide temporary relief, but to dismantle the systemic barriers that prevent religious minorities and marginalized groups from achieving equal rights and representation in Pakistan.”
                  </blockquote>

                  <p className="mt-4 leading-relaxed text-sm md:text-base text-white/90">
                    Ramesh Jaipal is a prominent Pakistani social and human rights activist widely recognized for his advocacy on behalf of marginalized communities and religious minorities in the Sindh and Punjab regions. As the Chairman of the Scheduled Caste Rights Movement and founder of the Hare Rama Foundation, he played a historic legislative role in drafting and campaigning for the landmark <strong>Hindu Marriage Bill</strong>, securing legal marriage recognition for Hindu minorities.
                  </p>
                  <p className="mt-3 leading-relaxed text-sm md:text-base text-white/90">
                    His work focuses on establishing residential land rights, enforcing minority job quotas, conducting sociological research on Dalits and minorities, and coordinating major humanitarian flood relief operations. He speaks globally to advocate for inclusion and religious tolerance.
                  </p>
                  
                  {/* Highlights list inside the card */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/10 text-xs">
                    <div className="flex items-center gap-2 text-white/90">
                      <span className="h-2 w-2 rounded-full bg-accent shrink-0" />
                      <span>Hubert H. Humphrey Fellow Alumni</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <span className="h-2 w-2 rounded-full bg-accent shrink-0" />
                      <span>Chairman, Scheduled Caste Rights Movement</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <span className="h-2 w-2 rounded-full bg-accent shrink-0" />
                      <span>Pioneered historic Pakistan Hindu Marriage Bill</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <span className="h-2 w-2 rounded-full bg-accent shrink-0" />
                      <span>Directed large-scale flood relief & health programs</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute right-0 bottom-0 text-white/5 font-extrabold text-9xl pointer-events-none select-none translate-x-10 translate-y-10" aria-hidden="true">
                HRF
              </div>
            </HoverCard>
          </div>

          {/* Doctors & Volunteers Subgrid */}
          {team.slice(1).map((t, index) => (
            <ScrollReveal key={t.name} direction="up" delay={index * 0.08} className="flex">
              <HoverCard className="bg-card rounded-xl shadow-card border border-border/30 w-full flex flex-col justify-between overflow-hidden group">
                <div className="relative h-64 w-full overflow-hidden bg-muted">
                  <img
                    src={t.image}
                    alt={`${t.name} - ${t.role}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 right-3 h-10 w-10 rounded-full bg-accent text-accent-foreground grid place-items-center shadow-md backdrop-blur-sm z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" aria-hidden="true">
                    <t.icon className="h-5 w-5" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-[10px] text-accent font-extrabold tracking-widest uppercase mb-1 inline-block">{t.role}</span>
                    <h4 className="font-extrabold text-foreground text-lg leading-tight mb-2">{t.name}</h4>
                    <p className="mt-1 text-muted-foreground text-xs md:text-sm leading-relaxed">{t.bio}</p>
                  </div>
                </div>
              </HoverCard>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </PageShell>
  );
}