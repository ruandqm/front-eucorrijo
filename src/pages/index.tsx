import { Footer } from "@/components/Footer/Footer";
import { HowWorksSection } from "@/components/PrivateComponents/LandingPageComponents/HowWorksSection/HowWorksSection";
import { IsFreeSection } from "@/components/PrivateComponents/LandingPageComponents/IsFreeSection/IsFreeSection";
import { LandingHeader } from "@/components/PrivateComponents/LandingPageComponents/LandingHeader/LandingHeader";
import { LandingHero } from "@/components/PrivateComponents/LandingPageComponents/LandingHero/LandingHero";

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
