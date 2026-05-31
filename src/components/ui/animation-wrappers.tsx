import { motion, useScroll, useTransform, useMotionValue, useInView, animate } from "framer-motion";
import { type ReactNode, useEffect, useRef, useState } from "react";

/**
 * ScrollReveal: Reveals children elements as they enter the viewport.
 * Supports directional sliding, scaling, custom delay and duration.
 */
export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 30,
  scale = false,
  className = "",
}: {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  scale?: boolean;
  className?: string;
}) {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const initial = {
    opacity: 0,
    ...directions[direction],
    scale: scale ? 0.95 : 1,
  };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * CountUp: Viewport-aware numeric count-up component.
 * Performs at 60 FPS using requestAnimationFrame via Framer Motion's animate.
 */
export function CountUp({
  value,
  duration = 1.8,
  prefix = "",
  suffix = "",
  className = "",
}: {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;

    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1], // easeOutExpo
      onUpdate(latestValue) {
        node.textContent = prefix + Math.floor(latestValue).toLocaleString() + suffix;
      },
    });

    return () => controls.stop();
  }, [inView, value, duration, prefix, suffix]);

  return (
    <span ref={nodeRef} className={className}>
      {prefix}0{suffix}
    </span>
  );
}

/**
 * Parallax: Visual depth effect adjusting Y position based on viewport scroll progress.
 */
export function Parallax({
  children,
  offset = 40,
  className = "",
}: {
  children: ReactNode;
  offset?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * FloatingShapes: Interactive floating ambient vector shapes for backdrops.
 * Shapes float continuously and drift subtly in response to cursor movements.
 */
export function FloatingShapes() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatX1 = useMotionValue(0);
  const floatY1 = useMotionValue(0);
  const floatX2 = useMotionValue(0);
  const floatY2 = useMotionValue(0);

  useEffect(() => {
    floatX1.set(mousePosition.x * 30);
    floatY1.set(mousePosition.y * 30);
    floatX2.set(mousePosition.x * -45);
    floatY2.set(mousePosition.y * -45);
  }, [mousePosition, floatX1, floatY1, floatX2, floatY2]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-15">
      {/* Floating Blur Circle 1 */}
      <motion.div
        className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-accent/60 filter blur-3xl"
        style={{ x: floatX1, y: floatY1 }}
        animate={{
          scale: [1, 1.15, 1],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Blur Circle 2 */}
      <motion.div
        className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-primary/40 filter blur-3xl"
        style={{ x: floatX2, y: floatY2 }}
        animate={{
          scale: [1, 1.25, 0.9],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Circle Outline Pattern */}
      <motion.svg
        className="absolute top-[20%] right-[15%] w-36 h-36 text-accent/30"
        viewBox="0 0 100 100"
        style={{ x: floatX1, y: floatY2 }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
      </motion.svg>

      {/* Floating Plus Badges */}
      <motion.div
        className="absolute bottom-[35%] left-[20%] text-primary/40 text-4xl font-light select-none"
        style={{ x: floatX2, y: floatY1 }}
        animate={{
          y: [0, 15, -15, 0],
          rotate: [0, 90, 180, 360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        +
      </motion.div>
    </div>
  );
}

/**
 * HoverCard: Card interactive wrapper providing springy elevation and shadow lift.
 */
export function HoverCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}

/**
 * AnimatedRippleButton: Interactive springy button with active scaling.
 */
export function AnimatedRippleButton({
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`relative overflow-hidden transition-all ${className}`}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 500, damping: 15 }}
    >
      {children}
    </motion.button>
  );
}
