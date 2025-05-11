"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Shield } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface PricingPlansProps {
  id?: string;
}

const PricingPlans = ({ id }: PricingPlansProps) => {
  const isMobile = useIsMobile();

  const plans = [
    {
      name: "Learn-On-Your-Own",
      description: "Copywriting Package",
      monthlyPrice: "20,000 ",
      features: [
        "Recorded live training session from past classes",
        "Access to 100+ books and swipe files.",
      ],
      ctaText: "Enroll Now",
      ctaPrice: "15,000",
      primary: true,
      paymentLink:
        "https://paystack.com/buy/wordink-self-paced-copywriting-course",
    },
    {
      name: "Learn-With-Me",
      description: "Copywriting Package",
      monthlyPrice: "40,000",
      features: [
        "Recorded live training session from past classes",
        "Access to 100+ books and swipe files.",
        "20-Day LinkedIn Copywriting Challenge",
        "Exclusive Community Access",
        "Bi-weekly Live Support Classes With Instructors",
        "Certificate of Completion",
        "A chance to compete for a 6-month Internship at WordInk",
      ],
      ctaText: "Enroll Now",
      ctaPrice: "30,000",
      popular: true,
      primary: true,
      paymentLink:
        "https://paystack.com/buy/wordink-copywriting-course-learn-with-me-package",
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-white to-gray-50"
      id={id}
    >
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-4 text-black">
            Ready To Start Living The Copywriting Dream
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Join our waitlist today and be among the first to enroll when doors
            open
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`w-full max-w-md relative ${
                plan.popular
                  ? "border-2 border-[#F97316] shadow-xl md:transform md:-translate-y-4 z-10"
                  : "border-2 border-gray-200 shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-[#F97316] text-white px-4 py-1 text-sm rounded-full font-medium">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <CardHeader className="pb-3 laptop:pb-8 text-black mt-4">
                <CardTitle className="text-2xl sm:text-3xl md:text-4xl">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base mt-1">
                  {plan.description}
                </CardDescription>
                <div className="mt-2 sm:mt-4 space-x-2">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold line-through  ">
                    ₦{plan.monthlyPrice}
                  </span>
                  <span className="text-xl sm:text-xl md:text-xl font-bold text-[#F97316]   ">
                    ₦{plan.ctaPrice}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="h-auto sm:h-[280px] md:h-[320px] overflow-y-auto scrollbar-hide text-black">
                <ul className="space-y-2 sm:space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle
                        className="text-[#F97316] shrink-0 mt-1"
                        size={isMobile ? 16 : 18}
                      />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-2 md:pt-4 flex flex-col space-y-4">
                <p className="text-[#F97316] text-center">
                  {" "}
                  Use discount code{" "}
                  <span className="text-black/70 font-bold ">
                    WORDINKWAITLIST{" "}
                  </span>{" "}
                  at checkout for 25% off
                </p>
                <Button
                  className={`w-full cursor-pointer py-3 md:py-4 text-sm sm:text-base ${
                    plan.primary
                      ? "bg-[#F97316] hover:bg-[#E86305] text-white"
                      : "bg-gray-800 hover:bg-black text-white"
                  }`}
                  onClick={() => {
                    if (plan.paymentLink) {
                      window.open(plan.paymentLink, "_blank");
                    }
                  }}
                >
                  {plan.ctaText} <span className="ml-1">₦{plan.ctaPrice}</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 flex items-center justify-center text-gray-600 max-w-3xl mx-auto">
          <Shield className="text-[#F97316] mr-2" size={20} />
          <p className="text-sm sm:text-base">
            Join our waitlist today to secure a 25% discount when enrollment
            opens. Limited spots available!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
