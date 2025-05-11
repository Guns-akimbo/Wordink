import DesiredLifeSection from "@/components/DesiredLife";
import Everyone from "@/components/Everyone";
import FAQSection from "@/components/FAQSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import Instructors from "@/components/Instructors";
import Mentorship from "@/components/Mentorship";
import NotMassMarketSection from "@/components/NotMassMarketSection";
import PricingPlans from "@/components/PricingPlans";
import ProblemSection from "@/components/ProblemSection";
import ProgramIntro from "@/components/ProgramIntro";
import ProgramSteps from "@/components/ProgramSteps";
import StudentWorkSection from "@/components/StudentWorkSection";
import Testimonial from "@/components/Testimonial";
import TestimonialSection from "@/components/TestimonialSection";
import ScrollToTop from "@/components/ui/scrollUp";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HeroSection />

      <ProblemSection />
      <TestimonialSection
        highlightColor="white"
        testimonials={[
          {
            name: "Derekcia Onime",
            role: "Alumni",
            image: "/derek.jpeg",
            quote:
              "It's such an insightful course, and I'm learning a lot.There's something this course reveals that I don't think others might have, which is teaching based off-experience.Love it so far!",
            stars: 5,
          },
          {
            name: "Jonathan Okang",
            role: "Alumni",
            image: "/john.jpeg",

            quote:
              "Thank you for teaching, coaching and mentoring me in copywriting. My bank account just dey receive credit alerts this year. I'm truly grateful Coach.",
            stars: 5,
          },
          {
            name: "Presh",
            role: "Alumni",
            image: "/presh.jpeg",

            quote:
              "Looking back to when I knew nothing and now, I just smile because I clearly recognise how much your training has changed my life.Thank you for your abundance of knowledge.",
            stars: 5,
          },
        ]}
      />
      <DesiredLifeSection />
      <ProgramIntro />
      <TestimonialSection
        highlightColor="white"
        testimonials={[
          {
            name: "Divine Usenekong",
            role: "Alumni",
            image: "/divine.jpeg",

            quote:
              "Copywriting is a skill I've always wanted to learn, but I had zero trust in 'gurus' or any copywriting programs out there. This is why I always say this program was my game-changer. Is it the projects? The lessons? You mentored me with so much depth and dedication.You're a truly amazing coach; thank you for taking me under your wing.",

            stars: 5,
          },
          {
            name: "Ayoola Adekoya ",
            role: "Alumni",
            image: "/ayoola.jpeg",

            quote:
              "It's funny how I had already paid 25k for a copywriting course previously and it turned out to be a sham.It was the words of encouragement from a friend already reaping the benefits of this class that made me give WordInk a try and honestly, I don't regret a thing.I just got an offer from a Crypto/web3 company to be their Copywriter and I'm so excited",
            stars: 5,
          },
          {
            name: "Princess",
            role: "Alumni",
            image: "/princess.jpeg",

            quote:
              "Coach Phoebe, you're so dear to my heart. Meeting you was surely God's plan. You've touched my life in a way that I can't even express with words.When it comes to coaching copywriting you set the bar. Thank you for your commitment to this purpose, you're truly a rare gem. I'm forever grateful for your impact on my life,You've gained a loyal follower for life.",
            stars: 5,
          },
        ]}
      />
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
