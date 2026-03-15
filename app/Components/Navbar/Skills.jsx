import React from 'react';
import Image from 'next/image';

function Skills() {
    return (
        <div className="bg-[#030014] min-h-screen text-white flex flex-wrap items-center overflow-hidden">
            {/* Text */}
            <div className="md:w-1/2 w-full z-20 flex flex-col justify-center px-6 sm:px-12 md:pl-20 pt-24 md:pt-0 items-center md:items-start text-center md:text-left">
                <h1 className="md:text-6xl text-4xl sm:text-5xl mb-4 sm:mb-6 font-bold bg-gradient-to-r from-fuchsia-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text bg-300% animate-gradient">What I do</h1>
                <p className="md:text-xl text-base sm:text-lg text-gray-300 mb-8 sm:mb-10 w-full leading-relaxed">
                    I build full-stack web applications and work across both frontend and backend to create practical and scalable systems. I’m also interested in exploring different areas of software development.
                    <br /><br />In addition, I work with AI systems such as retrieval-augmented generation (RAG), combining large language models and vector databases to develop more intelligent applications.
                </p>

                <h1 className="md:text-6xl text-4xl sm:text-5xl mb-4 sm:mb-6 font-bold bg-gradient-to-r from-fuchsia-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text bg-300% animate-gradient">Skills</h1>
                <ul className="flex flex-col gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md md:max-w-full mx-auto md:mx-0 text-left">
                    {[
                        "REST API Development",
                        "CI/CD & Containerization (Docker)",
                        "Retrieval-Augmented Generation (RAG)",
                        "Prompt Engineering",
                        "Vector Search",
                        "Database Design"
                    ].map((skill, index) => (
                        <li key={index} className="flex items-center text-gray-300 md:text-xl text-sm sm:text-base leading-snug">
                            {/* Animated Abstract Bullet */}
                            <div className="relative w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 flex-shrink-0 flex items-center justify-center">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.9)]"></div>

                                <div className="absolute w-full h-full animate-[spin_3s_linear_infinite]">
                                    <div className="absolute top-0 left-1/2 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full -translate-x-1/2 opacity-80 shadow-[0_0_5px_rgba(255,255,255,0.6)]"></div>
                                </div>

                                <div className="absolute w-[75%] h-[75%] animate-[spin_5s_linear_infinite_reverse]">
                                    <div className="absolute bottom-0 right-0 w-1 h-1 bg-white rounded-full opacity-60 shadow-[0_0_4px_rgba(255,255,255,0.5)]"></div>
                                </div>

                                <div className="absolute w-[50%] h-[50%] animate-[spin_4s_linear_infinite]">
                                    <div className="absolute -left-0.5 top-1/2 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full opacity-90 shadow-[0_0_5px_rgba(255,255,255,0.7)]"></div>
                                </div>
                            </div>
                            <span className="break-words">{skill}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tech Stack */}
            <div className="md:w-1/2 w-full z-30 flex justify-center items-center h-[60vh] md:min-h-screen">
                <div className="relative flex items-center justify-center scale-50 sm:scale-75 md:scale-90 lg:scale-100 mt-10 md:mt-0">

                    {/* Central*/}
                    <div className="absolute z-10 w-[5rem] h-[5rem] rounded-full shadow-[0_0_60px_15px_rgba(245,158,11,0.5)]">
                        <div className="w-full h-full bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 rounded-full bg-300% animate-gradient"></div>
                    </div>

                    {/* Very Inner Orbit*/}
                    <div className="absolute w-[18rem] h-[18rem] border border-white/20 rounded-full shadow-[0_0_20px_rgba(156,163,175,0.05)] animate-spin-slow-reverse">
                        <ul className="w-full h-full relative">
                            {/* Sql server */}
                            <li className="absolute top-0 left-1/2 h-1/2 -ml-[1.5rem] origin-bottom rotate-0">
                                <div className="relative -top-[1.5rem] w-[3rem] h-[3rem] rotate-0">
                                    <div className="w-full h-full bg-white border shadow-lg border-gray-200/20 rounded-xl flex items-center justify-center animate-spin-slow">
                                        <Image className="m-auto hover:scale-125 transition-transform duration-300" width={32} height={32} alt="Sql server" src="/images/sql_server_logo.svg" />
                                    </div>
                                </div>
                            </li>
                            {/* Postgre */}
                            <li className="absolute top-0 left-1/2 h-1/2 -ml-[1.5rem] origin-bottom rotate-[90deg]">
                                <div className="relative -top-[1.5rem] w-[3rem] h-[3rem] -rotate-[90deg]">
                                    <div className="w-full h-full bg-white border shadow-lg border-gray-200/20 rounded-xl flex items-center justify-center animate-spin-slow">
                                        <Image className="m-auto hover:scale-125 transition-transform duration-300" width={32} height={32} alt="Postgre" src="/images/postgre_logo.svg" />
                                    </div>
                                </div>
                            </li>
                            {/* Weaviate */}
                            <li className="absolute top-0 left-1/2 h-1/2 -ml-[1.5rem] origin-bottom rotate-[180deg]">
                                <div className="relative -top-[1.5rem] w-[3rem] h-[3rem] -rotate-[180deg]">
                                    <div className="w-full h-full bg-white border shadow-lg border-gray-200/20 rounded-xl flex items-center justify-center animate-spin-slow">
                                        <Image className="m-auto hover:scale-125 transition-transform duration-300" width={32} height={32} alt="Weaviate" src="/images/weaviate_logo.svg" />
                                    </div>
                                </div>
                            </li>
                            {/* Qdrant */}
                            <li className="absolute top-0 left-1/2 h-1/2 -ml-[1.5rem] origin-bottom rotate-[270deg]">
                                <div className="relative -top-[1.5rem] w-[3rem] h-[3rem] -rotate-[270deg]">
                                    <div className="w-full h-full bg-white border shadow-lg border-gray-200/20 rounded-xl flex items-center justify-center animate-spin-slow">
                                        <Image className="m-auto hover:scale-125 transition-transform duration-300" width={32} height={32} alt="Qdrant" src="/images/qdrant_logo.svg" />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Inner Orbit*/}
                    <div className="absolute w-[32rem] h-[32rem] border border-white/20 rounded-full shadow-[0_0_20px_rgba(156,163,175,0.05)] animate-spin-slower">
                        <ul className="w-full h-full relative">
                            {/* Ruby on Rails */}
                            <li className="absolute top-0 left-1/2 h-1/2 -ml-[2rem] origin-bottom rotate-0">
                                <div className="relative -top-[2rem] w-[4rem] h-[4rem] rotate-0">
                                    <div className="w-full h-full bg-white border shadow-lg border-gray-200/20 rounded-xl flex items-center justify-center animate-spin-slower-reverse">
                                        <Image className="m-auto hover:scale-125 transition-transform duration-300" width={40} height={40} alt="Ruby on Rails" src="/images/rails_logo.svg" />
                                    </div>
                                </div>
                            </li>
                            {/* Node JS */}
                            <li className="absolute top-0 left-1/2 h-1/2 -ml-[2rem] origin-bottom rotate-[90deg]">
                                <div className="relative -top-[2rem] w-[4rem] h-[4rem] -rotate-[90deg]">
                                    <div className="w-full h-full bg-white border shadow-lg border-gray-200/20 rounded-xl flex items-center justify-center animate-spin-slower-reverse">
                                        <Image className="m-auto hover:scale-125 transition-transform duration-300" width={40} height={40} alt="Node JS" src="/images/nodejs_logo.svg" />
                                    </div>
                                </div>
                            </li>
                            {/* Python */}
                            <li className="absolute top-0 left-1/2 h-1/2 -ml-[2rem] origin-bottom rotate-[180deg]">
                                <div className="relative -top-[2rem] w-[4rem] h-[4rem] -rotate-[180deg]">
                                    <div className="w-full h-full bg-white border shadow-lg border-gray-200/20 rounded-xl flex items-center justify-center animate-spin-slower-reverse">
                                        <Image className="m-auto hover:scale-125 transition-transform duration-300" width={40} height={40} alt="Python" src="/images/python_logo.svg" />
                                    </div>
                                </div>
                            </li>
                            {/* Langchain */}
                            <li className="absolute top-0 left-1/2 h-1/2 -ml-[2rem] origin-bottom rotate-[270deg]">
                                <div className="relative -top-[2rem] w-[4rem] h-[4rem] -rotate-[270deg]">
                                    <div className="w-full h-full bg-white border shadow-lg border-gray-200/20 rounded-xl flex items-center justify-center animate-spin-slower-reverse">
                                        <Image className="m-auto hover:scale-125 transition-transform duration-300" width={40} height={40} alt="Langchain" src="/images/langchain_logo.svg" />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Outer Orbit */}
                    <div className="absolute w-[46rem] h-[46rem] border border-white/20 rounded-full shadow-[0_0_20px_rgba(156,163,175,0.05)] animate-spin-slowest-reverse">
                        <ul className="w-full h-full relative">
                            {/* Next.js */}
                            <li className="absolute top-0 left-1/2 h-1/2 -ml-[2.5rem] origin-bottom rotate-0">
                                <div className="relative -top-[2.5rem] w-[5rem] h-[5rem] rotate-0">
                                    <div className="w-full h-full bg-white border shadow-lg border-gray-200/20 rounded-xl flex items-center justify-center animate-spin-slowest">
                                        <Image className="m-auto hover:scale-125 transition-transform duration-300" width={50} height={50} alt="Next Js" src="/images/nextjs_logo.svg" />
                                    </div>
                                </div>
                            </li>
                            {/* React */}
                            <li className="absolute top-0 left-1/2 h-1/2 -ml-[2.5rem] origin-bottom rotate-[180deg]">
                                <div className="relative -top-[2.5rem] w-[5rem] h-[5rem] -rotate-[180deg]">
                                    <div className="w-full h-full bg-white border shadow-lg border-gray-200/20 rounded-xl flex items-center justify-center animate-spin-slowest">
                                        <Image className="m-auto hover:scale-125 transition-transform duration-300" width={44} height={44} alt="React" src="/images/react_logo_black.png" />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Skills;
