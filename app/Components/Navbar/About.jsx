import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="bg-[#030014] min-h-screen text-white flex flex-wrap">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='md:w-1/2 w-full z-30 mt-auto md:min-h-screen h-auto flex justify-center items-center'
      >
        <div className="relative w-[16rem] h-[16rem] md:w-[28rem] md:h-[28rem] flex justify-center items-center group mt-10 md:mt-0">
          {/* Corner Brackets */}
          <div className="absolute top-0 left-0 w-8 h-8 md:w-16 md:h-16 border-t-[3px] border-l-[3px] md:border-t-4 md:border-l-4 border-fuchsia-500 rounded-tl-xl transition-all duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:border-indigo-400 shadow-[-5px_-5px_15px_rgba(217,70,239,0.3)]"></div>
          <div className="absolute top-0 right-0 w-8 h-8 md:w-16 md:h-16 border-t-[3px] border-r-[3px] md:border-t-4 md:border-r-4 border-fuchsia-500 rounded-tr-xl transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:border-indigo-400 shadow-[5px_-5px_15px_rgba(217,70,239,0.3)]"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 md:w-16 md:h-16 border-b-[3px] border-l-[3px] md:border-b-4 md:border-l-4 border-fuchsia-500 rounded-bl-xl transition-all duration-500 group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:border-indigo-400 shadow-[-5px_5px_15px_rgba(217,70,239,0.3)]"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 md:w-16 md:h-16 border-b-[3px] border-r-[3px] md:border-b-4 md:border-r-4 border-fuchsia-500 rounded-br-xl transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:border-indigo-400 shadow-[5px_5px_15px_rgba(217,70,239,0.3)]"></div>

          <div className="relative w-[88%] h-[88%] overflow-hidden rounded-full shadow-[0_0_40px_rgba(217,70,239,0.15)] bg-[#030014] border border-white/10 group-hover:border-indigo-400/50 transition-colors duration-500">
            {/* Radar Ring */}
            <div className="absolute inset-0 m-2 md:m-3 border-[2px] border-dashed border-fuchsia-400/40 rounded-full group-[&]:animate-[spin_40s_linear_infinite] group-hover:animate-[spin_15s_linear_infinite] z-20 pointer-events-none group-hover:border-indigo-400/60 transition-all duration-500"></div>

            <Image
              src="/images/Reza Photo.png"
              layout='fill'
              objectFit="cover"
              alt="Reza Photo"
              className="z-0 object-center grayscale-[20%] hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-110"
            />

            {/* Soft neon overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-indigo-500/10 z-10 pointer-events-none mix-blend-overlay"></div>
          </div>
        </div>


      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='md:w-1/2 w-full z-20 flex flex-col justify-center min-h-screen px-10 md:pr-20 md:px-0 pb-10 md:pb-0'
      >
        <div className='text-justify w-full flex flex-col items-start justify-center'>
          <h1 className='md:text-6xl text-4xl md:mx-0 mx-auto font-bold bg-gradient-to-r from-fuchsia-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text bg-300% animate-gradient'>About Me</h1>
          <p className='md:text-xl text-lg md:ml-0 mt-6 md:mt-10 leading-relaxed text-white'>
            Hi! I’m <span className='text-white font-bold'>Reza</span>, a Computer Science graduate from BINUS University with a strong interest in <span className='text-white font-bold'>application development</span> and <span className='text-white font-bold'>system design</span>. I have experience building and maintaining web applications, focusing on system reliability, performance, and problem solving, with additional experience in developing intelligent features using Retrieval-Augmented Generation (RAG) and large language models.
            <br />
            <br />
            I enjoy solving real-world problems through technology and building applications that are <span className='text-white font-bold'>scalable</span>, <span className='text-white font-bold'>reliable</span>, and <span className='text-white font-bold'>efficient</span>. I’m particularly interested in developing software that helps automate workflows and improve productivity.
            <br />
            <br />
            I thrive in <span className='text-white font-bold'>collaborative environments</span> and am always eager to learn, grow, and contribute to <span className='text-white font-bold'>impactful projects</span>.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default About;