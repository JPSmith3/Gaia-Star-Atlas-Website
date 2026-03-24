import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Showcase } from "@/components/Showcase";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { StarField } from "@/components/StarField";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <StarField />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
