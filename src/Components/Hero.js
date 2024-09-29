import React from 'react'
import gif from '../gif4.gif'
import TextForm from './TextForm'
import TextInput from './TextInput'

const Hero = (props) => {

    return (
        <>
            <div class="">
                <div class="container mx-auto flex py-20 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class={`title-font sm:text-7xl text-3xl font-bold ${props.mode === 'light' ? 'text-blue-600' : 'text-white'}`}>Hello World !</h1>
                        <p class={`my-10 text-lg ${props.mode === 'light' ? 'text-zinc-600' : 'text-zinc-500'}`}>Welcome to Textify, your go-to app for converting text to PDFs with ease and style. Enjoy seamless and efficient document creation right at your fingertips. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div class="flex justify-center">
                            <ul className='flex space-x-5'>
                                <li><a href="#start" type="button" className={`flex items-center p-2 px-10 space-x-4 hover:font-normal text-white hover:text-blue-500 bg-gradient-to-r from-pink-500 to-amber-500 hover:from-transparent hover:to-transparent border ${props.mode === 'light' ? 'border-white' : 'border-black'} hover:border-blue-500 shadow-lg shadow-pink-500/[0.3] hover:shadow-blue-500/[0.3] rounded-full`}><p>Start Now</p> <i class="fa-solid fa-angles-right"></i></a></li>
                                <li><a href="#contact" className="flex items-center p-2 px-10 space-x-4 hover:font-normal text-green-500 hover:text-white hover:bg-gradient-to-r from-green-500 to-teal-500 hover:border-none border border-green-500 shadow-lg shadow-green-500/[0.25] rounded-full"><p>Contact Us</p> <i class="fa-solid fa-arrow-up-right-from-square"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="gif" src={gif} />
                    </div>
                </div>
                <div className='flex flex-col space-y-10'>
                    <TextForm mode={props.mode} toggelMode={props.toggelMode} />
                    <TextInput mode={props.mode} toggelMode={props.toggelMode} />
                </div>
            </div>
        </>
    )
}

export default Hero
