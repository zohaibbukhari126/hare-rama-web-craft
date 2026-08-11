import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageShell } from "@/components/page-shell";
import { Target, Eye, Heart, Users, ChevronDown, Globe } from "lucide-react";
import { ScrollReveal, HoverCard } from "@/components/ui/animation-wrappers";

// Import team headshots
import rameshJaipal from "@/assets/ramesh-jaipal.png";
import zohaibAbbas from "@/assets/zohaib-abbas.png";
import zainAli from "@/assets/zain-rama.png";

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

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

function TypewriterBio({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, 11);
    return () => clearInterval(id);
  }, [text]);

  return (
    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
      {displayed}
      {!done && (
        <span className="inline-block w-[2px] h-[1em] bg-primary ml-0.5 align-middle animate-pulse" />
      )}
    </p>
  );
}

function TeamCard({ member, isActive, onClick }: { member: TeamMember; isActive: boolean; onClick: () => void }) {
  return (
    <motion.article
      layout
      onClick={onClick}
      className={`rounded-2xl overflow-hidden cursor-pointer select-none border-2 bg-card transition-colors duration-300 ${
        isActive
          ? "col-span-2 lg:col-span-4 border-primary shadow-elegant"
          : "col-span-1 border-transparent shadow-card hover:border-border"
      }`}
      transition={{ layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
    >
      <div className={`flex h-full min-h-[18rem] ${isActive ? "flex-row" : "flex-col"}`}>

        {/* Portrait — always visible */}
        <div className={`relative flex-shrink-0 overflow-hidden ${isActive ? "w-48 lg:w-64" : "w-full h-72"}`}>
          <img
            src={member.image}
            alt={`${member.name} — ${member.role}`}
            className={`w-full h-full object-cover object-top transition-all duration-500 ${
              isActive ? "grayscale-0" : "grayscale hover:grayscale-[40%]"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 p-4">
            <p className="text-[10px] text-accent font-extrabold tracking-[0.18em] uppercase mb-0.5">{member.role}</p>
            <h4 className="text-white font-extrabold text-base leading-tight">{member.name}</h4>
          </div>
          <div className={`absolute top-3 right-3 h-6 w-6 rounded-full grid place-items-center shadow-md transition-all duration-300 ${
            isActive ? "bg-primary" : "bg-white/20 backdrop-blur-sm"
          }`}>
            <ChevronDown className={`h-3.5 w-3.5 text-white transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} />
          </div>
        </div>

        {/* Bio — slides in to the right when expanded */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              key="bio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="flex-1 px-7 py-8 md:px-10 md:py-10 flex flex-col justify-center overflow-hidden"
            >
              <span className="text-[11px] text-accent font-extrabold tracking-[0.2em] uppercase">
                {member.role}
              </span>
              <h3 className="text-xl md:text-2xl font-extrabold text-foreground mt-1">{member.name}</h3>
              <div className="w-10 h-[2px] bg-accent rounded-full mt-3 mb-5" />
              <TypewriterBio key={member.name} text={member.bio} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

function AboutPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
      name: "Muhammad Zohaib Abbas",
      role: "Web Developer & Digital Manager",
      bio: "Muhammad Zohaib Abbas is a Software Engineering student at COMSATS University Islamabad who architected and built the HRFPK digital platform from the ground up. Using React 19, TypeScript, TanStack Router, and Tailwind CSS v4, he delivered a production-grade website with Server-Side Rendering for optimal reach and SEO. He continues to manage, maintain, and evolve the platform as the foundation grows.",
      image: zohaibAbbas,
      icon: Globe,
    },
    {
      name: "Zain Ali",
      role: "Full Stack Engineer",
      bio: "Zain Ali is a Full Stack Developer and graduate of COMSATS University Islamabad, specializing in building scalable web and mobile applications, backend systems, and AI-powered solutions. He is experienced in modern development technologies, API integration, databases, and automation, with a focus on creating practical solutions to real-world problems.",
      image: zainAli,
      icon: Globe,
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
        <p className="text-muted-foreground text-sm md:text-base mb-8">
          Click a portrait — the bio opens right below it, pushing other cards down.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-start">
          {team.map((member, index) => (
            <TeamCard
              key={member.name}
              member={member}
              isActive={openIndex === index}
              onClick={() => setOpenIndex(prev => prev === index ? null : index)}
            />
          ))}
        </div>
      </ScrollReveal>
    </PageShell>
  );
}