'use client'
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useInView } from "@/hooks/useInView";

interface Testimonial {
  name: string;
  role?: string;
  quote: string;
  image: string;
  stars: number;
}

interface TestimonialSectionProps {
  highlightColor: string;
  testimonials: Testimonial[];
}

const TestimonialSection = ({ highlightColor, testimonials }: TestimonialSectionProps) => {
  const { ref: sectionRef, isInView: isSectionInView } = useInView<HTMLDivElement>();

  return (
    <section className="py-16 px-4 text-black" style={{ backgroundColor: highlightColor }}>
      <div className="container mx-auto">
        <h2 
          ref={sectionRef}
          className={`text-3xl md:text-4xl font-bold mb-12 text-center transform transition-all duration-700 ${
            isSectionInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          What Our Students Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ${
        isInView
          ? "translate-y-0 opacity-100"
          : "translate-y-20 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <Card className="border-none shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-[#F97316]"></div>
        <CardHeader className="pt-8">
          <div className="flex items-center gap-4">
          <img

              src={testimonial.image} 
              alt={testimonial.name} 
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="font-bold text-xl">{testimonial.name}</h3>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          </div>
          <div className="flex mt-2">
            {Array(testimonial.stars).fill(0).map((_, i) => (
              <Star key={i} className="fill-[#F97316] text-[#F97316] w-5 h-5" />
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <p className="italic text-black">`{testimonial.quote}`</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestimonialSection;