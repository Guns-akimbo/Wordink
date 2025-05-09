"use client";
import { Button } from "@/components/ui/button";

const NotMassMarketSection = () => {
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
    <section className="py-16 px-4 bg-black text-white">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          This is NOT a "Mass Market" Course
        </h2>
        <p className="text-xl mb-8">
          Once spots fill up, enrollment closes. This means you’d have to keep
          your dreams of being a pro-copywriter on hold for a while and possibly
          at a higher price when another mentorship opportunity like this shows
          up.
        </p>
        <p className="text-xl mb-8">
          You don’t want that, that’s why you need to seize this opportunity
          like your life depends on it ( Technically your dreams do) and take
          action NOW!
        </p>
        <Button
          onClick={onCtaClick}
          size="lg"
          className="bg-[#F97316] hover:bg-[#E86305] text-white px-5 py-5 text-sm rounded-md"
        >
          SECURE YOUR SPOT NOW
        </Button>
      </div>
    </section>
  );
};

export default NotMassMarketSection;
