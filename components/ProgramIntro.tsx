"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, BookOpen } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ProgramIntroProps {
  id?: string;
  onCtaClick?: () => void;
}

const ProgramIntro = ({ id, onCtaClick }: ProgramIntroProps) => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-[#FFF8E9] to-white" id={id}>
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-[#F97316]/10 text-[#F97316] font-bold text-sm mb-4">
              Transform Your Career
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black">
              Introducing the WORDINK COPYWRITING PROGRAM
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-6 text-gray-700">
              A practical, hands-on program that gives you the skills, strategies and guidance to go from zero experience to a confident, high-paid copywriter.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border-2 border-[#F97316]/20 hover:border-[#F97316] transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-[#F97316]/10 p-3 rounded-full">
                  <Award size={isMobile ? 28 : 32} className="text-[#F97316]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">The Only Training You Need</h3>
                  <p className="text-gray-700">
                    To Understand And Make Money As A Copywriter
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border-2 border-[#F97316]/20 hover:border-[#F97316] transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-[#F97316]/10 p-3 rounded-full">
                  <BookOpen size={isMobile ? 28 : 32} className="text-[#F97316]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Personalized Coaching</h3>
                  <p className="text-gray-700">
                    We don't just teach you copywriting, we train you, coach you, holding your hands every step of the way till you get results.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {onCtaClick && (
            <div className="text-center">
              <Button 
                onClick={onCtaClick}
                size="lg"
                className="bg-[#F97316] hover:bg-[#E86305] text-white px-8 py-6 text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                Join Our Waitlist <ArrowRight className="ml-2" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProgramIntro;