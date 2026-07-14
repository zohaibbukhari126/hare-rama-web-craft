import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { BookOpen, Wrench, Users, LifeBuoy, Scale, ArrowRight, Heart, Play, GraduationCap, HandHeart, Activity } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  ScrollReveal,
  CountUp,
  FloatingShapes,
  HoverCard,
  AnimatedRippleButton,
} from "@/components/ui/animation-wrappers";
import partnerCare from "@/assets/partner-care.svg";
import partnerUnwomen from "@/assets/partner-unwomen.svg";
import partnerOxfam from "@/assets/partner-oxfam.svg";
import partnerUnhcr from "@/assets/partner-unhcr.svg";
import partnerSdpi from "@/assets/partner-sdpi.svg";
import partnerSightsavers from "@/assets/partner-sightsavers.svg";
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
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SiteHeader />
      <Hero />
      <StatsBar />
      <FocusAreas />
      <Programs />
      <Impact />
      <StoryAndDonate />
      <SuccessStories />
      <News />
      <Partners />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const textX = useMotionValue(0);
  const textY = useMotionValue(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      // Gentle parallax coordinate translation
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      setMouseCoords({ x, y });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useEffect(() => {
    textX.set(mouseCoords.x);
    textY.set(mouseCoords.y);
  }, [mouseCoords, textX, textY]);

  // Framer motion stagged container
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 16 },
    },
  };

  return (
    <section className="relative overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Smiling Pakistani girl in school uniform"
          width={1600}
          height={900}
          className="h-full w-full object-cover scale-105"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/95 via-primary-deep/70 to-primary-deep/15" />
      </div>

      {/* Floating backdrops decoration */}
      <FloatingShapes />

      <div className="relative container-wide py-20 md:py-28 lg:py-36 z-10 w-full">
        <motion.div
          style={{ x: textX, y: textY }}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl text-primary-foreground"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight"
          >
            Empowering<br />
            <span className="text-accent">Marginalized Communities</span><br />
            Building a Better Tomorrow
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-base sm:text-lg opacity-90 max-w-xl leading-relaxed"
          >
            We work for education, skill development, women empowerment, emergency relief and advocacy of the poor and marginalized communities across Pakistan.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 bg-gradient-accent text-accent-foreground font-bold px-7 py-3.5 rounded-md shadow-elegant hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
            >
              DONATE NOW <Heart className="h-4 w-4 fill-current animate-pulse" />
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/30 text-primary-foreground font-bold px-7 py-3.5 rounded-md hover:bg-white/20 transition-all duration-300"
            >
              EXPLORE OUR WORK <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { label: "Today", value: 2847 },
    { label: "This Month", value: 68493 },
    { label: "This Year", value: 512764 },
  ];

  return (
    <section className="bg-primary text-primary-foreground relative z-20">
      <div className="container-wide pt-6 pb-16 grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
        <ScrollReveal direction="left" className="flex items-center gap-3 col-span-2 md:col-span-2">
          <Users className="h-9 w-9 text-accent shrink-0" />
          <div>
            <div className="text-xl sm:text-2xl font-extrabold text-accent flex items-center">
              <CountUp value={1245862} suffix="+" />
            </div>
            <div className="text-xs opacity-85">Visitors Around the World</div>
          </div>
        </ScrollReveal>

        {stats.map((s, index) => (
          <ScrollReveal
            key={s.label}
            direction="up"
            delay={index * 0.08}
            className="text-center md:text-left border-l border-white/10 pl-0 md:pl-6 first-of-type:border-none"
          >
            <div className="text-xs opacity-75 flex items-center gap-1.5 justify-center md:justify-start">
              <Activity className="h-3 w-3" /> {s.label}
            </div>
            <div className="text-lg sm:text-xl font-extrabold text-accent mt-0.5">
              <CountUp value={s.value} />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

const focusAreas = [
  { icon: BookOpen, title: "Education", desc: "Quality education for underprivileged children and youth.", tint: "bg-brand-7/40 text-brand-1" },
  { icon: Wrench, title: "Skill Development", desc: "Vocational training and skills for a self-reliant future.", tint: "bg-orange-100 text-orange-700" },
  { icon: Users, title: "Women Empowerment", desc: "Empowering women for leadership and economic independence.", tint: "bg-rose-100 text-rose-700" },
  { icon: LifeBuoy, title: "Emergency Relief", desc: "Providing immediate relief and support in times of crisis.", tint: "bg-sky-100 text-sky-700" },
  { icon: Scale, title: "Advocacy & Policy", desc: "Advocating for rights and policy changes for marginalized people.", tint: "bg-violet-100 text-violet-700" },
] as const;

function FocusAreas() {
  return (
    <section className="container-wide -mt-10 relative z-30">
      <div className="bg-card rounded-xl shadow-elegant grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-border overflow-hidden">
        {focusAreas.map(({ icon: Icon, title, desc, tint }, index) => (
          <ScrollReveal
            key={title}
            direction="up"
            delay={index * 0.06}
            className="h-full flex"
          >
            <HoverCard className="p-6 bg-card w-full flex flex-col justify-between hover:bg-secondary/40 transition-colors duration-300">
              <div>
                <div className={`h-12 w-12 rounded-full grid place-items-center ${tint} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-foreground text-base md:text-lg">{title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{desc}</p>
              </div>
              <Link
                to="/programs"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition-smooth"
              >
                Learn More <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </HoverCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

const programs = [
  { img: progEducation, icon: BookOpen, title: "Education", desc: "We run schools, learning centers and scholarship programs to ensure quality education for marginalized children.", tint: "bg-brand-1" },
  { img: progSkills, icon: Wrench, title: "Skill Development", desc: "Vocational training, digital skills and entrepreneurship programs for youth to build better livelihoods.", tint: "bg-orange-500" },
  { img: progWomen, icon: Users, title: "Women Empowerment", desc: "Programs focused on women leadership, entrepreneurship, health awareness and rights protection.", tint: "bg-rose-500" },
  { img: progRelief, icon: LifeBuoy, title: "Emergency Relief", desc: "We provide food, shelter, medical aid and rehabilitation support during natural disasters and humanitarian crises.", tint: "bg-sky-500" },
];

const programImages = programs.map(p => p.img);

const imgSlideVariants = {
  enter:  { x: "100%", opacity: 0 },
  center: { x: 0, opacity: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit:   { x: "-100%", opacity: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

function ProgramImageSlider({ startIndex }: { startIndex: number }) {
  const [imgIdx, setImgIdx] = useState(startIndex);

  useEffect(() => {
    const delay = 3500 + startIndex * 900;
    const id = setInterval(() => setImgIdx(prev => (prev + 1) % programImages.length), delay);
    return () => clearInterval(id);
  }, [startIndex]);

  return (
    <div className="relative h-48 overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.img
          key={imgIdx}
          src={programImages[imgIdx]}
          alt=""
          width={800}
          height={600}
          className="absolute inset-0 h-full w-full object-cover"
          variants={imgSlideVariants}
          initial="enter"
          animate="center"
          exit="exit"
        />
      </AnimatePresence>
    </div>
  );
}

function Programs() {
  return (
    <section className="container-wide py-20">
      <ScrollReveal direction="up" className="flex items-end justify-between flex-wrap gap-4 mb-10">
        <div>
          <p className="text-xs tracking-[0.2em] font-bold text-accent">WHAT WE DO</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2">Our Programs</h2>
        </div>
        <Link to="/programs" className="inline-flex items-center gap-1 font-semibold text-primary hover:text-accent transition-smooth">
          View All Programs <ArrowRight className="h-4 w-4" />
        </Link>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map(({ icon: Icon, title, desc, tint }, index) => (
          <ScrollReveal key={title} direction="up" delay={index * 0.08} className="flex">
            <HoverCard className="bg-card rounded-xl overflow-hidden shadow-card border border-border/40 w-full flex flex-col justify-between group">
              <div>
                <div className="relative">
                  <ProgramImageSlider startIndex={index} />
                  <div className={`absolute -bottom-5 left-5 h-10 w-10 rounded-full grid place-items-center text-white ${tint} shadow-elegant transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110`}>
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6 pt-7">
                  <h3 className="font-bold text-lg text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{desc}</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link to="/programs" className="inline-flex items-center gap-1 text-xs font-bold tracking-wider text-primary hover:text-accent transition-smooth">
                  READ MORE <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </HoverCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

const impact = [
  { icon: Users, value: 50000, label: "Lives Impacted", suffix: "+" },
  { icon: GraduationCap, value: 200, label: "Education Centers", suffix: "+" },
  { icon: Wrench, value: 5000, label: "Youth Trained", suffix: "+" },
  { icon: HandHeart, value: 3000, label: "Women Empowered", suffix: "+" },
  { icon: LifeBuoy, value: 100, label: "Relief Operations", suffix: "+" },
];

function Impact() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary" />
      <div className="relative container-wide py-14 grid grid-cols-2 md:grid-cols-5 gap-8 text-primary-foreground z-10">
        {impact.map(({ icon: Icon, value, label, suffix }, index) => (
          <ScrollReveal key={label} direction="up" delay={index * 0.06} className="text-center">
            <Icon className="h-8 w-8 mx-auto opacity-90 transition-transform duration-300 hover:scale-110" />
            <div className="text-3xl font-extrabold text-accent mt-2 flex items-center justify-center">
              <CountUp value={value} suffix={suffix} />
            </div>
            <div className="text-xs sm:text-sm opacity-90 mt-1">{label}</div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

function StoryAndDonate() {
  return (
    <section className="container-wide py-20 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
      {/* Video Block with micro-interactions */}
      <ScrollReveal direction="left" className="relative rounded-xl overflow-hidden shadow-card group">
        <img
          src={storyImage}
          alt="Young girl reading"
          width={800}
          height={600}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 to-transparent" />
        <button
          className="absolute inset-0 grid place-items-center cursor-pointer"
          aria-label="Play story"
        >
          <span className="h-16 w-16 rounded-full bg-white/95 text-primary grid place-items-center shadow-elegant transition-transform duration-300 group-hover:scale-110">
            <Play className="h-6 w-6 fill-current ml-1" />
          </span>
        </button>
        <span className="absolute bottom-5 left-5 bg-gradient-accent text-accent-foreground text-xs font-bold tracking-wider px-3 py-1.5 rounded">
          WATCH OUR STORY
        </span>
      </ScrollReveal>

      {/* Narrative Info Card */}
      <ScrollReveal direction="up" delay={0.1} className="flex">
        <HoverCard className="bg-card rounded-xl p-8 shadow-card flex flex-col justify-center w-full border border-border/30">
          <p className="text-xs tracking-[0.2em] font-bold text-accent">OUR STORY</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mt-3 leading-tight">
            Working for a Just, Inclusive and Compassionate Society
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed text-sm md:text-base">
            Hare Rama Foundation Pakistan believes in the dignity of every human being. We work for the uplift of marginalized communities by creating opportunities, raising voices and influencing policies for a better and equitable Pakistan.
          </p>
          <Link
            to="/about"
            className="mt-6 self-start inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-md hover:bg-primary-deep transition-smooth"
          >
            ABOUT US <ArrowRight className="h-4 w-4" />
          </Link>
        </HoverCard>
      </ScrollReveal>

      {/* Staged CTA Box */}
      <ScrollReveal direction="right" className="flex">
        <HoverCard className="relative rounded-xl overflow-hidden shadow-elegant bg-primary-deep text-primary-foreground p-8 flex flex-col justify-between min-h-[320px] w-full">
          <div>
            <h3 className="text-2xl font-extrabold">Support Our Cause</h3>
            <p className="text-sm opacity-90 mt-3 leading-relaxed">
              Your donation can bring hope and change lives. Together we can build a better tomorrow.
            </p>
            <Link
              to="/donate"
              className="mt-6 inline-flex items-center gap-2 bg-gradient-accent text-accent-foreground font-bold px-6 py-3 rounded-md hover:-translate-y-0.5 hover:shadow-lg transition-smooth"
            >
              DONATE NOW <Heart className="h-4 w-4 fill-current" />
            </Link>
          </div>
          <img
            src={supportImage}
            alt=""
            width={400}
            height={300}
            loading="lazy"
            className="absolute right-0 bottom-0 w-40 h-40 object-cover opacity-35 rounded-tl-3xl pointer-events-none transition-transform duration-700 hover:scale-105"
          />
        </HoverCard>
      </ScrollReveal>
    </section>
  );
}

const stories = [
  {
    name: "Zainab Bibi",
    role: "Boutique Owner, Lahore",
    image: storyImage,
    program: "Women Empowerment",
    quote: "The vocational training at Hare Rama Foundation completely changed my life. I learned stitching and business basics, and today I own a local tailoring shop employing three other women in my village.",
  },
  {
    name: "Kashif Ali",
    role: "Grade 6 Student, Sindh",
    image: news3,
    program: "Education Program",
    quote: "I thought I would never go to school. But the Foundation sponsored my fees and books, and now I am learning science and computers. I want to become an engineer to serve my country.",
  },
  {
    name: "Amina Swati",
    role: "Community Leader, Swat",
    image: news2,
    program: "Emergency Relief",
    quote: "During the floods, our houses were destroyed. Hare Rama Foundation didn't just give us food; they helped us rebuild our houses and provided sewing machines so we could start earning again.",
  },
];

function SuccessStories() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right

  const nextStep = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 250 : -250,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 350, damping: 28 },
        opacity: { duration: 0.25 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 250 : -250,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 350, damping: 28 },
        opacity: { duration: 0.25 },
      },
    }),
  };

  return (
    <section className="bg-secondary/40 py-20 overflow-hidden relative">
      <div className="container-wide">
        <ScrollReveal direction="up" className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] font-bold text-accent">SUCCESS STORIES</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2">Lives Transformed</h2>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto bg-card rounded-2xl shadow-card border border-border/30 overflow-hidden md:flex min-h-[380px]">
          {/* Animated Carousel Contents */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full md:flex cursor-grab active:cursor-grabbing"
              // Adding swipe gestures
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.4}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = offset.x * velocity.x;
                if (swipe < -200) {
                  nextStep();
                } else if (swipe > 200) {
                  prevStep();
                }
              }}
            >
              {/* Left: Image container */}
              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                <img
                  src={stories[index].image}
                  alt={stories[index].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/60 to-transparent md:hidden" />
              </div>

              {/* Right: Text panel */}
              <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-between bg-card">
                <div>
                  <span className="bg-accent-soft text-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {stories[index].program}
                  </span>
                  <blockquote className="mt-6 text-sm md:text-base text-muted-foreground italic leading-relaxed">
                    "{stories[index].quote}"
                  </blockquote>
                </div>
                <div className="mt-6">
                  <cite className="not-italic font-extrabold text-foreground text-base md:text-lg block">
                    {stories[index].name}
                  </cite>
                  <span className="text-xs text-muted-foreground block mt-0.5">
                    {stories[index].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevStep}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground p-3 rounded-full shadow-md z-10 transition-colors hidden md:block hover:scale-105 active:scale-95"
            aria-label="Previous story"
          >
            ←
          </button>
          <button
            onClick={nextStep}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground p-3 rounded-full shadow-md z-10 transition-colors hidden md:block hover:scale-105 active:scale-95"
            aria-label="Next story"
          >
            →
          </button>
        </div>

        {/* Dynamic dots selector */}
        <div className="flex justify-center gap-2 mt-8 z-10 relative">
          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index ? "bg-accent w-6" : "bg-muted-foreground/30 w-2.5 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
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
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent(prev => (prev + 1) % news.length), 3500);
    return () => clearInterval(id);
  }, []);

  const slideVariants = {
    enter:  { x: "100%", opacity: 0 },
    center: { x: 0, opacity: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
    exit:   { x: "-100%", opacity: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  };

  const item = news[current];

  return (
    <section className="pb-20">
      <ScrollReveal direction="up" className="container-wide flex items-end justify-between mb-8 flex-wrap gap-3">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">Latest News & Updates</h2>
        <Link to="/media" className="inline-flex items-center gap-1 font-semibold text-primary hover:text-accent transition-smooth">
          View All News <ArrowRight className="h-4 w-4" />
        </Link>
      </ScrollReveal>

      <div className="container-wide">
        <div className="relative rounded-xl overflow-hidden shadow-elegant border border-border/30 bg-card h-64 sm:h-80 md:h-96">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={current}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex flex-col md:flex-row"
            >
              <div className="md:w-3/5 relative h-36 md:h-full overflow-hidden flex-shrink-0">
                <img
                  src={item.img}
                  alt={item.title}
                  width={768}
                  height={512}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/30 to-transparent" />
              </div>
              <div className="md:w-2/5 px-6 py-5 md:px-10 md:py-0 flex flex-col justify-center bg-card">
                <span className="text-xs text-accent font-bold tracking-wider uppercase">{item.date}</span>
                <h3 className="font-extrabold text-xl md:text-2xl text-foreground mt-2 leading-tight">{item.title}</h3>
                <Link
                  to="/media"
                  className="mt-5 self-start inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-xs px-5 py-2.5 rounded-md hover:bg-primary-deep transition-smooth"
                >
                  READ MORE <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-5">
          {news.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-6" : "bg-muted-foreground/30 w-2.5 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to news item ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const partners = [
    { name: "CARE International", logo: partnerCare },
    { name: "UN Women",           logo: partnerUnwomen },
    { name: "Oxfam",              logo: partnerOxfam },
    { name: "UNHCR",              logo: partnerUnhcr },
    { name: "SDPI",               logo: partnerSdpi },
    { name: "Sightsavers",        logo: partnerSightsavers },
  ];

  const doubled = [...partners, ...partners];

  return (
    <section className="pb-16 overflow-hidden">
      <div className="container-wide mb-10 text-center">
        <ScrollReveal direction="up">
          <p className="text-xs tracking-[0.2em] font-bold text-accent">TRUSTED BY</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-2">Our Partners & Supporters</h2>
        </ScrollReveal>
      </div>

      <div className="partner-slider">
        <div className="partner-slide-track">
          {doubled.map((p, i) => (
            <div key={i} className="partner-slide flex items-center justify-center">
              <div className="h-16 w-full bg-card border border-border/50 rounded-lg flex items-center justify-center px-3 shadow-sm hover:shadow-card hover:border-primary/30 transition-all duration-300 cursor-default overflow-hidden">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-10 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

