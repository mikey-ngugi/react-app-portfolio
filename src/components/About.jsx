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

        <p className="text-xl mt-10 text-justify text-base">
          I'm a very ambitious Software developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
        </p>

        <br />

        <p className= "text-xl mt-5 text-justify text-base" >
            I build new projects just to tickle my brain, as well as to sharpen my skills.
            I have done various projects in the past using Python, Java, kotlin, PHP/SQL & HTML/CSS.
          </p>

          <br/>
          <p className= "text-xl mt-5 text-justify text-base" >
            I enjoy meeting challenges and seeing them through while remaining
            good-humored under pressure and able to consider all options with an open, clear,
            and unprejudiced mind before making decisions.
          </p>
      </div>
    </div>
  );
};

export default About;
