import Image from "next/image";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/8">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between backdrop-blur-md bg-[#050510]/80">
        <a href="#" className="flex items-center gap-2.5">
          <Image
              src="/gaia-icon.png"
              alt="Gaia"
              width={32}
              height={32}
              className="rounded-lg"
            />
          <span className="text-lg font-semibold tracking-tight">Gaia</span>
        </a>

        <div className="hidden sm:flex items-center gap-8 text-sm text-white/60">
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#showcase" className="hover:text-white transition-colors">
            Explore
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </a>
          <a href="/support" className="hover:text-white transition-colors">
            Support
          </a>
        </div>

        <a
          href="https://apps.apple.com/us/app/gaia-star-atlas/id6757340614"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium px-5 py-2 rounded-full bg-white text-[#050510] hover:bg-white/90 transition-colors"
        >
          Download
        </a>
      </div>
    </nav>
  );
}
