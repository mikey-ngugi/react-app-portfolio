import React from "react";
import boty from "../assets/portfolio/boty.jpg";
import sudoku from "../assets/portfolio/sudoku.jpg";
import java from "../assets/portfolio/java.jpg";



const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: boty,
      href:"https://mikey-ngugi.github.io/mikey-dev.github.io/Blog_post.html#bot",
    },
    {
      id: 2,
      src: sudoku,
      href:"https://mikey-ngugi.github.io/mikey-dev.github.io/Blog_post.html#sudoku",
    },
    {
      id: 3,
      src: java,
      href:"https://mikey-ngugi.github.io/mikey-dev.github.io/Blog_post.html#Android",
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href,}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            ><img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 object-cover h-100 w-100" 
              /></a>
              <div className="flex items-center justify-center">
                <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
                ><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Preview
                </button></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
