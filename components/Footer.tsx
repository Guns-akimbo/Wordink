'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CountdownTimer from "./CountdownTimer";



const Footer = () => {

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onCtaClick = () => {
    scrollToElement("pricing");
  };
  return (
    <section className="py-20 px-4  bg-black footer">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Ready To Transform Your Copywriting Skills?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join our community of successful copywriters and start creating
          compelling content that converts.
        </p>
        <div className="mb-8">
          <CountdownTimer />
        </div>
        <Button
          onClick={onCtaClick}
          size="lg"
          className="bg-[#F97316] hover:bg-[#E86305] text-white px-8 py-6 text-lg rounded-xl"
        >
          Enroll Now 
        </Button>
        <p className="mt-6 text-sm">
          Limited spots available. Enrollment closes soon!
        </p>
      </div>
    </section>
  );
};

export default Footer;
