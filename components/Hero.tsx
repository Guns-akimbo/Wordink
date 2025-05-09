"use client";
import { Button } from "@/components/ui/button";
import WaitlistCountdown from "./waitlist";

const HeroSection = () => {
  return (
    <>
      <section className="relative py-13 overflow-hidden bg-gradient-to-b from-[#F97316] to-[#FFDEE2]">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F97316]/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#F97316]/10 rounded-full -ml-32 -mb-32"></div>
        <div className="absolute top-1/4 left-1/2 w-24 h-24 bg-[#F97316]/20 rounded-full transform -translate-x-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto mb-10"></div>

          <div className="flex flex-col laptop:flex-row items-center justify-between gap-12">
            <div className="laptop:w-3/5 order-2 laptop:order-1">
              <div className="bg-white/60 backdrop-blur-sm p-8 laptop:p-10 rounded-2xl shadow-xl border border-[#F97316]/20">
                <div className="inline-block px-4 py-2 rounded-full bg-[#F97316]/10 text-black font-normal text-sm mb-4">
                  Join 300+ Copywriters Already Building Successful Careers
                </div>

                <div className="flex flex-col space-y-2 mb-6">
                  <h1 className="text-3xl laptop:text-5xl font-extrabold leading-tight mb- text-[#333]">
                    The Only Copywriting Masterclass You’ll Need
                  </h1>

                  <p className="text-black text-lg">
                    To Transform You From Clueless to Closing High-Ticket
                    Clients in 6 Months
                  </p>
                </div>

                <Button
                  size="sm"
                  className="bg-[#F97316] hover:bg-[#E86305] text-white px-8 py-7 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full laptop:w-auto"
                >
                  Sounds Juicy... Join Our Waitlist
                </Button>

                <p className="mt-4 text-sm text-gray-600">
                  Limited spots available. Enrollment closes soon!
                </p>
              </div>
              <WaitlistCountdown />
            </div>

            <div className="laptop:w-2/5 order-1 laptop:order-2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#F97316]/20 rounded-full z-0 animate-pulse"></div>
                <div
                  className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#F97316]/20 rounded-full z-0 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>

                <div className="relative z-10 bg-white p-3 rounded-xl shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-500">
                  <img
                    src="/adeola.jpg"
                    alt="Successful copywriter working remotely"
                    className="rounded-lg w-full object-cover"
                  />

                  <div className="absolute -bottom-5 -right-5 bg-black px-4 py-2 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="bg-green-500 h-3 w-3 rounded-full"></div>
                      <span className="font-semibold text-sm">
                        300+ Students
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-10 -left-3 lg:-left-10 bg-black px-5 py-3 rounded-lg shadow-xl z-20">
                  <p className="font-bold text-[#F97316]">⭐⭐⭐⭐⭐</p>
                  <p className="text-sm font-medium">
                    "Changed my life completely!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
