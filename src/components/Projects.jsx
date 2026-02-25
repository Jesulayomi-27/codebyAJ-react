import React from 'react'
import laptop1 from '../assets/imgs/laptop1.png'; // Adjust path based on your structure
import laptop2 from '../assets/imgs/laptop2.png';
import laptop3 from '../assets/imgs/laptop3.png';

function Projects() {
    const projects = [
    {
      id: 1,
      name: "Portfolio",
      image: laptop1,
      note: "A fully responsive admin dashboard with dark/light mode, data visualization and advanced UI components",
      liveUrl: "https://ayo-akin.vercel.app", // Unique live demo link
      codeUrl: "https://github.com/Jesulayomi-27/ayo-akin" // Unique code link
    },
    {
      id: 2,
      name: "Recipe App",
      image: laptop2,
      note: "A full-stack recipe management application, featuring a modern web interface for discovering, saving, and organizing recipes.",
      liveUrl: "https://recipe-app-rust-one.vercel.app/",
      codeUrl: "https://github.com/Jesulayomi-27/Recipe-App"
    },
    // {
    //   id: 3,
    //   name: "PortfolioX Builder",
    //   image: laptop3,
    //   note: "A fully responsive admin dashboard with dark/light mode, data visualization and advanced UI components",
    //   liveUrl: "https://portfoliox-demo.example.com",
    //   codeUrl: "https://github.com/yourusername/portfoliox"
    // },
    // {
    //   id: 4,
    //   name: "PortfolioX Builder", // You might want to change this name since it's a duplicate
    //   image: laptop3,
    //   note: "A fully responsive admin dashboard with dark/light mode, data visualization and advanced UI components",
    //   liveUrl: "https://another-project-demo.example.com",
    //   codeUrl: "https://github.com/yourusername/another-project"
    // },
  ];

  return (
    <div id='projects' className='py-20 font-serif'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold leading-[2]'>Featured Projects</h1>
        <p className='text-[#71717a]'>Showcasing my recent work</p>
      </div>
      <div className="container2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 py-6 px-5 lg:px-15">
      {projects.map((project) => (
        <div 
          key={project.id} 
          className="box1 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <img 
            src={project.image} 
            alt={project.name}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
          
          <div className="p-5">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {project.name}
            </h3>
            
            <p className="text-gray-600 mb-4 line-clamp-3">
              {project.note}
            </p>
            
            <div className="flex gap-3">
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-[#463acb] text-sm font-medium hover:underline"
              >
                Live Demo
              </a>
              
              <a 
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="viewCode"
                className="flex-1 text-[#463acb] text-center text-sm font-medium hover:underline"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
      
    </div>
  )
}

export default Projects
