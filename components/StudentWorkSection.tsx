"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Props {
  id?: string;
}

const StudentWorkSection = ({ id }: Props) => {
  return (
    <section className="py-16 px-4  bg-black text-white" id={id}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Some Of Our Students Work
        </h2>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Here are real examples of projects our students have created after
          going through our program:
        </p>
        <Carousel className="max-w-5xl mx-auto ">
          <CarouselContent>
            <CarouselItem className="laptop:basis-1/2">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 cursor-pointer">
                  <img
                    src="/techy.png"
                    alt="Student work example"
                    className="w-full h-64 object-contain rounded-lg mb-4"
                    onClick={() => {
                      window.location.href = "https://techyteams.com/";
                    }}
                  />
                  <h3 className="font-bold text-xl mb-2">Techy Teams</h3>
                  <p>
                    Here we are all about giving you access to the right people.
                    100% results are guaranteed with access to Africa’s top 1%
                    tech talents.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="laptop:basis-1/2">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 cursor-pointer">
                  <img
                    src="/black.png"
                    alt="Student work example"
                    className="w-full h-64 object-contain rounded-lg mb-4"
                    onClick={() => {
                      window.location.href = "https://www.bkia.ca/";
                    }}
                  />
                  <h3 className="font-bold text-xl mb-2">
                    Black Kids In Action
                  </h3>
                  <p>
                    At BKIA, we’re all about giving you the freedom to be
                    yourself, speak up, think big, and lead without limits.
                    Because when you win, we all win
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="laptop:basis-1/2">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 cursor-pointer">
                  <img
                    src="/azach.jpeg"
                    alt="Student work example"
                    className="w-full h-64 object-cover rounded-lg mb-4 p-2"
                    // onClick={''}
                  />
                  <h3 className="font-bold text-xl mb-2">
                    A Brand Style Guide
                  </h3>
                  <p>
                    Unlock the potential of discarded fabric to create
                    functional products that enrich lives and promote
                    sustainable living.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious
            className="laptop:-left-16 -left-3 bg-[#F97316] text-white border-none hover:bg-[#E86305] cursor-pointer disabled:opacity-10 disabled:cursor-not-allowed 
 "
          />
          <CarouselNext className="laptop:-right-16 -right-3.5 bg-[#F97316] text-white border-none hover:bg-[#E86305] cursor-pointer disabled:opacity-10 disabled:cursor-not-allowed " />
        </Carousel>
      </div>
    </section>
  );
};

export default StudentWorkSection;
