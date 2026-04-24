import AboultSection from "@/components/AboultSection";
import AreasSection from "@/components/AreasSection";
import BodyPsychologySection from "@/components/BodyPsychologySection";
import BraziliansAbroadSection from "@/components/BraziliansAbroadSection";
import ContactSection from "@/components/ContactSection";
import HomeSection from "@/components/HomeSection";
import TherapeuticProcessSection from "@/components/TherapeuticProcessSection";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <AboultSection />
      <AreasSection />
      <TherapeuticProcessSection />
      <BodyPsychologySection />
      <BraziliansAbroadSection />
      {/* <ClinicSection /> */}
      <ContactSection />
    </main>
  );
}
