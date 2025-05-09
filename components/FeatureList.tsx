"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useInView } from "@/hooks/useInView";

interface Feature {
  title?: string;
  description: string;
}

interface FeatureListProps {
  features: Feature[];
}

const FeatureList = ({ features }: FeatureListProps) => {
  return (
    <div className="grid laptop:grid-cols-2 desktop:grid-cols-3 gap-8 ">
      {features.map((feature, index) => (
        <FeatureCard key={index} feature={feature} index={index} />
      ))}
    </div>
  );
};

const FeatureCard = ({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) => {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ${
        isInView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white text-white">
        {feature.title && (
          <CardHeader className="bg-[#F97316]  rounded-md pb-2">
            <CardTitle className="text-xl">{feature.title}</CardTitle>
          </CardHeader>
        )}
        <CardContent className="pt-4 text-black">
          <p>{feature.description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeatureList;
