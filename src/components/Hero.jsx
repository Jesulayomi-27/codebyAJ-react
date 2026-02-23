import React from 'react';
import Button from './Button';
import { Link as ScrollLink } from 'react-scroll';

function Hero() {
  return (
    <div id='hero' className="min-h-screen bg-gradient-to-b from-[#f8f9fc] to-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Greeting */}
        <p className="text-[#463acb] font-medium text-lg mb-4 tracking-wide">
          👋 Hello, I'm
        </p>
        
        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
          codebyAJ
        </h1>
        
        {/* Title */}
        <div className="relative mb-8">
          <p className="text-xl sm:text-2xl text-gray-600 font-medium">
            Frontend Developer <span className="text-[#463acb]">&</span> UI Engineer
          </p>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#463acb]/20 rounded-full"></div>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          I craft engaging digital experiences with clean code and modern design principles. 
          Specialized in React, JavaScript, and responsive web applications.
        </p>
        
        {/* Buttons */}
        <div className="flex sm:flex-row gap-4 justify-center items-center mb-16">
          <ScrollLink 
            to="projects"
            smooth={true}
            offset={-70}
            duration={500}
            className="inline-block w-full sm:w-auto"
          >
            <Button 
              hoverBgColor="#6b5ff0"
              className="w-full sm:w-auto px-8 py-3 text-base font-medium shadow-lg hover:shadow-xl"
            >
              View My Work
            </Button>
          </ScrollLink>
          
          <ScrollLink 
            to="contact"
            smooth={true}
            offset={-70}
            duration={500}
            className="inline-block w-full sm:w-auto"
          >
            <Button 
              bgColor='transparent' 
              textColor='black' 
              border={true} 
              borderColor="#e1e7ef"
              hoverBgColor="#e1e7ef"
              className="w-full sm:w-auto px-8 py-3 text-base font-medium"
            >
              Get In Touch
            </Button>
          </ScrollLink>
        </div>

        {/* Scroll Down Indicator */}
       {/* Scroll Down Indicator - Double Arrows */}
<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
  <ScrollLink
    to="about"
    smooth={true}
    offset={-70}
    duration={500}
    className="flex flex-col items-center cursor-pointer group"
  >
    <svg className="w-5 h-5 text-gray-400 group-hover:text-[#463acb] transition-colors animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
    </svg>
    <svg className="w-5 h-5 text-gray-400 group-hover:text-[#463acb] transition-colors -mt-3 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
    </svg>
    <span className="text-xs text-gray-400 group-hover:text-[#463acb] transition-colors mt-1">
      Scroll
    </span>
  </ScrollLink>
</div>
      </div>
    </div>
  );
}

export default Hero;
