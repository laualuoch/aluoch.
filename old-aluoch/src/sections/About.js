import React from "react";
import { AboutCard } from "../components/Cards";
import { SectionHeader } from "../components/SectionHeader";

const About = ({ sectionId }) => {
  const aboutItems = [
    {
      title: "Software Engineering",
      description:
        "My approach to software engineering entails gathering user needs, designing solutions, testing designs, and developing. Followed by continuous iteration. I develop both Android and Web Apps",
      tools: [
        "HTML & CSS",
        "JavaScript",
        "React JS",
        "Python",
        "Kotlin",
        "Jetpack Compose",
        "Next JS",
        "React Native"
      ],
    },
    {
      title: "Product Design",
      description:
        "As a product designer, I leverage user needs and proven techniques that not only ensure minimalistic aesthetic designs but also, functional designs that meet user needs. I design for physical and digital products.",
      tools: ["Figma"],
    },
    {
      title: "Technical writing",
      description:
        "Technical writing is a process that is at the core of my expertise. My first role post my undergraduate degree entailed research writing focusing on the Technical domain. As a technical writer, research and continuous learning are at my core. I write on topics related to my tech stack.",
      tools: [],
    },
  ];

  return (
    <section id={sectionId} className="flex items-center justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <SectionHeader
          title="ABOUT"
          description="Crafting Code, Design, and Words: Bringing Innovation to Life"
        />
        <div className="flex flex-wrap justify-center w-full">
          {aboutItems.map(({ title, description, tools }) => (
            <AboutCard
              key={title}
              title={title}
              description={description}
              tools={tools}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
