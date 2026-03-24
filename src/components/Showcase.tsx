import Image from "next/image";

export function Showcase() {
  return (
    <section id="showcase" className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="glass-card glow-border rounded-3xl p-8 sm:p-12 overflow-hidden relative">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-xs text-violet-300 font-medium mb-6">
                Gaia Pro
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Unlock the
                <br />
                <span className="gradient-text">full universe</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                Take your stargazing to the next level with augmented reality,
                AI-powered insights, all 88 constellations, and the complete
                deep sky catalog.
              </p>

              <div className="space-y-4">
                {[
                  "Augmented Reality sky map with overlay controls",
                  "All 88 constellations with detailed information",
                  "Complete deep sky object catalog",
                  "AI assistant for personalized sky insights",
                  "Gear recommendations for your setup",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shrink-0">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-sm text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-64 h-[500px] rounded-[3rem] border-2 border-white/10 bg-gradient-to-b from-white/5 to-transparent p-2 shadow-2xl">
                <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-b from-[#0a0a2e] to-[#050510] flex flex-col items-center justify-center overflow-hidden relative">
                  {/* Phone mockup content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-indigo-500/30 to-violet-500/30 blur-[40px]" />
                  </div>
                  <div className="relative space-y-4 text-center px-6">
                    <Image
                      src="/gaia-icon.png"
                      alt="Gaia - Star Atlas"
                      width={64}
                      height={64}
                      className="rounded-2xl mx-auto"
                    />
                    <p className="text-sm font-semibold">Gaia - Star Atlas</p>
                    <p className="text-xs text-white/40">
                      Your guide to the stars
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
