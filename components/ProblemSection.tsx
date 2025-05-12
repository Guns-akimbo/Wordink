import { Card, CardContent } from "@/components/ui/card";
import Problem from "./Problem";
import { AlertTriangle } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-16 px-4 text-white bg-white mt-4">
      <Problem />

      <div className="container mx-auto text-black mt-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 text-black">
            <Card className="border-l-4 border-l-[#F97316] shadow-lg text-">
              <CardContent className="p-6">
                <p className="text-lg">
                  You're tired of feeling under-valued with the peanuts you make
                  off writing{" "}
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-[#F97316] shadow-lg">
              <CardContent className="p-6">
                <p className="text-lg">
                  You heard copywriting pays like crazy, so you can stop
                  pretending you like your 9-5 or it can double as a killer
                  side-hustle.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-[#F97316] shadow-lg">
              <CardContent className="p-6">
                <p className="text-lg">
                  You’re totally psyched about a digital skill that makes money
                  for you at the comfort of your home.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-[#F97316] shadow-lg">
              <CardContent className="p-6">
                <p className="text-lg">
                  You have a business, but now you're hearing you need
                  copywriting to make sales. You just want to know how that
                  works.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-8 bg-[#FEF7CD] rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Relax. Take a breath in.
            </h3>
            <p className="text-xl">Look, we get it….</p>
            <ul className="list-disc list-inside space-y-4 mt-4">
              <li>
                Your 9-5 basically owns you, and you barely have any form of
                control over your life.
              </li>
              <li>
                You had a mind-blowing idea and a great product but zero
                marketing knowledge, so you've made a little above zero sales.
              </li>
              <li>
                You pay so much for copywriters in your business, and you keep
                wondering what's so special about them?
              </li>
              <li>
                You've taken so many courses and watched YouTube videos from
                copywriting 'gurus', but you still feel stuck.
              </li>
            </ul>
            <p className="text-xl mt-4 font-bold">Breathe out….</p>
          </div>
          <div className="mt-8 p-8 bg-white rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Hate to say it, but here's the honest truth:
            </h3>

            <div className="space-y-6 mt-6">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <AlertTriangle className="text-[#F97316] h-6 w-6" />
                </div>
                <p className="text-lg">
                  You don't have time to waste. So whatever is paying the bills
                  will eventually replace what isn't.
                </p>
              </div>

              <div className="pl-9">
                <p className="text-lg italic text-gray-700">
                  Your saying if you love writing but you're not making money
                  off it, let's just say that relationship won't work out.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <AlertTriangle className="text-[#F97316] h-6 w-6" />
                </div>
                <p className="text-lg">
                  The market is all about buying and selling. Your product won't
                  go far if you can't sell it.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <AlertTriangle className="text-[#F97316] h-6 w-6" />
                </div>
                <p className="text-lg">
                  Your 9-5 won't get you your dream life; you’d only feel stuck
                  chasing another man’s dream for peanuts.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <AlertTriangle className="text-[#F97316] h-6 w-6" />
                </div>
                <p className="text-lg">
                  You need a copywriting course just for you, to fit your
                  scenario, answer your questions and guide you every step of
                  the way.
                </p>
              </div>

              <div className="pl-9">
                <p className="text-lg italic text-gray-700">
                  Random YouTube videos or those `copywriting in 1 week` courses
                  can't do that for you.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg border-2 border-[#F97316] shadow-md">
              <p className="text-xl font-bold text-center">
                If this is your truth then keep reading. Copywriting greatness
                is just a few scrolls away.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
