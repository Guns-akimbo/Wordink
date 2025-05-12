'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {  Check } from "lucide-react";

const DesiredLifeSection = () => {
  const handleCtaClick = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-4  text-black">
      <div className="container mx-auto">
        <h2 className="text-3xl laptop:text-5xl font-bold mb-8 text-center">Imagine This… Your Life 60 Days From Now</h2>
        <p className="text-xl max-w-3xl mx-auto text-center mb-12">
          Picture yourself waking up to emails from clients who are eager to pay you $500…$1000…even $5000 for writing words that convert like crazy.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12 text-black">
          <Card className="border-none shadow-lg bg-white ">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Check className="text-[#F97316] mt-1 flex-shrink-0" />
                <p>You set your own rates and say goodbye to low-paying work.</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Check className="text-[#F97316] mt-1 flex-shrink-0" />
                <p>You're free from the shackles of 9-5. Work from your couch, beach or anywhere.</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Check className="text-[#F97316] mt-1 flex-shrink-0" />
                <p>You're making tons of money doing what you love, absolute win-win.</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Check className="text-[#F97316] mt-1 flex-shrink-0" />
                <p>You close sales with over 80% of your prospects without the help of an outrageously priced copywriter.</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Button onClick={handleCtaClick} size="lg" className="bg-[#F97316] hover:bg-[#E86305] text-white   laptop:px-8 laptop:py-6  text-sm laptop:text-lg rounded-xl">
            YOU WANT THIS LIFE - ENROLL NOW 
          </Button>
          
          <p className="mt-8 text-xl">
            Sounds too good to be true?
          </p>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
          Well, if you ask me, I'd say you've put in so much effort and it's high time you start getting a lot more out of life.          </p>
          <p className="mt-4 text-lg font-bold">
            Guess what? Today's your lucky day, because your dream life is just in front of you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesiredLifeSection;