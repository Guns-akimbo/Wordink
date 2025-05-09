import React from "react";
import InstructorBio from "./InstructorBio";

interface InstructorProps {
  id?: string;
}

const Instructors = ({ id }: InstructorProps) => {
  return (
    <section className="py-16 px-4  bg-white" id={id}>
      <div className="container mx-auto">
        <h2 className="text-3xl laptop:text-4xl font-bold mb-12 text-center text-black">
          Meet Your Instructors
        </h2>
        <div className="grid laptop:grid-cols-2 gap-12 max-w-9xl mx-auto text-black">
          <InstructorBio
            name="Ezugo Nwakoby"
            role=" The Director of Learning."
            image="/Eze.jpeg"
            description="With over 4+ years of experience in writing advertorial campaigns that has generated over 6 figures in revenue for numerous business. He has helped startups launch like pros, and turned cold audiences into loyal buyers using strategy-driven copy across emails, ads, landing pages, and more. Ezugo together with WordInk has carefully crafted this course just for you, built on real experiences and zero fluff, to take you from zero to pro-copywriter in no time."
          />
          <InstructorBio
            name="Peace Akinola (Coach Phoebe)"
            role="The Pioneer of WordInk"
            image="/adeola.jpg"
            description="Peace, popularly known as Coach Phoebe, is the Founder of WordInk and the powerhouse behind transformative projects for agencies affiliated with brands like MTN, American Cola, AccessBank, Optiva Capital and so many household names.With over 4+ years of industry experience, Peace has trained over 300 copywriters home and abroad to master the art of Copywriting.She’s more than a coach, she’s a mentor, a trailblazer and a leader shaping tomorrow’s storytellers and changemakers."
          />
        </div>
      </div>
    </section>
  );
};

export default Instructors;
