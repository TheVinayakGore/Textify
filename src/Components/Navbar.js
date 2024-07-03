import React from 'react'
import logo from '../logo.png'

const Navbar = () => {
  return (
    <>
      <nav className='flex items-center justify-between m-auto space-x-5 sticky top-0 p-3 px-20 bg-zinc-200/[0.3] backdrop-blur-sm'>
        <div className='flex items-center space-x-2'>
          <a href="/"><img src={logo} alt="logo" className='w-7' /></a>
          <a href="/" className='text-xl font-medium'>Textify</a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
