import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='flex justify-between lg:px-15 px-5 py-7 bg-[#f8f9fc] font-serif fixed top-0 left-0 w-full z-50 shadow-sm'>
      <div>
        <ScrollLink 
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className='cursor-pointer'
          onClick={closeMenu}
        >
          <h1 className='font-bold text-2xl transition-colors duration-300'>
            code<span className='text-[#463acb]'>byAJ</span>
          </h1>
        </ScrollLink>
      </div>

      {/* Burger Icon for Mobile */}
      <button 
        className='lg:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none z-50'
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-[#463acb] transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-[#463acb] mt-1.5 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-[#463acb] mt-1.5 transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Desktop Navigation */}
      <nav id="nav" className='hidden lg:block'>
        <ul id="nav-links" className='flex justify-between gap-3 text-[#71717a]'>
          <li className='px-7'>
            <ScrollLink 
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='cursor-pointer hover:text-[#463acb] transition-colors duration-300'
              activeClass="text-[#463acb] font-semibold border-b-2 border-[#463acb] pb-1"
            >
              About
            </ScrollLink>
          </li>
          <li className='px-7'>
            <ScrollLink 
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='cursor-pointer hover:text-[#463acb] transition-colors duration-300'
              activeClass="text-[#463acb] font-semibold border-b-2 border-[#463acb] pb-1"
            >
              Skills
            </ScrollLink>
          </li>
          <li className='px-7'>
            <ScrollLink 
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='cursor-pointer hover:text-[#463acb] transition-colors duration-300'
              activeClass="text-[#463acb] font-semibold border-b-2 border-[#463acb] pb-1"
            >
              Projects
            </ScrollLink>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-[72px] left-0 w-full bg-[#f8f9fc] shadow-lg transition-all duration-300 ease-in-out z-40 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className='py-4'>
          <ul className='flex flex-col text-[#71717a]'>
            <li className='border-b border-gray-200'>
              <ScrollLink 
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='block px-5 py-4 hover:text-[#463acb] hover:bg-gray-50 transition-colors duration-300'
                activeClass="text-[#463acb] font-semibold bg-gray-50"
                onClick={closeMenu}
              >
                About
              </ScrollLink>
            </li>
            <li className='border-b border-gray-200'>
              <ScrollLink 
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='block px-5 py-4 hover:text-[#463acb] hover:bg-gray-50 transition-colors duration-300'
                activeClass="text-[#463acb] font-semibold bg-gray-50"
                onClick={closeMenu}
              >
                Skills
              </ScrollLink>
            </li>
            <li className='border-b border-gray-200'>
              <ScrollLink 
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='block px-5 py-4 hover:text-[#463acb] hover:bg-gray-50 transition-colors duration-300'
                activeClass="text-[#463acb] font-semibold bg-gray-50"
                onClick={closeMenu}
              >
                Projects
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
