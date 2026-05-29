import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media Center | Hare Rama Foundation Pakistan" },
      { name: "description", content: "News, stories and press releases from Hare Rama Foundation Pakistan." },
      { property: "og:title", content: "Media Center" },
      { property: "og:description", content: "Latest news, stories and press releases." },
    ],
    links: [{ rel: "canonical", href: "/media" }],
  }),
  component: MediaPage,
});

const items = [
  { img: news1, date: "May 10, 2024", title: "Flood Relief Operations in Southern Punjab", body: "Our teams delivered food, shelter and medical aid to over 12,000 families affected by recent floods." },
  { img: news2, date: "April 28, 2024", title: "Women Leadership Training Workshop", body: "A two-day workshop trained 80 women community leaders in advocacy, governance and entrepreneurship." },
  { img: news3, date: "April 15, 2024", title: "New Community Learning Center Inaugurated", body: "Our 200th learning center opened in rural Sindh, serving 250 out-of-school children." },
];

function MediaPage() {
  return (
    <PageShell eyebrow="MEDIA CENTER" title="Latest News & Updates">
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((n) => (
          <article key={n.title} className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-smooth">
            <div className="h-52 overflow-hidden">
              <img src={n.img} alt={n.title} width={768} height={512} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              <div className="text-xs text-accent font-semibold">{n.date}</div>
              <h3 className="font-bold text-lg text-foreground mt-2">{n.title}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{n.body}</p>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}