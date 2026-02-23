import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

function Nav() {
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
        >
          <h1 className='font-bold text-2xl transition-colors duration-300'>
            code<span className='text-[#463acb]'>byAJ</span>
          </h1>
        </ScrollLink>
      </div>

      <nav id="nav">
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
    </div>
  );
}

export default Nav;
