const freePlan = {
  name: "Gaia Free",
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
};

const proPlan = {
  name: "Gaia Pro",
  features: [
    "Augmented Reality sky map",
    "All 88 constellations",
    "Complete deep sky catalog",
    "AI assistant for sky insights",
    "Personalized gear recommendations",
    "AR overlay controls",
    "Priority updates",
  ],
};

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

        <div className="glass-card glow-border rounded-2xl p-8 sm:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Free */}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-lg font-semibold mb-1">{freePlan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">Free</span>
              </div>
              <ul className="space-y-3">
                {freePlan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#6b7280"
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
            </div>

            {/* Pro */}
            <div className="rounded-xl border border-indigo-500/30 bg-indigo-500/[0.04] p-6">
              <h3 className="text-lg font-semibold mb-1">{proPlan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$4.99</span>
                <span className="text-white/40">/month</span>
                <p className="text-sm text-white/40 mt-1">or $29.99/year</p>
              </div>
              <p className="text-xs text-white/40 mb-4 uppercase tracking-wide font-medium">
                Everything in Free, plus:
              </p>
              <ul className="space-y-3">
                {proPlan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#818cf8"
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
            </div>
          </div>

          {/* Single CTA */}
          <div className="mt-10 pt-8 border-t border-white/8 text-center">
            <a
              href="https://apps.apple.com/us/app/gaia-star-atlas/id6757340614"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-[#050510] font-semibold text-base hover:bg-white/90 transition-colors"
            >
              <svg
                width="20"
                height="24"
                viewBox="0 0 814 1000"
                fill="currentColor"
              >
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57.4-155.5-127.4c-58.3-81.8-105.6-209.6-105.6-330.5 0-194.3 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.5zm-169.5-145.7c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 103.5-30.4 135.5-71.3z" />
              </svg>
              Download Gaia - Star Atlas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
