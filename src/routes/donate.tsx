import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Heart } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

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

  const display =
    selected === "custom"
      ? custom
        ? Number(custom).toLocaleString()
        : ""
      : selected.toLocaleString();

  return (
    <PageShell
      eyebrow="SUPPORT OUR CAUSE"
      title="Donate Today"
      intro="Every contribution — large or small — helps us deliver education, training, women's empowerment and emergency relief where it's needed most."
    >
      <div className="grid lg:grid-cols-5 gap-10">
        {/* Left: donation form */}
        <div className="lg:col-span-3 bg-card rounded-xl p-8 shadow-card border border-border/30">
          <h2 className="text-xl font-bold text-foreground">Choose an amount (PKR)</h2>
          
          {/* Springy Interactive Amount buttons */}
          <div className="mt-5 grid grid-cols-3 gap-3">
            {amounts.map((a) => (
              <motion.button
                key={a}
                type="button"
                onClick={() => setSelected(a)}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 450, damping: 15 }}
                className={`py-3 rounded-md font-bold border-2 transition-all cursor-pointer ${
                  selected === a
                    ? "border-accent bg-accent text-accent-foreground shadow-md"
                    : "border-border bg-background hover:border-accent"
                }`}
              >
                {a.toLocaleString()}
              </motion.button>
            ))}
          </div>

          <div className="mt-6 relative">
            <label htmlFor="custom-amount-input" className="text-sm font-semibold text-foreground">
              Or enter a custom amount
            </label>
            <div className="relative mt-2">
              <input
                id="custom-amount-input"
                type="number"
                value={custom}
                onChange={(e) => {
                  setCustom(e.target.value);
                  setSelected("custom");
                }}
                placeholder="Custom amount in PKR"
                className="w-full px-4 py-3 rounded-md border-2 border-border focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all duration-300 bg-background text-sm md:text-base"
              />
            </div>
          </div>

          <motion.button
            type="button"
            whileHover={{ scale: 1.01, y: -2 }}
            whileTap={{ scale: 0.99 }}
            className="mt-6 w-full inline-flex justify-center items-center gap-2 bg-gradient-accent text-accent-foreground font-bold px-6 py-4 rounded-md shadow-card hover:shadow-elegant transition-all cursor-pointer"
          >
            DONATE {display} PKR <Heart className="h-4 w-4 fill-current animate-pulse" />
          </motion.button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground font-bold tracking-wider">
              OR PAY ONLINE VIA PAYPAL
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* PayPal Donate Button */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-xs md:text-sm text-muted-foreground text-center">
              International donors can securely donate using PayPal. You do not
              need a PayPal account.
            </p>
            <form
              action="https://www.paypal.com/donate"
              method="post"
              target="_blank"
              className="w-full flex justify-center"
            >
              <input type="hidden" name="business" value="info@hrfpk.org" />
              <input
                type="hidden"
                name="item_name"
                value="Hare Rama Foundation Pakistan Donation"
              />
              <input type="hidden" name="currency_code" value="USD" />
              <input type="hidden" name="no_recurring" value="0" />
              <motion.button
                type="submit"
                id="paypal-donate-btn"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-[#0070ba] hover:bg-[#003087] text-white font-bold px-8 py-3.5 rounded-md shadow-card transition-all cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.77.77 0 0 1 .757-.645h6.856c2.797 0 4.746.972 5.477 2.808.31.78.404 1.595.283 2.48l-.007.045v.393c-.003 3.097-2.107 4.812-5.918 4.812H9.984a.921.921 0 0 0-.909.78l-.969 6.14a.641.641 0 0 1-.633.54l.603.264zm10.415-12.08c-.024.156-.052.313-.083.473-.797 4.092-3.52 5.508-6.998 5.508H8.997l-1.239 7.864h3.373l.863-5.476a.77.77 0 0 1 .757-.645h1.477c3.098 0 5.523-1.26 6.231-4.899.295-1.509.142-2.77-.968-3.825z" />
                </svg>
                Donate with PayPal
              </motion.button>
            </form>
            <p className="text-[10px] text-muted-foreground">
              Secure &amp; encrypted. Powered by PayPal.
            </p>
          </div>
        </div>

        {/* Right: sidebar */}
        <aside className="lg:col-span-2 bg-primary-deep text-primary-foreground rounded-xl p-8 shadow-elegant flex flex-col justify-between">
          <div>
            {/* Animated Campaign Progress Bar */}
            <div className="mb-8 bg-white/10 rounded-lg p-5 border border-white/15">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-accent">
                <span>Campaign Progress</span>
                <span>72.5% Funded</span>
              </div>
              <div className="h-3 w-full bg-white/20 rounded-full mt-2.5 overflow-hidden">
                <motion.div
                  className="h-full bg-accent rounded-full origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 0.725 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <div className="flex justify-between text-xs font-extrabold mt-3.5">
                <span>PKR 1,450,000 <span className="text-[10px] font-normal opacity-85">raised</span></span>
                <span>PKR 2,000,000 <span className="text-[10px] font-normal opacity-85">goal</span></span>
              </div>
            </div>

            <h3 className="text-xl font-bold">Where your donation goes</h3>
            <ul className="mt-5 space-y-4 text-sm opacity-90">
              <li>
                <strong className="text-accent">PKR 2,500</strong> — sponsors one
                child&apos;s school supplies for a year.
              </li>
              <li>
                <strong className="text-accent">PKR 10,000</strong> — funds
                vocational training for one young adult.
              </li>
              <li>
                <strong className="text-accent">PKR 25,000</strong> — supports one
                woman&apos;s micro-enterprise grant.
              </li>
              <li>
                <strong className="text-accent">PKR 50,000</strong> — delivers
                emergency relief to a family for one month.
              </li>
            </ul>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/20">
            <h4 className="font-bold mb-3 text-sm">Payment Methods Accepted</h4>
            <ul className="space-y-2 text-xs opacity-90">
              <li>Bank Transfer (PKR)</li>
              <li>PayPal (International / USD)</li>
              <li>Cash at Office</li>
            </ul>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}