import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Heart, Facebook, Instagram, Youtube, Linkedin, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/programs", label: "Programs" },
  { to: "/advocacy", label: "Advocacy" },
  { to: "/media", label: "Media Center" },
  { to: "/get-involved", label: "Get Involved" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const { scrollYProgress } = useScroll();

  // Handle scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync and load theme from localStorage or system setting
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && systemDark)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      {/* Scroll Progress Bar at the top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-accent z-[60] origin-left pointer-events-none"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-lg border-border/80 shadow-md py-1"
            : "bg-background/95 backdrop-blur-sm border-border py-0"
        }`}
        role="banner"
      >
        {/* Top bar with socials */}
        <div className="bg-primary-deep text-primary-foreground text-xs">
          <div className="container-wide flex items-center justify-between py-1.5 md:py-2">
            <span className="opacity-90">Welcome to Hare Rama Foundation Pakistan</span>
            <div className="hidden md:flex items-center gap-4 opacity-90" aria-label="Social media channels">
              <a
                href="https://www.facebook.com/hareramafoundation/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit our Facebook page in a new window"
                className="hover:text-accent transition-smooth"
              >
                <Facebook className="h-3.5 w-3.5" />
              </a>
              <a href="#" aria-label="Visit our Instagram page" className="hover:text-accent transition-smooth">
                <Instagram className="h-3.5 w-3.5" />
              </a>
              <a href="#" aria-label="Visit our YouTube channel" className="hover:text-accent transition-smooth">
                <Youtube className="h-3.5 w-3.5" />
              </a>
              <a href="#" aria-label="Visit our LinkedIn professional page" className="hover:text-accent transition-smooth">
                <Linkedin className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Main header block */}
        <div className="container-wide flex items-center justify-between py-2 md:py-3">
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="Go to Hare Rama Foundation Pakistan home page"
          >
            <img
              src={logo}
              alt="Hare Rama Foundation Pakistan logo"
              width={48}
              height={48}
              className="h-11 w-11 md:h-12 md:w-12 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="leading-tight">
              <div className="font-extrabold text-primary text-sm sm:text-base md:text-lg tracking-tight">HARE RAMA</div>
              <div className="text-[9px] sm:text-[10px] md:text-xs font-semibold text-foreground/80 tracking-[0.18em]">FOUNDATION PAKISTAN</div>
              <div className="text-[9px] md:text-[10px] text-accent italic">Serving Humanity</div>
            </div>
          </Link>

          {/* Desktop Nav Links with smooth underlines sliding */}
          <nav className="hidden lg:flex items-center gap-7" role="navigation" aria-label="Main navigation menu">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="relative py-2 text-sm font-semibold text-foreground/70 hover:text-primary transition-colors duration-300 [&.active]:text-accent"
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{n.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        aria-hidden="true"
                      />
                    )}
                  </>
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/donate"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-accent text-accent-foreground font-bold px-5 py-2.5 rounded-md shadow-card hover:shadow-elegant hover:-translate-y-0.5 transition-smooth"
              aria-label="Make a donation to Hare Rama Foundation"
            >
              DONATE NOW <Heart className="h-4 w-4 fill-current animate-pulse" />
            </Link>

            {/* Premium springy Theme toggler */}
            <motion.button
              type="button"
              onClick={toggleTheme}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              aria-label={theme === "light" ? "Switch color mode to dark theme" : "Switch color mode to light theme"}
              className="p-2.5 rounded-md bg-secondary text-foreground hover:bg-secondary/80 border border-border transition-colors cursor-pointer"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ rotate: -30, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 30, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4 text-accent" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <button
              type="button"
              className="lg:hidden p-2 text-foreground/80 hover:text-primary transition-colors cursor-pointer"
              onClick={() => setOpen(!open)}
              aria-label="Toggle mobile navigation menu"
              aria-expanded={open}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={open ? "close" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden border-t border-border bg-background overflow-hidden"
              aria-label="Mobile navigation"
            >
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
                  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
                className="container-wide flex flex-col py-3 gap-1"
              >
                {nav.map((n) => (
                  <motion.div
                    key={n.to}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -15 }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <Link
                      to={n.to}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-sm font-semibold text-foreground/80 rounded hover:bg-secondary/40 px-2 transition-colors [&.active]:text-accent"
                    >
                      {n.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  className="px-2 pt-2"
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 15 }
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <Link
                    to="/donate"
                    onClick={() => setOpen(false)}
                    className="w-full inline-flex justify-center items-center gap-2 bg-gradient-accent text-accent-foreground font-bold px-5 py-3 rounded-md shadow-card"
                    aria-label="Make a donation to Hare Rama Foundation"
                  >
                    DONATE NOW <Heart className="h-4 w-4 fill-current" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}