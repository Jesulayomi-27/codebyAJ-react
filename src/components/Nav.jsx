import React, { useState } from 'react'
import Button from './Button'
import { Link } from "react-scroll";

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* NAVBAR */}
      <div className='px-4 sm:px-6 md:px-8 py-4 bg-[#463ACB] text-white rounded-full relative z-50'>
        
        <div className='flex justify-between items-center'>
          
          <h1 className="font-outfit font-bold text-lg sm:text-xl md:text-2xl leading-[140%]">
            codebyAJ
          </h1>

          {/* Desktop */}
          <div className='hidden md:flex items-center gap-6'>
            <ul className='flex gap-4'>
              <li href="#about">
                <Link to="about" smooth={true} duration={500}>
                About
                </Link>
              </li>
              <li href="#skills">
                <Link to="skills" smooth={true} duration={500}>
                Skills
                </Link>
              </li>
              <li href="#portfolio">
                <Link to="portfolio" smooth={true} duration={500}>
                  Projects
                </Link>
              </li>
            </ul>

            <Button
              bgColor="#EBE9F9"
              textColor="#111204"
              border
              hoverBgColor="#f3f4f6"
            >
             <Link to="contact" smooth={true} duration={500}>
                Get In Touch
              </Link>
            </Button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className='md:hidden flex flex-col gap-1 z-50'
          >
            <span className='w-6 h-[2px] bg-white'></span>
            <span className='w-6 h-[2px] bg-white'></span>
            <span className='w-6 h-[2px] bg-white'></span>
          </button>
        </div>
      </div>

      {/* BACKDROP OVERLAY */}
      {open && (
        <div
          className='fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden'
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* MOBILE MENU */}
      {open && (
        <div className='fixed top-20 left-1/2 -translate-x-1/2 w-[90%] bg-white text-black rounded-2xl p-6 flex flex-col items-center gap-4 z-50 md:hidden shadow-lg'>
          
          <ul className='flex flex-col gap-3 text-center'>
            <li onClick={() => setOpen(false)}>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link to="skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link to="portfolio" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
          </ul>

          <Button
            bgColor="#463ACB"
            textColor="#fff"
          >
            <Link to="contact" smooth={true} duration={500}>
              Get In Touch
            </Link>
          </Button>
        </div>
      )}
    </>
  )
}