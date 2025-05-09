import CountdownTimer from "@/components/CountdownTimer";
import DesiredLifeSection from "@/components/DesiredLife";
import Everyone from "@/components/Everyone";
import FAQSection from "@/components/FAQSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import Instructors from "@/components/Instructors";
import IntersectingSection from "@/components/IntersectingSection";
import Mentorship from "@/components/Mentorship";
import NotMassMarketSection from "@/components/NotMassMarketSection";
import PricingPlans from "@/components/PricingPlans";
import Problem from "@/components/Problem";
import ProblemSection from "@/components/ProblemSection";
import ProgramIntro from "@/components/ProgramIntro";
import ProgramSteps from "@/components/ProgramSteps";
import StudentWorkSection from "@/components/StudentWorkSection";
import Testimonial from "@/components/Testimonial";
import ScrollToTop from "@/components/ui/scrollUp";
import WaitlistCountdown from "@/components/waitlist";
import { toast } from "react-toastify";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HeroSection />

      <ProblemSection />
      <Testimonial />
      <DesiredLifeSection />
      <ProgramIntro />
      <Testimonial />
      <Mentorship />
      <ProgramSteps />
      <Features />
      <PricingPlans id="pricing" />
      <Testimonial />
      <NotMassMarketSection />

      <Instructors id="instructors" />

      <StudentWorkSection id="students" />
      <FAQSection id="faq" />
      <Everyone />

      <Footer />
      <ScrollToTop />
    </main>
  );
}
