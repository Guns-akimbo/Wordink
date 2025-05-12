"use client";
import FeatureList from "./FeatureList";
import { Button } from "./ui/button";

const Features = () => {
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
    <section className="bg-black/80 py-16 px-4  text-white" id="features">
      <div className="container mx-auto">
        <h2 className="text-3xl laptop:text-6xl  font-bold mb-12 text-[#ec8942] text-center">
          What You’ll Get Inside The WordInk Copywriting Program{" "}
        </h2>
        <FeatureList
          features={[
            {
              description:
                "Exclusive access to pre-recorded live video trainings.",
            },
            {
              description:
                "Personalized Feedback on your copy and Access to 100+ Books and Swipe Files",
            },

            {
              description:
                "6-months internship with WordInk so you can get your hands dirty with live projects.",
            },
            {
              description:
                "	Real-World Assignments & Portfolio Building to attract premium clients",
            },
            {
              description:
                "Lifetime Access To A Private Community; Join a network of 60+ copywriters to connect and grow.",
            },
            {
              description:
                "20-day consistency challenge on LinkedIn to get seen, heard, and hired by your dream clients.",
            },
          ]}
        />
      </div>
      <div className="container mx-auto">
        <h2 className="text-3xl laptop:text-2xl mt-10 text-[#ec8942] font-bold mb-12 text-center">
          Plus These Exclusive Bonuses, YOU won’t want to miss!!{" "}
        </h2>

        <FeatureList
          features={[
            {
              title: "Bonus 1  (₦ 20,000 Value)",
              description: "Certificate of Completion ",
            },
            {
              title: "Bonus 2  (₦ 25,000 Value)",
              description: "Proven Cold Outreach Templates   ",
            },
            {
              title: "Bonus 3  ( ₦ 35,000 Value)",
              description: " Resume Revamp",
            },
          ]}
        />

        <div className="flex items-center justify-center flex-col mt-10">
          <p className="text-base mb-8 laptop:text-2xl text-center">
            Total Bonus Value: ₦80,000 + (At least 25% off) – All included for
            FREE if you Enroll Now!
          </p>
          <p className="text-base mb-8 laptop:text-2xl mx-auto  text-center">
            Huge discount and Early Access If You Join Our Waitlist Now.
          </p>

          <Button
            onClick={onCtaClick}
            size="lg"
            className="bg-[#F97316] cursor-pointer hover:bg-[#E86305] text-white px-5 py-5 text-sm rounded-md"
          >
            Join Our Waitlist
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
