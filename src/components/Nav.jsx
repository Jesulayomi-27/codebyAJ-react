import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close menu when link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div 
        className={`flex justify-between lg:px-15 px-5 py-7 font-serif fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
            : 'bg-transparent shadow-sm'
        }`}
      >
        {/* Logo */}
        <div>
          <ScrollLink 
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='cursor-pointer'
            onClick={handleLinkClick}
          >
            <h1 className={`font-bold text-2xl transition-all duration-300 ${
              scrolled ? 'text-gray-900' : 'text-gray-900'
            }`}>
              code<span className='text-[#463acb]'>byAJ</span>
            </h1>
          </ScrollLink>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav id="nav" className='hidden lg:block'>
          <ul id="nav-links" className='flex justify-between gap-3'>
            {['About', 'Skills', 'Projects'].map((item) => (
              <li key={item} className='px-7'>
                <ScrollLink 
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`cursor-pointer transition-all duration-300 hover:text-[#463acb] ${
                    scrolled ? 'text-gray-700' : 'text-gray-900'
                  }`}
                  activeClass="text-[#463acb] font-semibold border-b-2 border-[#463acb] pb-1"
                >
                  {item}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Burger Menu Button - Visible on mobile */}
        <button 
          className={`lg:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-50 ${
            scrolled ? 'text-gray-900' : 'text-gray-900'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'rotate-45 translate-y-1.5 bg-[#463acb]' : ''
          } ${scrolled ? 'bg-gray-900' : 'bg-black'}`}></span>
          <span className={`block w-6 h-0.5 mt-1.5 transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-0' : ''
          } ${scrolled ? 'bg-gray-900' : 'bg-black'}`}></span>
          <span className={`block w-6 h-0.5 mt-1.5 transition-all duration-300 ease-in-out ${
            isMenuOpen ? '-rotate-45 -translate-y-1.5 bg-[#463acb]' : ''
          } ${scrolled ? 'bg-gray-900' : 'bg-black'}`}></span>
        </button>
      </div>

      {/* Mobile Menu - White dropdown style */}
      <div 
        className={`lg:hidden fixed left-0 right-0 transition-all duration-500 ease-in-out z-40 ${
          isMenuOpen 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible -translate-y-4'
        }`}
        style={{ top: '90px' }}
      >
        {/* White menu card */}
        <div className="bg-white shadow-2xl border border-gray-100 overflow-hidden w-full">
        
          
          {/* Menu Items */}
          <nav className="py-4">
            <ul className="flex flex-col">
              {['About', 'Skills', 'Projects'].map((item, index) => (
                <li key={item} className="overflow-hidden">
                  <ScrollLink 
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="block px-6 py-4 cursor-pointer group relative"
                    activeClass="text-[#463acb] font-semibold"
                    onClick={handleLinkClick}
                    style={{
                      animation: isMenuOpen ? `fadeInRight 0.3s ease-out ${index * 0.1}s forwards` : 'none',
                      opacity: 0,
                    }}
                  >
                    {/* Hover background effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#463acb]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="relative flex items-center justify-between">
                      <span className="text-gray-700 group-hover:text-[#463acb] transition-colors duration-300 font-medium">
                        {item}
                      </span>
                      
                      {/* Arrow icon */}
                      <svg 
                        className="w-5 h-5 text-gray-400 group-hover:text-[#463acb] group-hover:translate-x-1 transition-all duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    
                    {/* Animated border */}
                    <div className="absolute bottom-0 left-6 right-6 h-px bg-gray-100"></div>
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>

        </div>

        {/* Small arrow pointing up */}
        <div className="absolute -top-2 right-8 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-100"></div>
      </div>

      <style jsx>{`
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}

export default Nav;