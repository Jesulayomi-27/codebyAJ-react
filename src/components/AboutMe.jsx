import React from 'react'
import myImage from '../assets/pic.png';

export default function AboutMe() {
  return (
    <div id='about' className='w-full max-w-[1119px] mx-auto h-auto bg-[#F9F9F9] mt-6 md:mt-16 rounded-[20px] md:rounded-[40px] border border-[#D9D9D9] shadow-[0px_6px_12px_0px_#0000000D] flex flex-col md:flex-row p-4 sm:p-6 md:pl-8 gap-6 md:gap-8'>
        
        {/* TEXT */}
        <div className='pt-2 md:pt-9 w-full'>
            <p className='font-outfit font-bold text-2xl sm:text-3xl md:text-[43px] leading-tight md:leading-[31px] text-[#463ACB]'>
              About Me
            </p>

            <div className='font-outfit font-bold text-sm sm:text-base md:text-lg leading-[26px] w-full md:w-[478px] mt-4 md:mt-6'>
              Frontend Developer focused on creating impactful user experiences

              <p className='font-outfit font-normal text-sm sm:text-base leading-[26px] w-full md:w-[478px] mt-2 md:mt-3'>
                With a passion for clean code and modern UI design, I transform ideas into seamless, responsive web applications. My expertise lies in building interactive interfaces that prioritize user experience while maintaining optimal performance.
              </p>
            </div>

            <div className='font-outfit mb-2 text-sm sm:text-base md:text-lg leading-[26px] mt-4'>
                <h3 className='font-bold'>Personal info</h3>
                <p className='text-sm sm:text-base'>
                    Based in Lagos State, Nigeria. Available for freelance and full-time opportunities.
                </p>
            </div>

            <div className='font-outfit mb-2 text-sm sm:text-base md:text-lg leading-[26px] mt-4'>
                <h3 className='font-bold'>Experience</h3>
                <p className='text-sm sm:text-base'>
                    3+ years creating modern web applications for startups companies
                </p>
            </div>

            <div className='font-outfit mb-2 text-sm sm:text-base md:text-lg leading-[26px] mt-4'>
                <h3 className='font-bold'>Education</h3>
                <p className='text-sm sm:text-base'>
                    Bachelor's in Mathematics. Continuous learner through industry certifications.
                </p>
            </div>
        </div>

        {/* IMAGE */}
        <div className='w-full flex justify-center md:justify-end'>
            <img 
              className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[656px] h-auto md:h-[533px] object-cover rounded-[20px] md:rounded-[30px]" 
              src={myImage} 
              alt="avatar" 
            />
        </div>
    </div>
  )
}
