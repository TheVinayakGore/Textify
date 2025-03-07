import React from 'react'
import logo from '../logo.png'
import logo2 from '../logo2.webp'
import { BsMoonStars } from "react-icons/bs";
import { FiSun } from "react-icons/fi";

const Navbar = (props) => {
  return (
    <>
      <nav className={`flex items-center justify-between m-auto space-x-5 sticky top-0 py-2 px-10 ${props.mode === 'light' ? 'bg-zinc-200/[0.6]' : 'bg-zinc-800/[0.7]'} backdrop-blur-sm w-full transition duration-300 z-50`}>
        <div className='flex items-center space-x-2'>
          <a href="/"><img src={props.mode === 'light' ? logo : logo2} alt="logo" className='w-7' /></a>
          <a href="/" className="text-2xl font-semibold bg-gradient-to-br from-teal-400 to-indigo-500 bg-clip-text text-transparent">
            Gosy Converter
          </a>
        </div>
        <button onClick={props.toggelMode} className={`p-1 ${props.mode === 'light' ? 'hover:bg-zinc-200' : 'hover:bg-zinc-800'} rounded-full text-${props.mode === 'light' ? 'dark' : 'light'} transition duration-300`}>
          {props.mode === 'dark' ? <FiSun className='p-[0.4rem] w-9 h-9' /> : <BsMoonStars className='p-[0.4rem] w-9 h-9' />}
        </button>
      </nav>
    </>
  )
}

export default Navbar
