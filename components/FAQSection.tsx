"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface FAQSectionProps {
  id?: string;
}

const FAQSection = ({ id }: FAQSectionProps) => {
  const handleCtaClick = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-4 bg-white" id={id}>
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">
          Frequently Asked Questions
        </h2>

        <Accordion
          type="single"
          collapsible
          className="bg-white  text-black rounded-xl shadow-lg "
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <span className="text-left font-medium text-base">
                What if I have zero experience?{" "}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p>
                That’s exactly why this program exists. We’ll make you a
                pro-copywriter from scratch in no time.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <span className="text-left font-medium text-base">
                How long will it take before I start making real money?{" "}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p>
                As fast as you can, yes exactly what i said. Many students land
                their first paying clients within a few months after their
                program.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <span className="text-left font-medium text-base">
                How do I know what copywriting niche to focus on?{" "}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p>
                Don’t fret, we’ve got you. We’ll address that during the course.
                After this course this won’t even be a question.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <span className="text-left font-medium text-base ">
                Will this work for my specific industry?
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p>
                Yes! The principles and techniques we teach are universal and
                can be applied to any industry. We have students successfully
                using our methods in health and wellness, e-commerce, B2B,
                coaching, real estate, and many other fields.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <span className="text-left font-medium text-base">
                Will this work if I’m not a great writer{" "}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p>
                Copywriting isn’t about fancy words. It’s about using words to
                sell, and we’ll teach you all about that.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <span className="text-left font-medium text-base">
                How do I know this isn’t another one of those scam courses{" "}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p>
                Coach Phoebe founded WordInk in 2023 to help struggling and
                aspiring copywriters learn the right way. Since then, She has
                trained 300+ successful copywriters out there today. If that
                sounds like a scam then it’s not too late to leave now.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-xl mb-6 text-black">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           
            <Button
              onClick={handleCtaClick}
              size='lg'
              className="bg-[#F97316] hover:bg-[#E86305] text-white"
            >
              Enroll Now 
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
