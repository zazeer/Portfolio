import React from 'react';
import Image from 'next/image';
import { MuseoModerno } from '@next/font/google';

const museoModerno = MuseoModerno({
  subsets: ['latin'],
  weight: ['400', '700'], 
});

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
    
      <div className='md:w-1/2 w-full z-20 flex flex-col'>
        <div className='text-justify md:h-2/3 md:mt-0 mt-20 w-full flex flex-col items-start justify-center'>
            <h1 className='md:text-6xl text-3xl md:mx-0 mx-auto'>About Me</h1>
            <p className='md:text-xl text-ml mr-10 ml-10 md:ml-0 mt-6'>
              Hi! I’m <span className='text-fuchsia-300'>Reza</span>, a Computer Science student from BINUS University with a strong passion for <span className='text-fuchsia-300'>web and application development</span>. Through the lessons I’ve learned and the projects I’ve worked on, I have a solid foundation in coding and problem-solving. 
              <br />
              <br />
              I thrive in <span className='text-fuchsia-300'>collaborative environments</span> and value the power of effective communication in achieving project success. I'm eager to leverage my skills and knowledge to contribute to innovative projects and continue my professional growth in the field of web and application development
            </p>
        </div>
        <div className='md:h-1/2 md:mt-0 md:mb-0 mt-10 mb-10 text-justify'>
          {/* outside */}
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            {/* Innner */}
            <div className="flex w-[14rem] aspect-square m-auto border border-n-6 rounded-full ">
              <div className="w-[5rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full bg-gradient-to-r from-red-700 via-orange-600 to-yellow-400 bg-300% animate-gradient">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full"></div>
              </div>
            </div>

            <ul>
              {/* Java */}
              {/* Jarak outer ke inti */}
              <li className="absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-0">
                <div className="relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-0 bg-white">
                  <img
                    className="m-auto hover:scale-110 transition-transform duration-300"
                    layout="responsive" 
                    width={40}
                    height={40}
                    alt="Java"
                    src="images/java_logo.png"
                  />
                </div>
              </li>

              {/* C languange */}
              <li className="absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-45">
                <div className="relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-45 bg-white">
                  <img
                    className="m-auto hover:scale-110 transition-transform duration-300"
                    width={40}
                    height={40}
                    alt="C languange"
                    src="/images/c_logo.png"
                  />
                </div>
              </li>

              {/* React */}
              <li className="absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-90">
                <div className="relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-90 bg-white">
                  <img
                    className="m-auto hover:scale-110 transition-transform duration-300"
                    width={32}
                    height={32}
                    alt="React"
                    src="images/react_logo_black.png"
                  />
                </div>
              </li>

              {/* MySQL */}
              <li className="absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-180">
                <div className="relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-180 bg-white">
                  <img
                    className="m-auto hover:scale-110 transition-transform duration-300"
                    width={48}
                    height={48}
                    alt="MySQL"
                    src="images/mysql_logo.png"
                  />
                </div>
              </li>

              {/* ASP.NET*/}
              <li className="absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom -rotate-90">
                <div className="relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl rotate-90 bg-white">
                  <img
                    className="m-auto hover:scale-110 transition-transform duration-300"
                    width={40}
                    height={40}
                    alt="ASP.NET"
                    src="images/asp.net_logo.png"
                  />
                </div>
              </li>
            
            </ul>
          </div>
        </div>
    </div>
  </div>
  );
}

export default About;