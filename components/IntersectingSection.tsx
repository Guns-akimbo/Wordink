import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const IntersectingSection = () => {
  return (
    <section className="py-16 px-4 bg-black ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl laptop:text-5xl font-bold mb-8 text-white leading-tight">
          Become a <span className="text-[#F97316]">Master copywriter</span>{" "}
          {""}
          <span className="text-[#F97316]"></span>  without spending years
          struggling to find your voice
        </h2>
        <p className="text-xl laptop:text-2xl mb-8 max-w-3xl mx-auto text-white">
          Join hundreds of successful students who have transformed their
          writing and built profitable businesses with our proven system.
        </p>
        <Button
          size="lg"
          className="bg-[#E86305] hover:bg-[#E86305] text-white px-8 py-6 text-lg rounded-xl"
        >
          Get Started Today <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default IntersectingSection;
