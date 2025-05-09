"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useInView } from "@/hooks/useInView";
// import { useInView } from "@/hooks/useInView";

interface InstructorBioProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

const InstructorBio = ({
  name,
  role,
  image,
  description,
}: InstructorBioProps) => {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ${
        isInView ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
      }`}
    >
      <Card className="border-none shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="flex flex-col md:flex-row">
          <div className="laptop:w-1/3">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover aspect-square"
            />
          </div>
          <div className="laptop:w-2/3">
            <CardHeader>
              <h3 className="text-2xl font-bold">{name}</h3>
              <p className="text-[#F97316] font-medium">{role}</p>
            </CardHeader>
            <CardContent>
              <p>{description}</p>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InstructorBio;
