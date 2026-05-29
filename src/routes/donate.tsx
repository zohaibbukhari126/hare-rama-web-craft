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
<<<<<<< HEAD

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-sm text-muted-foreground font-semibold">OR PAY ONLINE VIA PAYPAL</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* PayPal Donate Button */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm text-muted-foreground text-center">
              International donors can securely donate using PayPal. Click the button below — you do not need a PayPal account.
            </p>
            {/* PayPal hosted donate button — replace info@hrfpk.org with your verified PayPal business email */}
            <form action="https://www.paypal.com/donate" method="post" target="_blank" className="w-full flex justify-center">
              <input type="hidden" name="business" value="info@hrfpk.org" />
              <input type="hidden" name="item_name" value="Hare Rama Foundation Pakistan — Donation" />
              <input type="hidden" name="currency_code" value="USD" />
              <input type="hidden" name="no_recurring" value="0" />
              <button
                type="submit"
                id="paypal-donate-btn"
                className="inline-flex items-center gap-3 bg-[#0070ba] hover:bg-[#003087] text-white font-bold px-8 py-4 rounded-md shadow-card transition-smooth hover:-translate-y-0.5 hover:shadow-elegant"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.77.77 0 0 1 .757-.645h6.856c2.797 0 4.746.972 5.477 2.808.31.78.404 1.595.283 2.48l-.007.045v.393c-.003 3.097-2.107 4.812-5.918 4.812H9.984a.921.921 0 0 0-.909.78l-.969 6.14a.641.641 0 0 1-.633.54l.603.264zm10.415-12.08c-.024.156-.052.313-.083.473-.797 4.092-3.52 5.508-6.998 5.508H8.997l-1.239 7.864h3.373l.863-5.476a.77.77 0 0 1 .757-.645h1.477c3.098 0 5.523-1.26 6.231-4.899.295-1.509.142-2.77-.968-3.825z" />
                </svg>
                Donate with PayPal
              </button>
            </form>
            <p className="text-xs text-muted-foreground">Secure &amp; encrypted. Powered by PayPal.</p>
          </div>
=======
          <p className="text-xs text-muted-foreground mt-3">Payment integration can be connected via Stripe or local payment gateways.</p>
>>>>>>> c329e96265652163eadee9916e9a7d8dc83da87f
        </div>
        <aside className="lg:col-span-2 bg-primary-deep text-primary-foreground rounded-xl p-8 shadow-elegant">
          <h3 className="text-xl font-bold">Where your donation goes</h3>
          <ul className="mt-5 space-y-4 text-sm opacity-90">
            <li><strong className="text-accent">PKR 2,500</strong> — sponsors one child's school supplies for a year.</li>
            <li><strong className="text-accent">PKR 10,000</strong> — funds vocational training for one young adult.</li>
            <li><strong className="text-accent">PKR 25,000</strong> — supports one woman's micro-enterprise grant.</li>
            <li><strong className="text-accent">PKR 50,000</strong> — delivers emergency relief to a family for one month.</li>
          </ul>
<<<<<<< HEAD
          <div className="mt-8 pt-6 border-t border-white/20">
            <h4 className="font-bold mb-3">Payment Methods Accepted</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>✅ Bank Transfer (PKR)</li>
              <li>✅ PayPal (International / USD)</li>
              <li>✅ Cash at Office</li>
            </ul>
          </div>
=======
>>>>>>> c329e96265652163eadee9916e9a7d8dc83da87f
        </aside>
      </div>
    </PageShell>
  );
}