"use client";
import React from 'react'
import Head from "next/head"; 
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Typewriter from 'typewriter-effect';
import Rnavbar from './Components/Navbar/Navbar';
import Video from './Components/Navbar/Video';
import About from './Components/Navbar/About';
import Project from './Components/Navbar/Projects';
import Link from 'next/link';
import { MuseoModerno } from 'next/font/google';

const museoModerno = MuseoModerno({
  subsets: ['latin'],
  weight: ['400', '700'], 
});

export default function Home() {

  return (
    <div>
      <Head>
        <title>Reza Tafazzul Portfolio</title>
      </Head>

      <main className="h-full w-ful">
        <Rnavbar />

        {/* home */}
        <section id="home" className="bg-[#030014] min-h-screen text-white">
          <div className="flex">
            <div className="px-10 min-h-screen flex items-center justify-center">
              {/* video */}
              <div>
                <Video />
              </div>
              <div className="pt-40 z-[20]">
                {/* name */}
                <h2
                  className={`${museoModerno.className} md:text-9xl font-bold text-3xl`}
                >
                  Reza Tafazzul Zaheer
                </h2>

                {/* Auto Typing */}
                <h2 className="md:text-8xl text-2xl mt-2 pb-6 font-bold bg-gradient-to-r from-violet-700 via-purple-400 to-fuchsia-300 text-transparent bg-clip-text bg-300% animate-gradient">
                  <Typewriter
                    options={{
                      strings: ["Web Developer", "Application Developer"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h2>

                {/* CV button */}
                <div className="mb-6 flex flex-row">
                  <a
                    href="#projects"
                    className="relative inline-flex items-center justify-center px-6 py-3 md:px-12 md:py-5 md:mr-5 mr-3 font-bold text-white rounded-md shadow-2xl group"
                  >
                    <span className="absolute inset-0 w-full h-full transition rounded-md duration-100 ease-out opacity-0 bg-gradient-to-r from-sky-500 via-blue-500 to-green-400 bg-300% animate-gradient group-hover:opacity-100"></span>
                    <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                    <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                    <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                    <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                    <span className="absolute inset-0 w-full h-full border border-white rounded-md"></span>

                    <span className="relative md:text-xl text-xs text-center justify-center">
                      Discover my work
                    </span>
                  </a>
                  <div>
                    <Link href="https://drive.google.com/file/d/18wiIvVTIAdk8NKIQVjsGMIa18BRCItnd/view?usp=drive_link">
                      <button className="relative inline-flex items-end justify-end px-4 py-3 md:px-9 md:py-5 font-bold text-white rounded-md shadow-2xl bg-gradient-to-r from-sky-500 via-blue-500 to-[#06b6d4] bg-300% animate-gradient">
                        <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                        <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                        <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                        <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                        <span className="absolute inset-0 w-full h-full border border-white rounded-md"></span>

                        <span className="relative md:text-xl text-xs text-center justify-center">
                          CV
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>

                {/* media social */}
                <div className="md:mt-10 md:text-6xl md:space-x-10 text-3xl space-x-3 flex ">
                  <span className="transform hover:text-gradient transition duration-500 hover:scale-125 hover:text-purple-400 flex justify-center items-center">
                    <Link href="https://instagram.com/reza.tafaz">
                      <AiFillInstagram />
                    </Link>
                  </span>
                  <span className="transform hover:text-gradient transition duration-500 hover:scale-125 hover:text-purple-400 flex justify-center items-center">
                    <Link href="https://linkedin.com/in/reza-tafazzul">
                      <AiFillLinkedin />
                    </Link>
                  </span>
                  <span className="transform hover:text-gradient transition duration-500 hover:scale-125 hover:text-purple-400 flex justify-center items-center">
                    <Link href="https://github.com/zazeer">
                      <AiFillGithub />
                    </Link>
                  </span>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* About*/}
        <section id="about">
          <About />
        </section>

        {/* Projects*/}
        <section id="projects">
          <Project />
        </section>
      </main>
    </div>
  );
}
