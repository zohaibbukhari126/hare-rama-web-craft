import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Heart } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate | Hare Rama Foundation Pakistan" },
      { name: "description", content: "Donate to Hare Rama Foundation Pakistan and help us empower marginalized communities through education, livelihoods and relief." },
      { property: "og:title", content: "Donate" },
      { property: "og:description", content: "Your donation brings hope and changes lives." },
    ],
    links: [{ rel: "canonical", href: "/donate" }],
  }),
  component: DonatePage,
});

const amounts = [1000, 2500, 5000, 10000, 25000, 50000];

function DonatePage() {
  const [selected, setSelected] = useState<number | "custom">(5000);
  const [custom, setCustom] = useState("");

  const display = selected === "custom" ? (custom ? Number(custom).toLocaleString() : "") : selected.toLocaleString();

  return (
    <PageShell eyebrow="SUPPORT OUR CAUSE" title="Donate Today" intro="Every contribution — large or small — helps us deliver education, training, women's empowerment and emergency relief where it's needed most.">
      <div className="grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 bg-card rounded-xl p-8 shadow-card">
          <h2 className="text-xl font-bold text-foreground">Choose an amount (PKR)</h2>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {amounts.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => setSelected(a)}
                className={`py-3 rounded-md font-bold border-2 transition-smooth ${selected === a ? "border-accent bg-accent text-accent-foreground" : "border-border bg-background hover:border-accent"}`}
              >
                {a.toLocaleString()}
              </button>
            ))}
          </div>
          <div className="mt-4">
            <label className="text-sm font-semibold text-foreground">Or enter a custom amount</label>
            <input
              type="number"
              value={custom}
              onChange={(e) => { setCustom(e.target.value); setSelected("custom"); }}
              placeholder="Custom amount in PKR"
              className="mt-2 w-full px-4 py-3 rounded-md border-2 border-border focus:outline-none focus:border-accent transition-smooth"
            />
          </div>
          <button type="button" className="mt-6 w-full inline-flex justify-center items-center gap-2 bg-gradient-accent text-accent-foreground font-bold px-6 py-4 rounded-md shadow-card hover:shadow-elegant hover:-translate-y-0.5 transition-smooth">
            DONATE {display} PKR <Heart className="h-4 w-4 fill-current" />
          </button>
          <p className="text-xs text-muted-foreground mt-3">Payment integration can be connected via Stripe or local payment gateways.</p>
        </div>
        <aside className="lg:col-span-2 bg-primary-deep text-primary-foreground rounded-xl p-8 shadow-elegant">
          <h3 className="text-xl font-bold">Where your donation goes</h3>
          <ul className="mt-5 space-y-4 text-sm opacity-90">
            <li><strong className="text-accent">PKR 2,500</strong> — sponsors one child's school supplies for a year.</li>
            <li><strong className="text-accent">PKR 10,000</strong> — funds vocational training for one young adult.</li>
            <li><strong className="text-accent">PKR 25,000</strong> — supports one woman's micro-enterprise grant.</li>
            <li><strong className="text-accent">PKR 50,000</strong> — delivers emergency relief to a family for one month.</li>
          </ul>
        </aside>
      </div>
    </PageShell>
  );
}