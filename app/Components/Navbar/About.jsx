import React from 'react';
import Image from 'next/image';

function About() {
  return (
    <div className="bg-[#030014] min-h-screen text-white flex overflow-hidden flex-wrap ">
      <div className='absolute'>
          
      </div>
      <div className='md:w-1/2 z-30 md:mt-auto'>
          <Image 
            src="/images/Reza Photo.png" 
            width={700} 
            height={700} 
            alt="Reza" 
          />    
      </div>
      <div className='md:w-1/2 z-20 flex flex-col'>
        <div className='text-justify md:h-2/3 flex flex-row items-center bg-green-500'>
          <h1 className='text-6xl'> About Me</h1>
          <p className=' text-xl mr-10 mt-10'>
            Hi! I’m Reza, a Computer Science student from BINUS University with a strong passion for web and application development. Through the lessons I’ve learned and the projects I’ve worked on, I have a solid foundation in coding and problem-solving. 
            <br />
            <br />
            I thrive in collaborative environments and value the power of effective communication in achieving project success. I'm eager to leverage my skills and knowledge to contribute to innovative projects and continue my professional growth in the field of web and application development
          </p>
        </div>
        <div className='md:h-1/3 text-justify bg-blue-600'>
        <h1 className='text-6xl'> About Me</h1>
        <p className='text-xl mr-10 mt-10'>
            Hi! I’m Reza, a Computer Science student from BINUS University with a strong passion for web and application development. Through the lessons I’ve learned and the projects I’ve worked on, I have a solid foundation in coding and problem-solving. 
            <br />
            <br />
            I thrive in collaborative environments and value the power of effective communication in achieving project success. I'm eager to leverage my skills and knowledge to contribute to innovative projects and continue my professional growth in the field of web and application development
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;