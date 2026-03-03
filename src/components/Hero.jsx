import React from 'react';
import Button from './Button';
import { Link as ScrollLink } from 'react-scroll';
import Nav from './Nav';
import AJbg from '../assets/imgs/AJbg.jpeg'; // Adjust the import path based on your file location

function Hero() {
  return (
    <div id='hero' className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Image with parallax effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 animate-ken-burns"
          style={{ 
            backgroundImage: `url(${AJbg})`,
          }}
        />
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fc]/90 via-[#f8f9fc]/80 to-[#f8f9fc]/90"></div>
        
        {/* Animated overlay effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#463acb]/10 to-transparent animate-pulse-slow"></div>
        
        {/* Light leak effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-[#463acb]/10 animate-light-leak"></div>
      </div>

      {/* Animated floating particles */}
      <div className="absolute inset-0 z-1 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#463acb]/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-particle ${10 + i * 2}s linear infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <Nav />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in mt-10">
       
        
        {/* Name with gradient animation */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-slide-up">
          <span className="bg-gradient-to-r from-gray-900 via-[#463acb] to-gray-900 bg-[length:200%_auto] text-transparent bg-clip-text animate-gradient-x">
            codebyAJ
          </span>
        </h1>
        
        {/* Title */}
        <div className="relative mb-8 animate-fade-in-up animation-delay-200">
          <p className="text-xl sm:text-2xl text-gray-700 font-medium">
            Frontend Developer <span className="relative">
              <span className="absolute -inset-1 bg-[#463acb]/10 blur-md rounded-lg animate-pulse"></span>
              <span className="relative text-[#463acb]">&</span>
            </span> UI Engineer
          </p>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1">
            <div className="w-full h-full bg-gradient-to-r from-[#463acb] to-[#6b5ff0] rounded-full animate-pulse-slow"></div>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed bg-white/30 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-sm animate-fade-in-up animation-delay-400">
          I craft engaging digital experiences with clean code and modern design principles. 
          Specialized in React, JavaScript, and responsive web applications.
        </p>
        
        {/* Buttons */}
        <div className="flex sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up animation-delay-600">
          <ScrollLink 
            to="projects"
            smooth={true}
            offset={-70}
            duration={500}
            className="inline-block w-full sm:w-auto group"
          >
            <Button 
              hoverBgColor="#6b5ff0"
              className="w-full sm:w-auto px-8 py-3 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-[#463acb]/30"
            >
              <span className="flex items-center gap-2">
                View My Work
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Button>
          </ScrollLink>
          
          <ScrollLink 
            to="contact"
            smooth={true}
            offset={-70}
            duration={500}
            className="inline-block w-full sm:w-auto group"
          >
            <Button 
              bgColor='transparent' 
              textColor='black' 
              border={true} 
              borderColor="#e1e7ef"
              hoverBgColor="#e1e7ef"
              className="w-full sm:w-auto px-8 py-3 text-base font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                Get In Touch
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
            </Button>
          </ScrollLink>
        </div>

        {/* Enhanced Double Arrow Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block animate-fade-in-up animation-delay-1000">
          <ScrollLink
            to="about"
            smooth={true}
            offset={-70}
            duration={500}
            className="flex flex-col items-center cursor-pointer group"
          >
            {/* Double Arrows with glow effect */}
            <div className="relative">
              <div className="absolute -inset-4 bg-[#463acb]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <svg 
                className="w-5 h-5 text-gray-500 group-hover:text-[#463acb] transition-colors animate-bounce-soft" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
              </svg>
              <svg 
                className="w-5 h-5 text-gray-500 group-hover:text-[#463acb] transition-colors animate-bounce-soft -mt-3" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                style={{ animationDelay: '0.2s' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
              </svg>
            </div>
            <span className="text-xs text-gray-500 group-hover:text-[#463acb] transition-colors mt-1 font-medium tracking-widest uppercase">
              Scroll
            </span>
          </ScrollLink>
        </div>
      </div>

      <style jsx>{`
        @keyframes ken-burns {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 200% center; }
        }
        
        @keyframes float-particle {
          0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(100px) rotate(360deg); opacity: 0; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes light-leak {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); opacity: 0; }
          50% { transform: translateX(100%) translateY(100%) rotate(45deg); opacity: 0.5; }
          100% { transform: translateX(200%) translateY(200%) rotate(45deg); opacity: 0; }
        }
        
        @keyframes slide-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes slide-down {
          from { transform: translateY(-30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-soft {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(8px); opacity: 1; }
        }
        
        .animate-ken-burns {
          animation: ken-burns 20s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s linear infinite;
        }
        
        .animate-float-particle {
          animation: float-particle 15s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-light-leak {
          animation: light-leak 15s ease-in-out infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .animate-slide-down {
          animation: slide-down 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-bounce-soft {
          animation: bounce-soft 2s infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}

export default Hero;