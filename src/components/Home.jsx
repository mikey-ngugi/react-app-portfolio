import React from "react";
import HeroImage from "../assets/profileImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Software Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md text-justify text-base text-gray-100">
            A Web and Mobile Associate Developer with primary focus on Front-end & Android development (Java &
            kotlin).<br/> Click link to view awarded Certificate:<br/><br/><a className="underline text-white text-sm font-size:0.875rem"
            href="https://www.credential.net/9485fa76-f153-4bf9-bebb-d68a8faa5430?key=cdc785e9462b4bb21f1abba58551a4b395ffa76762ba591dedd799f20cb5c58d"
            target="_blank"
            rel="noreferrer"
          >
          Google Associate Android Certification
          </a>
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
          <div className="text-blue-900 text-sm content-center	align-content: center">
          <br/><a href= "https://www.linkedin.com/in/michael-ngugi-208b60191/" target="_blank"
            rel="noreferrer"><FaLinkedin size={25} /></a>
          <br/><a href= "https://github.com/mikey-ngugi" target="_blank"
            rel="noreferrer"><FaGithub size={25} /></a>
          <br/><a href= "mailto:mikeyngugi63@gmail.com"><HiOutlineMail size={25} /></a>
          </div>
        </div>
        
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>        
      </div>
    </div>
  );
};

export default Home;
