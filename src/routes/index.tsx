import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { BookOpen, Wrench, Users, LifeBuoy, Scale, ArrowRight, Heart, Play, GraduationCap, HandHeart, Activity } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImage from "@/assets/hero-education.jpg";
import progEducation from "@/assets/program-education.jpg";
import progSkills from "@/assets/program-skills.jpg";
import progWomen from "@/assets/program-women.jpg";
import progRelief from "@/assets/program-relief.jpg";
import storyImage from "@/assets/story-watch.jpg";
import supportImage from "@/assets/support-cause.jpg";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hare Rama Foundation Pakistan | Empowering Marginalized Communities" },
      { name: "description", content: "We work for education, skill development, women empowerment, emergency relief and advocacy of the poor and marginalized communities across Pakistan." },
      { property: "og:title", content: "Hare Rama Foundation Pakistan" },
      { property: "og:description", content: "Empowering Marginalized Communities — Building a Better Tomorrow." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <StatsBar />
      <FocusAreas />
      <Programs />
      <Impact />
      <StoryAndDonate />
      <News />
      <Partners />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Smiling Pakistani girl in school uniform" width={1600} height={900} className="h-full w-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/95 via-primary-deep/70 to-primary-deep/10" />
      </div>
      <div className="relative container-wide py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl text-primary-foreground animate-fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            Empowering<br />
            <span className="text-accent">Marginalized Communities</span><br />
            Building a Better Tomorrow
          </h1>
          <p className="mt-6 text-base sm:text-lg opacity-90 max-w-xl">
            We work for education, skill development, women empowerment, emergency relief and advocacy of the poor and marginalized communities across Pakistan.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/donate" className="inline-flex items-center gap-2 bg-gradient-accent text-accent-foreground font-bold px-7 py-3.5 rounded-md shadow-elegant hover:-translate-y-0.5 transition-smooth">
              DONATE NOW <Heart className="h-4 w-4 fill-current" />
            </Link>
            <Link to="/programs" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/30 text-primary-foreground font-bold px-7 py-3.5 rounded-md hover:bg-white/20 transition-smooth">
              EXPLORE OUR WORK <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { label: "Today", value: "2,847" },
    { label: "This Month", value: "68,493" },
    { label: "This Year", value: "512,764" },
    { label: "Total Visitors", value: "1,245,862+" },
  ];
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-wide py-6 grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
        <div className="flex items-center gap-3 col-span-2 md:col-span-1">
          <Users className="h-9 w-9 text-accent" />
          <div>
            <div className="text-2xl font-extrabold text-accent">1,245,862+</div>
            <div className="text-xs opacity-80">Visitors Around the World</div>
          </div>
        </div>
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <div className="text-xs opacity-70 flex items-center gap-1.5 justify-center md:justify-start">
              <Activity className="h-3 w-3" /> {s.label}
            </div>
            <div className="text-xl font-extrabold text-accent">{s.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const focusAreas = [
  { icon: BookOpen, title: "Education", desc: "Quality education for underprivileged children and youth.", tint: "bg-emerald-100 text-emerald-700" },
  { icon: Wrench, title: "Skill Development", desc: "Vocational training and skills for a self-reliant future.", tint: "bg-orange-100 text-orange-700" },
  { icon: Users, title: "Women Empowerment", desc: "Empowering women for leadership and economic independence.", tint: "bg-rose-100 text-rose-700" },
  { icon: LifeBuoy, title: "Emergency Relief", desc: "Providing immediate relief and support in times of crisis.", tint: "bg-sky-100 text-sky-700" },
  { icon: Scale, title: "Advocacy & Policy", desc: "Advocating for rights and policy changes for marginalized people.", tint: "bg-violet-100 text-violet-700" },
] as const;

function FocusAreas() {
  return (
    <section className="container-wide -mt-10 relative z-10">
      <div className="bg-card rounded-xl shadow-elegant grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-border overflow-hidden">
        {focusAreas.map(({ icon: Icon, title, desc, tint }) => (
          <div key={title} className="p-6 hover:bg-secondary/60 transition-smooth">
            <div className={`h-12 w-12 rounded-full grid place-items-center ${tint} mb-4`}>
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{desc}</p>
            <Link to="/programs" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition-smooth">
              Learn More <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

const programs = [
  { img: progEducation, icon: BookOpen, title: "Education", desc: "We run schools, learning centers and scholarship programs to ensure quality education for marginalized children.", tint: "bg-emerald-600" },
  { img: progSkills, icon: Wrench, title: "Skill Development", desc: "Vocational training, digital skills and entrepreneurship programs for youth to build better livelihoods.", tint: "bg-orange-500" },
  { img: progWomen, icon: Users, title: "Women Empowerment", desc: "Programs focused on women leadership, entrepreneurship, health awareness and rights protection.", tint: "bg-rose-500" },
  { img: progRelief, icon: LifeBuoy, title: "Emergency Relief", desc: "We provide food, shelter, medical aid and rehabilitation support during natural disasters and humanitarian crises.", tint: "bg-sky-500" },
];

function Programs() {
  return (
    <section className="container-wide py-20">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
        <div>
          <p className="text-xs tracking-[0.2em] font-bold text-accent">WHAT WE DO</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2">Our Programs</h2>
        </div>
        <Link to="/programs" className="inline-flex items-center gap-1 font-semibold text-primary hover:text-accent transition-smooth">
          View All Programs <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map(({ img, icon: Icon, title, desc, tint }) => (
          <article key={title} className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth">
            <div className="relative h-48 overflow-hidden">
              <img src={img} alt={title} width={800} height={600} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-smooth" />
              <div className={`absolute -bottom-5 left-5 h-10 w-10 rounded-full grid place-items-center text-white ${tint} shadow-elegant`}>
                <Icon className="h-5 w-5" />
              </div>
            </div>
            <div className="p-6 pt-7">
              <h3 className="font-bold text-lg text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{desc}</p>
              <Link to="/programs" className="mt-4 inline-flex items-center gap-1 text-xs font-bold tracking-wider text-primary hover:text-accent transition-smooth">
                READ MORE <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const impact = [
  { icon: Users, value: "50,000+", label: "Lives Impacted" },
  { icon: GraduationCap, value: "200+", label: "Education Centers" },
  { icon: Wrench, value: "5,000+", label: "Youth Trained" },
  { icon: HandHeart, value: "3,000+", label: "Women Empowered" },
  { icon: LifeBuoy, value: "100+", label: "Relief Operations" },
];

function Impact() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary" />
      <div className="relative container-wide py-14 grid grid-cols-2 md:grid-cols-5 gap-8 text-primary-foreground">
        {impact.map(({ icon: Icon, value, label }) => (
          <div key={label} className="text-center">
            <Icon className="h-8 w-8 mx-auto opacity-90" />
            <div className="text-3xl font-extrabold text-accent mt-2">{value}</div>
            <div className="text-xs sm:text-sm opacity-90 mt-1">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StoryAndDonate() {
  return (
    <section className="container-wide py-20 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
      <div className="relative rounded-xl overflow-hidden shadow-card group">
        <img src={storyImage} alt="Young girl reading" width={800} height={600} loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 to-transparent" />
        <button className="absolute inset-0 grid place-items-center" aria-label="Play story">
          <span className="h-16 w-16 rounded-full bg-white/95 grid place-items-center shadow-elegant group-hover:scale-110 transition-smooth">
            <Play className="h-6 w-6 text-primary fill-current ml-1" />
          </span>
        </button>
        <span className="absolute bottom-5 left-5 bg-gradient-accent text-accent-foreground text-xs font-bold tracking-wider px-3 py-1.5 rounded">
          WATCH OUR STORY
        </span>
      </div>

      <div className="bg-card rounded-xl p-8 shadow-card flex flex-col justify-center">
        <p className="text-xs tracking-[0.2em] font-bold text-accent">OUR STORY</p>
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mt-3 leading-tight">
          Working for a Just, Inclusive and Compassionate Society
        </h2>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          Hare Rama Foundation Pakistan believes in the dignity of every human being. We work for the uplift of marginalized communities by creating opportunities, raising voices and influencing policies for a better and equitable Pakistan.
        </p>
        <Link to="/about" className="mt-6 self-start inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-md hover:bg-primary-deep transition-smooth">
          ABOUT US <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="relative rounded-xl overflow-hidden shadow-elegant bg-primary-deep text-primary-foreground p-8 flex flex-col justify-between min-h-[320px]">
        <div>
          <h3 className="text-2xl font-extrabold">Support Our Cause</h3>
          <p className="text-sm opacity-90 mt-3 leading-relaxed">
            Your donation can bring hope and change lives. Together we can build a better tomorrow.
          </p>
          <Link to="/donate" className="mt-6 inline-flex items-center gap-2 bg-gradient-accent text-accent-foreground font-bold px-6 py-3 rounded-md hover:-translate-y-0.5 transition-smooth">
            DONATE NOW <Heart className="h-4 w-4 fill-current" />
          </Link>
        </div>
        <img src={supportImage} alt="" width={400} height={300} loading="lazy" className="absolute right-0 bottom-0 w-40 h-40 object-cover opacity-50 rounded-tl-3xl pointer-events-none" />
      </div>
    </section>
  );
}

const news = [
  { img: news1, date: "May 10, 2024", title: "Flood Relief Operations in Southern Punjab" },
  { img: news2, date: "April 28, 2024", title: "Women Leadership Training Workshop" },
  { img: news3, date: "April 15, 2024", title: "New Community Learning Center Inaugurated" },
];

function News() {
  return (
    <section className="container-wide pb-20">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">Latest News & Updates</h2>
        <Link to="/media" className="inline-flex items-center gap-1 font-semibold text-primary hover:text-accent transition-smooth">
          View All News <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {news.map((n) => (
          <article key={n.title} className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-smooth group">
            <div className="h-48 overflow-hidden">
              <img src={n.img} alt={n.title} width={768} height={512} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-smooth" />
            </div>
            <div className="p-5">
              <div className="text-xs text-accent font-semibold">{n.date}</div>
              <h3 className="font-bold text-foreground mt-2 leading-snug">{n.title}</h3>
              <Link to="/media" className="mt-3 inline-flex items-center gap-1 text-xs font-bold tracking-wider text-primary hover:text-accent">
                READ MORE <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Partners() {
  const partners = ["CARE", "UN WOMEN", "Oxfam", "UNHCR", "SDPI", "Sightsavers"];
  return (
    <section className="container-wide pb-16">
      <h2 className="text-center text-xl font-bold text-foreground mb-8">Our Partners</h2>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-80">
        {partners.map((p) => (
          <div key={p} className="text-lg font-extrabold tracking-tight text-muted-foreground hover:text-primary transition-smooth">
            {p}
          </div>
        ))}
      </div>
    </section>
  );
}
