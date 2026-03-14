import React from 'react';
import Image from 'next/image';

function About() {
  return (
    <div className="bg-[#030014] min-h-screen text-white flex flex-wrap">
      <div className='md:w-1/2 w-full z-30 mt-auto md:min-h-screen h-auto flex justify-center items-center'>
        <div className="w-[15rem] h-[15rem] md:w-[28rem] md:h-[28rem]">
          <Image
            src="/images/Reza Photo.png"
            layout='intrinsic'
            width={500}
            height={500}
            alt="Reza Photo"
            className="rounded-full shadow-[0_0_20px_10px_rgba(240,171,252,0.8)] animate-glowing-shadow"
          />
        </div>


      </div>

      <div className='md:w-1/2 w-full z-20 flex flex-col justify-center min-h-screen px-10 md:pr-20 md:px-0 pb-10 md:pb-0'>
        <div className='text-justify w-full flex flex-col items-start justify-center'>
          <h1 className='md:text-6xl text-4xl md:mx-0 mx-auto font-bold'>About Me</h1>
          <p className='md:text-xl text-lg md:ml-0 mt-6 md:mt-10 leading-relaxed text-gray-300'>
            Hi! I’m <span className='text-fuchsia-400 font-semibold'>Reza</span>, a Computer Science student from BINUS University with a strong passion for <span className='text-fuchsia-400 font-semibold'>web and application development</span>. Through the lessons I’ve learned and the projects I’ve worked on, I have a solid foundation in coding and problem-solving.
            <br />
            <br />
            I thrive in <span className='text-fuchsia-400 font-semibold'>collaborative environments</span> and value the power of effective communication in achieving project success. I&apos;m eager to leverage my skills and knowledge to contribute to innovative projects and continue my professional growth in the field of web and application development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;