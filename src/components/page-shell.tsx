import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="bg-gradient-primary text-primary-foreground">
        <div className="container-wide py-16 md:py-20">
          {eyebrow && <p className="text-xs tracking-[0.2em] font-bold text-accent">{eyebrow}</p>}
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">{title}</h1>
          {intro && <p className="mt-4 max-w-2xl opacity-90 text-lg leading-relaxed">{intro}</p>}
        </div>
      </section>
      <main className="container-wide py-16">{children}</main>
      <SiteFooter />
    </div>
  );
}