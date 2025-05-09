import React from "react";
import TestimonialSection from "./TestimonialSection";

const Testimonial = () => {
  return (
    <TestimonialSection
      highlightColor="white"
      testimonials={[
        {
          name: "Sarah Johnson",
          role: "Freelance Copywriter",
          image:
            "https://images.pexels.com/photos/31496004/pexels-photo-31496004/free-photo-of-artistic-portrait-with-motion-blur-at-night.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
          quote:
            "I was struggling to land clients until I took this program. Now I have a waiting list and I've doubled my rates!",
          stars: 5,
        },
        {
          name: "Michael Chen",
          role: "E-commerce Store Owner",
          image:
            "https://images.pexels.com/photos/31496004/pexels-photo-31496004/free-photo-of-artistic-portrait-with-motion-blur-at-night.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",

          quote:
            "The email sequence templates alone paid for the course in the first month. My conversion rate jumped by 34%!",
          stars: 5,
        },
        {
          name: "Aisha Patel",
          role: "Marketing Consultant",
          image:
            "https://images.pexels.com/photos/31496004/pexels-photo-31496004/free-photo-of-artistic-portrait-with-motion-blur-at-night.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",

          quote:
            "This is the only copywriting program that actually delivers practical, usable techniques. Game changer for my business.",
          stars: 5,
        },
      ]}
    />
  );
};

export default Testimonial;
