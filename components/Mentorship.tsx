import React from "react";
import { Card, CardContent } from "./ui/card";

const Mentorship = () => {
  return (
    <section className="py-16 px-4 text-white bg-white">
      <div className="w-full p-4 flex flex-col  items-center space-y-10 mt-4">
        <h2 className="text-[#F97316] text-center">
          THIS MENTORSHIP PROGRAM IS FOR YOU IF....
        </h2>
      </div>

      <div className="container mx-auto text-black mt-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 text-black">
            <Card className="border-l-4 border-l-[#F97316] shadow-lg text-">
              <CardContent className="p-6">
                <p className="text-lg">
                  You’re an Entrepreneur who’s interested in persuasion and
                  marketing hacks to scale your business.{" "}
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-[#F97316] shadow-lg">
              <CardContent className="p-6">
                <p className="text-lg">
                  You’re a career professional who’s working towards
                  transitioning to a high value career path, while still looking
                  like a pro.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-[#F97316] shadow-lg">
              <CardContent className="p-6">
                <p className="text-lg">
                  You have a passion for writing and you want to make serious
                  cash off it.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-[#F97316] shadow-lg">
              <CardContent className="p-6">
                <p className="text-lg">
                  You’re looking for a job/side-hustle that’s totally worth it
                  and can fund your dream life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="w-full p-4 flex flex-col  items-center space-y-10 mt-8">
        <h2 className="text-[#F97316] text-center">
          THIS MENTORSHIP PROGRAM IS NOT FOR YOU IF…{" "}
        </h2>
      </div>
     
      <div className="container mx-auto text-black mt-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 text-black">
          <Card className="border-l-4 border-l-[#F97316] shadow-lg ">
            <CardContent className="p-6">
              <p className="text-lg">
              You’re more focused on stacking certificates than actually using the skills. Simply put, we don't have the same goals.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-[#F97316] shadow-lg">
          <CardContent className="p-6">
            <p className="text-lg">
            You think anyone with writing knowledge can write copy. This is a common misconception of those who don't truly know the value of copywriting.
            </p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-[#F97316] shadow-lg">
          <CardContent className="p-6">
            <p className="text-lg">
              You think anyone with writing knowledge can write copy. You just
              won’t be ready for the work, you’d end up wasting your time and
              ours too.
            </p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-[#F97316] shadow-lg">
          <CardContent className="p-6">
            <p className="text-lg">
            You think AI has copywriting all figured out. Here we train original copywriters whose copy beats AI everytime
            </p>
          </CardContent>
        </Card> 
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default Mentorship;
