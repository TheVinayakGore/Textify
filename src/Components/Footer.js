import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

const Footer = (props) => {
    return (
        <>
            <footer class={`text-lg body-font relative border-t ${props.mode === 'light' ? 'border-zinc-200' : 'border-zinc-800'}`}>
                <div class="container px-5 py-20 mx-auto">
                    <div class="flex flex-col text-center w-full mb-12">
                        <h1 id="contact" class="sm:text-4xl text-2xl title-font font-medium mb-4">Contact Us</h1>
                        <p class={`lg:w-2/3 mx-auto leading-relaxed ${props.mode === 'light' ? 'text-zinc-700' : 'text-zinc-500'}`}>Feel free to contact us on social media accounts and get in touch</p>
                    </div>
                    <ul className={`flex items-center justify-center m-auto space-x-2 ${props.mode === 'light' ? 'text-zinc-700' : 'text-zinc-500'} text-2xl`}>
                        <li><a href="/" className='flex items-center justify-center border border-zinc-500 hover:border-blue-600 rounded-full hover:bg-blue-600 hover:text-white w-10 h-10'><FaInstagram /></a></li>
                        <li><a href="/" className='flex items-center justify-center border border-zinc-500 hover:border-blue-600 rounded-full hover:bg-blue-600 hover:text-white w-10 h-10'><FaXTwitter /></a></li>
                        <li><a href="/" className='flex items-center justify-center border border-zinc-500 hover:border-blue-600 rounded-full hover:bg-blue-600 hover:text-white w-10 h-10'><FaFacebookF /></a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer
