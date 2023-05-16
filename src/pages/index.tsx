import { Footer } from "@/components/Footer/Footer";
import { HowWorksSection } from "@/components/LandingPageComponents/HowWorksSection/HowWorksSection";
import { IsFreeSection } from "@/components/LandingPageComponents/IsFreeSection/IsFreeSection";
import { LandingHeader } from "@/components/LandingPageComponents/LandingHeader/LandingHeader";
import { LandingHero } from "@/components/LandingPageComponents/LandingHero/LandingHero";

export default function Home() {
  return (
    <>
      <LandingHeader />
      <LandingHero />
      <main className="container justify-center m-auto">
        <HowWorksSection />
        <IsFreeSection />
      </main>

      <Footer />
    </>
  )
}
