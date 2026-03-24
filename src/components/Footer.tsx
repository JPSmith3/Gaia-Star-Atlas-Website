import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/8 px-6 py-12">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <Image
            src="/gaia-icon.png"
            alt="Gaia"
            width={28}
            height={28}
            className="rounded-md"
          />
          <span className="text-sm font-semibold">Gaia - Star Atlas</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
          <a
            href="/support"
            className="hover:text-white/60 transition-colors"
          >
            Support
          </a>
          <a
            href="/privacy"
            className="hover:text-white/60 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="hover:text-white/60 transition-colors"
          >
            Terms of Use
          </a>
          <a
            href="https://orbitallabs.co"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors"
          >
            Orbital Labs
          </a>
        </div>

        <p className="text-xs text-white/30">
          &copy; 2026 Orbital Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
