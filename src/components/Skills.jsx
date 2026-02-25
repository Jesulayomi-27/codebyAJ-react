import React from 'react'

function Skills() {
    const frontendSkills = [
    { name: 'HTML', percentage: 95 },
    { name: 'CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'ReactJS', percentage: 90 }
  ];

  const additionalSkills = [
    { name: 'BootStrap', percentage: 95 },
    { name: 'Responsive Design', percentage: 90 }
  ];

  const techTools = ['HTML', 'CSS', 'JavaScript', 'BootStrap', 'ReactJS'];
  return (
    <div id='skills' className='py-20 font-serif bg-[#f8f9fc]'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold leading-[2]'>My Skills</h1>
        <p className='text-[#71717a]'>What I bring to the table</p>
      </div>
     
      {/* Frontend Skills and Additional Skills - Flex container */}
      <div className="lg:flex justify-between gap-8 mb-10 px-5 lg:px-15 mt-15">
        {/* Frontend Skills */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-6">Frontend Development</h3>
          <div className="space-y-6">
            {frontendSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-gray-700 font-medium">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-blue-700 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-6 mt-9 lg:mt-0">Additional Skills</h3>
          <div className="space-y-6">
            {additionalSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-gray-700 font-medium">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-blue-700 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies & Tools */}
      <div className='place-items-center'>
        <h3 className="px-4 text-xl font-semibold mb-4">Technologies & Tools</h3>
        <div className="flex flex-wrap gap-3 px-5 ">
          {techTools.map((tool) => (
            <span 
              key={tool}
              className="px-4 py-2 bg-white rounded-full font-medium hover:bg-[#6b5ff0] hover:text-white transition-all duration-300 cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Skills
