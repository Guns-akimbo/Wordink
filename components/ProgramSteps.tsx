"use client";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Pen, Briefcase, DollarSign, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ProgramStep {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ProgramStepsProps {
  id?: string;
}

const ProgramSteps = ({ id }: ProgramStepsProps) => {
  const isMobile = useIsMobile();

  const steps: ProgramStep[] = [
    {
      number: 1,
      title: "Master Copywriting Fundamentals",
      description:
        "You'll learn the psychology of persuasion, what makes people buy, and high-income writing techniques that SELL.",
      icon: <FileText size={isMobile ? 20 : 24} />,
    },
    {
      number: 2,
      title: "Write Like A Pro (Even If You've Never Written Before)",
      description:
        "You'll get proven frameworks and templates for high-converting copy.",
      icon: <Pen size={isMobile ? 20 : 24} />,
    },
    {
      number: 3,
      title: "Build Your Portfolio",
      description:
        "You'll create compelling work samples that show your expertise to premium clients.",
      icon: <Briefcase size={isMobile ? 20 : 24} />,
    },
    {
      number: 4,
      title: "Land Clients & Start Making Money",
      description:
        "You'll learn how to attract high-paying clients (without begging for work).",
      icon: <DollarSign size={isMobile ? 20 : 24} />,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-white" id={id}>
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">
            How The WordInk Copywriting Program Will Take You From Zero To
            Highly-Paid And In-Demand Copywriter
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 xl:gap-10 text-black cursor-pointer">
            {steps.map((step, index) => (
              <Card
                key={step.number}
                className={`group overflow-hidden border hover:border-[#F97316] transition-all duration-300 ${
                  index % 2 === 0 ? "md:transform md:translate-y-4" : ""
                }`}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col h-full">
                    <div className="bg-[#FDE1D3] p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-[#F97316] text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-bold">
                          {step.number}
                        </div>
                        <h3 className="font-bold text-base sm:text-lg md:text-xl">
                          {step.title}
                        </h3>
                      </div>
                      <div className="text-[#F97316]">{step.icon}</div>
                    </div>
                    <div className="p-5 sm:p-6 flex-grow">
                      <p className="text-sm sm:text-base">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSteps;
