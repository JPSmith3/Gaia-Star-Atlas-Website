const plans = [
  {
    name: "Gaia Free",
    price: "Free",
    period: "",
    description: "Everything you need to get started exploring the night sky.",
    features: [
      "Interactive 2D sky map",
      "9,000+ accurately positioned stars",
      "Search stars, planets, Sun & Moon",
      "Moon phases & illumination",
      "Sunrise, sunset & twilight times",
      "30 constellations",
      "Time simulation controls",
      "Basic deep sky objects",
      "GPS-based location",
    ],
    cta: "Download Free",
    highlight: false,
  },
  {
    name: "Gaia Pro",
    price: "$4.99",
    period: "/month",
    description: "Unlock the full power of Gaia with advanced features.",
    features: [
      "Everything in Free, plus:",
      "Augmented Reality sky map",
      "All 88 constellations",
      "Complete deep sky catalog",
      "AI assistant for sky insights",
      "Personalized gear recommendations",
      "AR overlay controls",
      "Priority updates",
    ],
    altPrice: "$29.99/year",
    cta: "Start Pro",
    highlight: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Simple, transparent{" "}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-md mx-auto">
            Start exploring for free. Upgrade when you&apos;re ready for the
            full experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.highlight
                  ? "glass-card glow-border"
                  : "glass-card"
              }`}
            >
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                <p className="text-sm text-white/40">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-white/40">{plan.period}</span>
                )}
                {"altPrice" in plan && plan.altPrice && (
                  <p className="text-sm text-white/40 mt-1">
                    or {plan.altPrice}
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={plan.highlight ? "#818cf8" : "#6b7280"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-white/60">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://apps.apple.com/us/app/gaia-star-atlas/id6757340614"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3 rounded-full font-medium text-sm transition-colors ${
                  plan.highlight
                    ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:opacity-90"
                    : "border border-white/15 text-white/80 hover:bg-white/5"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
