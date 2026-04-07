"use client";
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../data/projects';

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    card.addEventListener("mousemove", handleMouseMove);
    return () => card.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div 
      ref={cardRef}
      whileHover={{ y: -12, scale: 1.01 }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      className={`group relative flex flex-col bg-zinc-900/50 border-2 ${project.glowBorder || 'border-zinc-800'} border-opacity-50 rounded-2xl p-4 shadow-lg shadow-black/80 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl overflow-hidden cursor-pointer`}
    >
      {/* Dynamic Cursor Glow Effect */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), ${project.glowColor}15, transparent 40%)`,
        }}
      />


      <div className="overflow-hidden rounded-xl w-full h-44 md:h-56 mb-4 border border-zinc-700/50 relative flex-shrink-0 bg-zinc-800" />


      <h3 className="font-bold text-2xl md:text-3xl tracking-tight text-white mb-2">{project.title}</h3>

      <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-grow">
        {project.shortDescription}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech, i) => {
          const techLower = tech.toLowerCase();
          let colorClass = "bg-zinc-950/80 text-zinc-300 border-zinc-800/80";
          
          if (techLower.includes('ruby') || techLower.includes('rails')) {
            colorClass = "bg-red-500/10 text-red-400 border-red-500/20";
          } else if (techLower.includes('llm') || techLower.includes('langchain') || techLower.includes('openai') || techLower.includes('gpt')) {
            colorClass = "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20";
          } else if (techLower.includes('database') || techLower.includes('mysql') || techLower.includes('weaviate')) {
            colorClass = "bg-blue-500/10 text-blue-400 border-blue-500/20";
          }

          return (
            <motion.span 
              key={i} 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (i * 0.05) }}
              className={`text-xs px-2.5 py-1 rounded-md border shadow-sm transition-colors ${colorClass}`}
            >
              {tech}
            </motion.span>
          );
        })}
      </div>

      <div className="w-full h-px bg-zinc-800/60 mb-4"></div>

      <div className="flex justify-between items-center text-sm text-zinc-500 mb-4">
        <span className="flex items-center gap-1.5">
          <span className="text-zinc-600 font-medium">Role:</span> 
          <span className="text-zinc-400">{project.role}</span>
        </span>
        <span className="font-mono bg-zinc-800/40 px-2 py-1 rounded text-zinc-400 text-xs">{project.year}</span>
      </div>

      <div className="mt-auto pt-2 flex items-center relative z-20">
        <Link 
          href={`/projects/${project.slug}`} 
          className="group/link inline-flex items-center gap-2 text-white hover:text-white transition-colors font-semibold text-sm w-full bg-zinc-800/30 hover:bg-zinc-800/80 border border-zinc-700/50 rounded-xl px-4 py-3 justify-center z-50 pointer-events-auto"
        >
          View Case Study 
          <span className="transform group-hover/link:translate-x-1 transition-transform ml-1">→</span>
        </Link>
      </div>
      </motion.div>
    );
  };

function Projects() {
  const filteredProjects = projectsData;

  return (
    <div className="bg-[#030014] min-h-screen text-white pt-24 pb-24 px-6 md:px-12 lg:px-24 relative z-20" id="projects">
      <div className="max-w-7xl mx-auto relative z-30">
        
        {/* Header Area */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center md:items-start mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Things I&apos;ve Built</h2>
        </motion.div>



        {/* Grid Area */}
        {filteredProjects.length > 0 ? (
          <motion.div 
            layout 
            className="grid grid-cols-1 gap-8 md:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                 <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20, filter: "blur(5px)" }}
                    transition={{ 
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      mass: 1,
                      delay: idx * 0.1,
                      opacity: { duration: 0.3 }
                    }}
                    className="h-full"
                 >
                    <ProjectCard project={project} />
                 </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-24 bg-zinc-900/30 border border-zinc-800/50 rounded-3xl mt-10"
          >
            <svg className="w-16 h-16 text-zinc-700 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
            </svg>
            <p className="text-zinc-300 text-lg mb-2 font-medium">No projects in this category yet.</p>
            <p className="text-zinc-500 mb-8 max-w-md text-center">Check back soon or view all my other work.</p>
            <button 
              onClick={() => setActiveFilter("All")}
              className="text-white border border-zinc-700 bg-zinc-800/80 px-8 py-3 rounded-xl text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
              View All Projects 
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Projects;
