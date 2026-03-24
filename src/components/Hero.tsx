export function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-40 pb-24">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available on iPhone, iPad, Mac &amp; Vision Pro
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.1] max-w-3xl mx-auto">
          Your guide to
          <br />
          <span className="gradient-text">the stars</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white/60 max-w-xl mx-auto leading-relaxed">
          A powerful and beautifully designed stargazing atlas that helps you
          explore the night sky, understand what you&apos;re seeing, and plan
          unforgettable sessions under the stars.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="https://apps.apple.com/us/app/gaia-star-atlas/id6757340614"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-[#050510] font-semibold text-base hover:bg-white/90 transition-colors"
          >
            <svg
              width="20"
              height="24"
              viewBox="0 0 814 1000"
              fill="currentColor"
            >
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57.4-155.5-127.4c-58.3-81.8-105.6-209.6-105.6-330.5 0-194.3 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.5zm-169.5-145.7c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 103.5-30.4 135.5-71.3z" />
            </svg>
            Download for Free
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white/80 font-medium text-base hover:bg-white/5 transition-colors"
          >
            Explore Features
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
