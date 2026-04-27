import React from 'react'
import Nav from './Nav'
import myImage from '../assets/heroImg.png';
import Button from './Button';
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <div className='px-4 sm:px-8 md:px-12 pt-8 bg-[#EBE9F9] text-center rounded-br-[60px] sm:rounded-br-[80px] md:rounded-br-[100px] rounded-bl-[60px] sm:rounded-bl-[80px] md:rounded-bl-[100px]'>
        <Nav />
        <p className="font-['Outfit'] font-extrabold text-[40px] sm:text-[60px] md:text-[90px] leading-tight md:leading-[103px] tracking-[-0.03em] text-center mt-8">codebyAJ <br />
            <span className='font-jakarta italic'>Frontend Developer</span> <br />
            <span className='font-jakarta italic'> & </span>
            <span className='font-jakarta italic text-[#463ACB]'>UI Engineer</span>
        </p>

        <div className='flex flex-col md:flex-row items-center'>
            <img className="hidden md:block w-[339px] h-[308px] relative left-[-14px]" src={myImage} alt="avatar" />
            <div className='w-full max-w-[663px] md:h-[203px] md:absolute md:left-[359px] mt-6 md:mt-0 px-4'>
              <p className="font-outfit font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[140%] text-center">I craft engaging digital experiences with clean code and modern design principles. Specialized in React, JavaScript, and responsive web applications.</p>
              <Button  className='mt-8 mb-5'>
                <Link to="portfolio" smooth={true} duration={500}>
                View My Work
                </Link>
              </Button>
              <Button
              bgColor='#EBE9F9'
              textColor='#111204'
              border
              borderColor='#00000059'
              hoverBgColor='#f3f4f6'
              >
                <Link to="contact" smooth={true} duration={500}>
                 Get In Touch
                </Link>
              </Button>
            </div>
        </div>
      
    </div>
  )
}