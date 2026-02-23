import React from 'react'
import laptop from "../assets/imgs/laptop.avif";
import Button from './Button';
import { Link as ScrollLink } from 'react-scroll';

function About() {
  return (
    <section id='about' className='py-20 font-serif'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold leading-[2]'>About Me</h1>
        <p className='text-[#71717a]'>Get to know me better</p>
      </div>
      <div className='lg:flex justify-between lg:px-15 mt-10 px-5'>
        <div className='lg:w-[48%]'>
          <img src={laptop} alt="laptop" className='w-[100%] rounded-xl' />
        </div>
        <div className='lg:w-[48%] mt-3'>
          <h1 className='font-bold text-xl'>Frontend Developer focused on creating impactful user experiences</h1>
          <p className='mt-4 text-[#71717a]'>With a passion for clean code and modern UI design, I transform ideas into seamless, responsive web applications. My expertise lies in building interactive interfaces that prioritize user experience while maintaining optimal performance.</p>
            {/* Personal Info Header */}
            <div className="mb-6 mt-8">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#463acb]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-800">Personal Info</h3>
              </div>
               <p className="text-gray-600 ml-8">
                Based in <span className="font-semibold text-gray-800">Lagos State, Nigeria</span>.
                 Available for freelance and full-time opportunities.
               </p>
            </div>
            
            {/* Experience Section */}
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#463acb]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-800">Experience</h3>
              </div>
              <p className="text-gray-600 ml-8">
                <span className="font-bold text-[#463acb]">4+ years</span> creating modern web applications for startups and established companies
              </p>
            </div>
            
            {/* Education Section */}
            <div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#463acb]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L6.394 9.63l6.212 2.662a1 1 0 00.788 0l7-3a1 1 0 000-1.84l-7-3zM14 6.855v.001M5.25 10.051l-1.5.643v4.802A5.998 5.998 0 0010 17.354a5.998 5.998 0 006.25-1.858v-4.802l-1.5-.643-4.25 1.822a2 2 0 01-1.788 0l-4.25-1.822z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-800">Education</h3>
              </div>
              <p className="text-gray-600 ml-8">
                Bachelor's in Mathematics. Continuous learner through industry certifications.
              </p>
            </div>
            
            <ScrollLink 
                        to="contact"
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="inline-block w-full sm:w-auto"
                      >
                        <Button hoverBgColor="#6b5ff0">Contact Me</Button>
                      </ScrollLink>
            
        </div>
      </div>
    </section>
  )
}

export default About
