import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaFilePdf, FaEdit, FaShareAlt } from "react-icons/fa";
import {
  FaRocket,
  FaUserShield,
  FaMobileAlt,
  FaCogs,
  FaEye,
  FaLock,
  FaUserCircle,
  FaStar,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const features = [
  {
    title: "Convert Text to PDF",
    description:
      "Easily transform any text into stylish PDF documents instantly.",
    icon: <FaFilePdf className="w-10 h-10 text-teal-500" />,
  },
  {
    title: "Edit with Ease",
    description:
      "Modify your text and PDFs quickly with a user-friendly interface.",
    icon: <FaEdit className="w-10 h-10 text-pink-500" />,
  },
  {
    title: "Export & Share",
    description: "Export your PDFs seamlessly and share them with anyone.",
    icon: <FaShareAlt className="w-10 h-10 text-amber-500" />,
  },
];

const Hero = ({ mode }) => {
  return (
    <div>
      <main className="relative px-6 py-20 md:px-12 lg:px-24 w-full overflow-hidden">
        {/* Background Blurs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-400 opacity-20 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-400 opacity-20 rounded-full blur-3xl -z-10 animate-pulse" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-14">
          {/* Left Section - Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-br from-teal-400 to-indigo-600 bg-clip-text text-transparent">
              Play With <br />
              <span className="inline-block text-blue-500 relative">
                <Typewriter
                  words={["Words", "Text", "PDF", "Textify"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={20}
                  delaySpeed={5000}
                />
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-amber-500 rounded-full animate-pulse"></span>
              </span>
            </h1>
            <p className="text-sm md:text-lg max-w-xl mx-auto lg:mx-0">
              Welcome to Textify, your go-to app for converting text to PDFs
              with style. Enjoy efficient and smooth document creation.
            </p>
            <p className="text-sm md:text-lg max-w-xl mx-auto lg:mx-0">
              Create, edit, and export PDFs easily. Textify is more than a
              tool—it's your productivity companion.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6">
              <a
                href="#start"
                className={`inline-flex items-center px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                  mode === "light"
                    ? "bg-gradient-to-r from-pink-500 to-amber-500 text-white hover:from-pink-600 hover:to-amber-600"
                    : "bg-gradient-to-r from-pink-600 to-amber-600 text-white hover:from-pink-700 hover:to-amber-700"
                } shadow-md`}
              >
                Start Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className={`inline-flex items-center px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                  mode === "light"
                    ? "text-green-500 border border-green-500 hover:bg-green-500 hover:text-white"
                    : "text-green-400 border border-green-400 hover:bg-green-400 hover:text-white"
                } shadow-md`}
              >
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Section - Feature Cards */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map(({ title, description, icon }, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl shadow-lg border border-dashed transition-all duration-300 hover:shadow-2xl hover:border-gradient-to-r hover:from-pink-500 hover:to-amber-500 ${
                  mode === "light" ? "bg-white" : "bg-zinc-800"
                }`}
              >
                <div className="flex items-center justify-center mb-4">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {title}
                </h3>
                <p className="text-sm text-center opacity-60">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Why Choose Textify Section */}
      <section
        className={`py-20 px-6 md:px-12 lg:px-24 border-t  ${
          mode === "light"
            ? "bg-white border-gray-300"
            : "bg-black border-zinc-700"
        }`}
      >
        <div className="text-center space-y-8">
          <h2
            className={`text-4xl font-bold ${
              mode === "light" ? "text-indigo-600" : "text-indigo-300"
            }`}
          >
            Why Choose Textify?
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto ${
              mode === "light" ? "text-gray-700" : "text-gray-300"
            }`}
          >
            Textify is designed for efficiency, clarity, and modern creators.
            Whether you're a student, a professional, or just someone who works
            with text a lot — Textify simplifies document generation for you.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div
              className={`p-6 rounded-xl shadow hover:shadow-lg transition duration-300 hover:scale-110 border ${
                mode === "light"
                  ? "bg-white border-zinc-200 text-gray-800"
                  : "bg-zinc-800 border-zinc-700 text-gray-100"
              }`}
            >
              <div
                className={`flex items-center justify-center mb-4 ${
                  mode === "light" ? "text-indigo-500" : "text-indigo-300"
                }`}
              >
                <FaRocket className="w-10 h-10" />
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  mode === "light" ? "text-indigo-700" : "text-indigo-300"
                }`}
              >
                Fast & Efficient
              </h3>
              <p
                className={`text-sm ${
                  mode === "light" ? "text-gray-700" : "text-gray-300"
                }`}
              >
                Lightning-fast PDF creation without delays.
              </p>
            </div>
            <div
              className={`p-6 rounded-xl shadow hover:shadow-lg transition duration-300 hover:scale-110 border ${
                mode === "light"
                  ? "bg-white border-zinc-200 text-gray-800"
                  : "bg-zinc-800 border-zinc-700 text-gray-100"
              }`}
            >
              <div
                className={`flex items-center justify-center mb-4 ${
                  mode === "light" ? "text-pink-500" : "text-pink-300"
                }`}
              >
                <FaUserShield className="w-10 h-10" />
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  mode === "light" ? "text-pink-700" : "text-pink-300"
                }`}
              >
                Privacy First
              </h3>
              <p
                className={`text-sm ${
                  mode === "light" ? "text-gray-700" : "text-gray-300"
                }`}
              >
                No data is stored or shared—completely private.
              </p>
            </div>
            <div
              className={`p-6 rounded-xl shadow hover:shadow-lg transition duration-300 hover:scale-110 border ${
                mode === "light"
                  ? "bg-white border-zinc-200 text-gray-800"
                  : "bg-zinc-800 border-zinc-700 text-gray-100"
              }`}
            >
              <div
                className={`flex items-center justify-center mb-4 ${
                  mode === "light" ? "text-amber-500" : "text-amber-300"
                }`}
              >
                <FaMobileAlt className="w-10 h-10" />
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  mode === "light" ? "text-amber-700" : "text-amber-300"
                }`}
              >
                Mobile Friendly
              </h3>
              <p
                className={`text-sm ${
                  mode === "light" ? "text-gray-700" : "text-gray-300"
                }`}
              >
                Optimized for use on phones and tablets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect for Every Use Case Section */}
      <section
        className={`py-20 px-6 md:px-12 lg:px-24 ${
          mode === "light" ? "bg-white" : "bg-black"
        }`}
      >
        <div className="grid lg:grid-cols-2 items-center gap-14">
          <div className="space-y-6">
            <h2
              className={`text-4xl font-bold ${
                mode === "light" ? "text-pink-600" : "text-pink-400"
              }`}
            >
              Perfect for Every Use Case
            </h2>
            <p
              className={`text-lg ${
                mode === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Whether you're preparing a resume, writing an article, or
              submitting a report—Textify adapts to your workflow with intuitive
              tools.
            </p>
            <ul className="space-y-3 text-left">
              <li
                className={`flex items-center gap-3 ${
                  mode === "light" ? "text-gray-700" : "text-gray-300"
                }`}
              >
                <FaCogs className="text-green-500" /> Custom font and layout
                options
              </li>
              <li
                className={`flex items-center gap-3 ${
                  mode === "light" ? "text-gray-700" : "text-gray-300"
                }`}
              >
                <FaEye className="text-blue-500" /> Instant PDF preview and
                export
              </li>
              <li
                className={`flex items-center gap-3 ${
                  mode === "light" ? "text-gray-700" : "text-gray-300"
                }`}
              >
                <FaLock className="text-red-500" /> Secure and private
                conversion
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                name: "Alex Johnson",
                comment:
                  "Absolutely love how easy it is to create and share PDFs!",
                source: "X",
                icon: <FaTwitter className="text-blue-400" />,
              },
              {
                name: "Samantha Lee",
                comment:
                  "Super helpful for my daily workflow—highly recommended!",
                source: "Instagram",
                icon: <FaInstagram className="text-pink-500" />,
              },
              {
                name: "Raj Patel",
                comment:
                  "The interface is clean and intuitive. Great job, Textify!",
                source: "Facebook",
                icon: <FaFacebookF className="text-blue-600" />,
              },
              {
                name: "Emily Zhang",
                comment: "Made my document process so much faster. Amazing!",
                source: "LinkedIn",
                icon: <FaLinkedinIn className="text-blue-700" />,
              },
            ].map((user, index) => (
              <div
                key={index}
                className={`rounded-xl border p-6 shadow hover:shadow-lg hover:scale-110 transition-all duration-150 ${
                  mode === "light"
                    ? "bg-white border-zinc-200 text-gray-800"
                    : "bg-zinc-800 border-zinc-700 text-gray-100"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <FaUserCircle className="w-8 h-8" />
                  <span className="font-semibold text-lg">{user.name}</span>
                </div>
                <p className="text-sm mb-3">"{user.comment}"</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <div className="flex items-center gap-1">
                    {user.icon}
                    <span>{user.source}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
