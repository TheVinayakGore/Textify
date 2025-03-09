import React from 'react';
import { Typewriter } from 'react-simple-typewriter'; // Import the Typewriter component
import gif from '../images/gif4.gif';

const Hero = (props) => {
    return (
        <>
            <main className="container m-auto py-20">
                <div className="flex flex-col md:flex-row items-start justify-between">
                    {/* Left Section - Text Content */}
                    <div className="md:w-1/2 lg:pr-24 md:pr-16 text-center md:text-left mb-16 md:mb-0">
                        <h1 className="text-6xl sm:text-9xl font-extrabold leading-tight bg-gradient-to-br from-teal-400 to-indigo-500 bg-clip-text text-transparent pb-2">Hello Bhai {" "}
                            <Typewriter
                                words={['World !', 'Users !', 'Buddy !']} // Words to type
                                loop={true} // Infinite loop
                                cursor
                                cursorStyle="|"
                                typeSpeed={80} // Typing speed
                                deleteSpeed={20} // Deleting speed
                                delaySpeed={5000} // Delay between words
                            />
                        </h1>
                        <p className="mt-6 text-lg opacity-60">
                            Welcome to Textify, your go-to app for converting text to PDFs with ease and style. Enjoy seamless and efficient document creation right at your fingertips. Textify is designed to simplify your workflow, whether you're a student, professional, or casual user. With intuitive features and a user-friendly interface, you can create, edit, and export PDFs in just a few clicks.
                        </p>
                        <p className="mt-4 text-lg opacity-60">
                            Our app supports a wide range of formatting options, including fonts, colors, and layouts, ensuring your documents look exactly the way you want. Plus, with cloud integration, you can access your files from anywhere, anytime. Textify is more than just a tool—it's your partner in productivity.
                        </p>
                        <div className="mt-10 flex justify-center md:justify-start space-x-4">
                            <a
                                href="#start"
                                className={`inline-flex items-center px-12 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${props.mode === 'light'
                                    ? 'bg-gradient-to-r from-pink-500 to-amber-500 text-white hover:bg-gradient-to-r hover:from-pink-600 hover:to-amber-600'
                                    : 'bg-gradient-to-r from-pink-600 to-amber-600 text-white hover:bg-gradient-to-r hover:from-pink-700 hover:to-amber-700'
                                    } shadow-lg hover:shadow-xl`}
                            >
                                Start Now <i className="fas fa-angles-right ml-2"></i>
                            </a>
                            <a
                                href="#contact"
                                className={`inline-flex items-center px-12 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${props.mode === 'light'
                                    ? 'text-green-500 border border-green-500 hover:bg-green-500 hover:text-white'
                                    : 'text-green-400 border border-green-400 hover:bg-green-400 hover:text-white'
                                    } shadow-lg hover:shadow-xl`}
                            >
                                Contact Us <i className="fas fa-arrow-up-right-from-square ml-2"></i>
                            </a>
                        </div>
                    </div>

                    {/* Right Section - GIF */}
                    <div className="md:w-1/2 flex justify-center md:justify-end">
                        <img
                            alt="Textify GIF"
                            src={gif}
                            className="rounded-lg transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Hero;