import React from "react";
import { Typewriter } from "react-simple-typewriter";
import gif from "../images/gif4.gif";

const Hero = (props) => {
  return (
    <main className="p-10 lg:p-20 w-full">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Section - Text Content */}
        <div className="w-full xl:w-1/2 text-center md:text-left">
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-extrabold leading-none bg-gradient-to-br from-teal-400 to-indigo-500 bg-clip-text text-transparent">
            Play With <br />
            <Typewriter
              words={["Words", "Text", "PDF", "Textify"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={20}
              delaySpeed={5000}
            /> !
          </h1>
          <p className="mt-6 text-base sm:text-lg">
            Welcome to Textify, your go-to app for converting text to PDFs with
            ease and style. Enjoy seamless and efficient document creation right
            at your fingertips.
          </p>
          <p className="mt-4 text-base sm:text-lg">
            With intuitive features and a user-friendly interface, you can
            create, edit, and export PDFs in just a few clicks. Textify is more
            than just a tool—it's your partner in productivity.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="#start"
              className={`inline-flex items-center px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                props.mode === "light"
                  ? "bg-gradient-to-r from-pink-500 to-amber-500 text-white hover:from-pink-600 hover:to-amber-600"
                  : "bg-gradient-to-r from-pink-600 to-amber-600 text-white hover:from-pink-700 hover:to-amber-700"
              } shadow-lg hover:shadow-xl`}
            >
              Start Now <i className="fas fa-angles-right ml-2"></i>
            </a>
            <a
              href="#contact"
              className={`inline-flex items-center px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                props.mode === "light"
                  ? "text-green-500 border border-green-500 hover:bg-green-500 hover:text-white"
                  : "text-green-400 border border-green-400 hover:bg-green-400 hover:text-white"
              } shadow-lg hover:shadow-xl`}
            >
              Contact Us{" "}
              <i className="fas fa-arrow-up-right-from-square ml-2"></i>
            </a>
          </div>
        </div>

        {/* Right Section - GIF */}
        <div className="w-1/2 hidden xl:flex justify-center">
          <img
            alt="Textify GIF"
            src={gif}
            className="w-full rounded-lg border transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
