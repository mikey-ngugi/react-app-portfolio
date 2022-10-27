import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-10">
            Contact
          </p>
          <p className="py-6"> I am interested in freelance opportunities as well - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/bb636bd3-b8bf-4698-b99b-61be168ea358"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="p-2 bg-orange-900 border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              className="my-4 p-2 bg-orange-900 border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="10"
              className="p-2 bg-orange-900 border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
