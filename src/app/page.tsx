import { AboutSection } from "@/components/sections/AboutSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <SolutionsSection />
      <ProcessSection />
      <ProductsSection />
      <AboutSection />
      <ContactCTA />
    </>
  );
}
