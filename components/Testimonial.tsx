import React from "react";
import TestimonialSection from "./TestimonialSection";

const Testimonial = () => {
  return (
    <TestimonialSection
      highlightColor="white"
      testimonials={[
        {
          name: "Ajaghaku Onyinye ",
          role: "Alumni",
          image: "/onyi.jpeg",

          quote:
            "This program eliminates guesswork when it comes to writing in a way that connects with people.I've never felt this clear and confident in my writing. For anyone who wants to become an elite copywriter, this program is a must!",
          stars: 5,
        },
        {
          name: "Feranmi Ajileye Lola",
          role: "Alumni",
          image: "/feranmi.jpeg",

          quote:
            "This program has been amazing so far, thanks to our coaches.It's the simplicity, interactivity and practicality that I appreciate so much. It was easy to understand, like I was learning all about copywriting on the spot.",
          stars: 5,
        },
        {
          name: "Trina",
          role: "Alumni",
          image: "/trina.jpeg",

          quote:
            "Words fail me when I try to express how much of a blessing it has been learning from you. You're the kind of coach any copywriter would be lucky to have. You taught with your heart,soul and a dedication I've never seen before.",
          stars: 5,
        },
      ]}
    />
  );
};

export default Testimonial;
