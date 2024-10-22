import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'

function Navbar(){
    const [navbar, setNavbar] = useState(false);
    return(
        <div>
            <nav className="w-full  fixed top-0 left-0 right-0  shadow-lg shadow-[#2A0E61]/50 bg-[#03001217] backdrop-blur-md z-50">
                <div className="justify-between px-4 mx-auto lg:-mx-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            {/* LOGO */}
                            <Link href="#home">
                                <Image src="/images/rtz logo white.png" alt="RTZ Logo" width={85} height={90}/>
                            </Link>
                            {/* HAMBURGER BUTTON FOR MOBILE */}
                            <div className="md:hidden">
                                <button
                                    className="p-4"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                    <XMarkIcon className="w-8 h-8 text-white" /> 
                                    ) : (
                                    <Bars3Icon className="w-8 h-8 text-white focus:border-none active:border-none" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Section */}
                    <div className={`flex-auto justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'}`}>
                        <ul className="h-screen md:h-auto items-end justify-end md:flex">
                            {/* Home */}
                            <li className="pb-1 text-xl py-100 md:px-6 text-center">
                                <Link className="hover:bg-purple-400 hover:text-transparent hover:bg-clip-text relative group"  href="#home" onClick={() => setNavbar(!navbar)}>
                                    Home
                                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 rounded-r-lg bg-purple-400 group-hover:w-1/2 group-hover:transition-all"></span>
                                    <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 rounded-l-lg bg-purple-400 group-hover:w-1/2 group-hover:transition-all"></span>
                                </Link>
                            </li>

                            {/* about */}
                            <li className="pb-1 text-xl py-100 md:px-6 text-center">
                                <Link className="hover:bg-purple-400 hover:text-transparent hover:bg-clip-text relative group"  href="#about" onClick={() => setNavbar(!navbar)}>
                                    About
                                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 rounded-r-lg bg-purple-400 group-hover:w-1/2 group-hover:transition-all"></span>
                                    <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 rounded-l-lg bg-purple-400 group-hover:w-1/2 group-hover:transition-all"></span>
                                </Link>
                            </li>

                            {/* projects */}
                            <li className="pb-1 text-xl py-100 md:px-6 text-center">
                                <Link className="hover:bg-purple-400 hover:text-transparent hover:bg-clip-text relative group"  href="#projects" onClick={() => setNavbar(!navbar)}>
                                    Projects
                                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 rounded-r-lg bg-purple-400 group-hover:w-1/2 group-hover:transition-all"></span>
                                    <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 rounded-l-lg bg-purple-400 group-hover:w-1/2 group-hover:transition-all"></span>
                                </Link>
                            </li>

                            {/* contact */}
                            <li className="pb-1 text-xl py-100 md:px-6 text-center">
                                <Link className="hover:bg-purple-400 hover:text-transparent hover:bg-clip-text relative group"  href="#contact" onClick={() => setNavbar(!navbar)}>
                                    Contact
                                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 rounded-r-lg bg-purple-400 group-hover:w-1/2 group-hover:transition-all"></span>
                                    <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 rounded-l-lg bg-purple-400 group-hover:w-1/2 group-hover:transition-all"></span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );

}

export default Navbar;