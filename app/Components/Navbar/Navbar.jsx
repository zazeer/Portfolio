"use client";
import Link from 'next/link';
import { useState } from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
    const [navbar, setNavbar] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav
            className="w-full fixed top-0 left-0 right-0 z-[100] bg-[#03001217] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50 py-5 md:py-5 transition-all duration-300"
        >
            {/* Desktop Center Menu */}
            <div className="hidden md:flex justify-center items-center px-4 mx-auto w-full">
                <ul className="flex items-center gap-12 lg:gap-16">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link 
                                className="inline-block text-[17px] font-medium text-zinc-300 hover:text-white transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-110 py-2 tracking-wide" 
                                href={link.href}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Hamburger Layout */}
            <div className="flex md:hidden items-center justify-end px-6">
                <button
                    className="p-2 text-zinc-300 hover:text-white transition-colors rounded-lg hover:bg-white/5 focus:outline-none"
                    onClick={() => setNavbar(!navbar)}
                    aria-label="Toggle Navigation"
                >
                    {navbar ? (
                        <XMarkIcon className="w-8 h-8" />
                    ) : (
                        <Bars3Icon className="w-8 h-8" />
                    )}
                </button>
            </div>

            <AnimatePresence>
                {navbar && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden bg-[#030014]/95 backdrop-blur-2xl border-b border-white/5 shadow-2xl absolute top-full left-0 w-full"
                    >
                        <ul className="flex flex-col items-center py-6 gap-6">
                            {navLinks.map((link) => (
                                <li key={link.name} className="w-full text-center">
                                    <Link
                                        className="text-lg font-semibold text-zinc-300 hover:text-fuchsia-400 hover:bg-white/5 block w-full py-3 transition-colors"
                                        href={link.href}
                                        onClick={() => setNavbar(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;