import React from "react";
import CountdownTimer from "./CountdownTimer";
import { Button } from "./ui/button";

const WaitlistCountdown = () => {
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
    <div className="flex flex-col lg:flex-row items-center mt-4  gap-6 lg:gap-40 ">
      <CountdownTimer />
      <Button
        onClick={onCtaClick}
        size="lg"
        className="bg-[#F97316]  text-white text-base h-[60px] w-[90%] laptop:w-[150px]"
      >
        Enroll Now
      </Button>
    </div>
  );
};

export default WaitlistCountdown;
