import { StarField } from "./StarField";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <StarField />
      <Navbar />
      <main className="relative z-10 px-6 pt-32 pb-24">
        <div className="mx-auto max-w-3xl">
          <div className="glass-card rounded-2xl p-8 sm:p-12">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
