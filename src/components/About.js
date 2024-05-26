import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I am a passionate and dedicated full-stack developer currently undergoing comprehensive training at Code for India. With a solid foundation in both front-end and back-end technologies. 
       </p>

        <br />

        <p className="text-xl">
        I am eager to bring my skills to the software industry. I am actively seeking a position as a developer where I can contribute to innovative projects, collaborate with talented teams, and continue growing my expertise in software development.
        
        </p>
      </div>
    </div>
  );
};

export default About;