import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/advocacy")({
  head: () => ({
    meta: [
      { title: "Advocacy & Policy | Hare Rama Foundation Pakistan" },
      { name: "description", content: "Our advocacy work — research, policy briefs and grassroots campaigns advancing rights for marginalized communities in Pakistan." },
      { property: "og:title", content: "Advocacy & Policy" },
      { property: "og:description", content: "Advocating for rights and policy change for the marginalized." },
    ],
    links: [{ rel: "canonical", href: "/advocacy" }],
  }),
  component: AdvocacyPage,
});

function AdvocacyPage() {
  return (
    <PageShell eyebrow="ADVOCACY" title="Advocacy & Policy" intro="We work to influence policy and public discourse so that the rights of marginalized people are protected, respected and fulfilled.">
      <div className="max-w-3xl">
        <p className="text-muted-foreground leading-relaxed">
          Our advocacy combines evidence-based research, coalition-building and community-led campaigns. We engage with policymakers, civil society and media to shape inclusive policies on education, gender equality, religious tolerance and climate justice.
        </p>
        <ul className="mt-6 space-y-3 text-muted-foreground">
          <li>• Policy research & briefs on inclusion and minority rights</li>
          <li>• Community-led campaigns on education, gender and climate</li>
          <li>• Coalitions with civil society and academic institutions</li>
          <li>• Engagement with parliamentarians and government ministries</li>
        </ul>
      </div>
    </PageShell>
  );
}