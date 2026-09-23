import CondioNavbar from "@/components/condio/CondioNavbar";
import CondioHeroSlider from "@/components/condio/CondioHeroSlider";
import CondioImageTextBlocks from "@/components/condio/CondioImageTextBlocks";
import CondioFeaturesBoxes from "@/components/condio/CondioFeaturesBoxes";
import CondioWhySection from "@/components/condio/CondioWhySection";
import CondioContactFooter from "@/components/condio/CondioContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-white scroll-smooth text-slate-800 font-sans">
      <CondioNavbar />
      <CondioHeroSlider />           {/* Section 1: Hero */}
      <CondioImageTextBlocks />      {/* Section 2: Tailored Solutions */}
      <CondioFeaturesBoxes />        {/* Section 3: The Pegasus Advantage */}
      <CondioWhySection />           {/* Section 4: Dedicated Support */}
      <CondioContactFooter />        {/* Section 5: Lead Capture */}
    </main>
  );
}
