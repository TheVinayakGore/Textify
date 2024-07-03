import React from 'react'
import gif from '../gif4.gif'

const Hero = () => {

    return (
        <>
            <div class="text-gray-600 body-font">
                <div class="container mx-auto flex py-20 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-7xl text-3xl font-bold text-blue-700">Hello World !</h1>
                        <p class="my-10 leading-relaxed text-xl">Welcome to Textify, your go-to app for converting text to PDFs with ease and style. Enjoy seamless and efficient document creation right at your fingertips. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div class="flex justify-center">
                            <ul className='flex space-x-5'>
                                <li><a href="#start" type="button" className="flex items-center p-2 px-10 space-x-4 hover:font-normal text-white hover:text-pink-500 bg-gradient-to-r from-pink-500 to-amber-500 hover:from-white hover:to-white border border-pink-500 shadow-lg"><p>Start Now</p> <i class="fa-solid fa-angles-right"></i></a></li>
                                <li><a href="#contact" className="flex items-center p-2 px-10 space-x-4 hover:font-normal text-green-500 hover:text-white hover:bg-gradient-to-r from-green-500 to-blue-500 hover:border-none border border-green-500 shadow-lg"><p>Contact Us</p> <i class="fa-solid fa-arrow-up-right-from-square"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="gif" src={gif} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
