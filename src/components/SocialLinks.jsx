import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/michael-ngugi-208b60191/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/mikey-ngugi",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:mikeyngugi63@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Certificate <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://www.credential.net/9485fa76-f153-4bf9-bebb-d68a8faa5430?key=cdc785e9462b4bb21f1abba58551a4b395ffa76762ba591dedd799f20cb5c58d",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
   
    <div className="hidden sm:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-teal-800" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  
  );
};

export default SocialLinks;
