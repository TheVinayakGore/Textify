import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="relative overflow-hidden py-12 px-6 md:px-12 lg:px-24">
        {/* Animated Blur Circles */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-500 opacity-30 rounded-full blur-2xl animate-plus"></div>
        <div className="max-w-6xl mx-auto text-center space-y-2 sm:space-y-6 relative z-10">
          <h2 className="text-xl sm:text-3xl font-bold">Stay in the loop with Textify</h2>
          <p className="text-xs sm:text-sm">
            Subscribe to receive updates, tips, and new feature releases.
          </p>
          <a
            href="mailto:example@textify.com"
            className="inline-block bg-white text-indigo-600 font-medium px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Contact Us : example@textify.com
          </a>
          <div className="flex justify-center gap-3 sm:gap-6 mt-3 sm:mt-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 p-2 hover:bg-pink-500 rounded-full transition duration-300"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 p-2 hover:bg-pink-500 rounded-full transition duration-300"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 p-2 hover:bg-pink-500 rounded-full transition duration-300"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
          <p className="text-xs sm:text-sm opacity-50 mt-2 sm:mt-4">
            &copy; {new Date().getFullYear()} Textify. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
