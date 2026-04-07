import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '../../data/projects';

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetail({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="bg-[#030014] min-h-screen flex flex-col items-center justify-center gap-4 text-white px-6">
        <h1 className="text-3xl md:text-4xl font-bold">Project Not Found</h1>
        <Link href="/" className="text-fuchsia-400 hover:underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-[#030014] min-h-screen text-white pt-20 pb-16 px-5 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">

        {/* Page-Level Nav */}
        <div className="flex items-center justify-between mb-8 md:mb-12 text-sm text-zinc-300">
          <Link href="/#projects" className="hover:text-white transition-colors flex items-center gap-2 group">
            <span className="transform transition-transform group-hover:-translate-x-1">←</span> Back to Projects
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-12 md:mb-16">


          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">{project.title}</h1>
          <p className="text-base md:text-xl text-zinc-300 mb-8 md:mb-10 max-w-2xl leading-relaxed">{project.tagline}</p>

          {/* Meta Info - 2 kolom di mobile */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-8 gap-y-5 text-sm mb-10 pb-8 border-b border-zinc-800/50">
            <div className="flex flex-col gap-1.5">
              <span className="text-zinc-400 font-medium uppercase tracking-wider text-xs">Role</span>
              <span className="font-semibold text-zinc-200 text-sm md:text-base">{project.role}</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-zinc-400 font-medium uppercase tracking-wider text-xs">Year</span>
              <span className="font-semibold text-zinc-200 text-sm md:text-base">{project.year}</span>
            </div>

            <div className="flex flex-col gap-1.5 col-span-2 sm:col-span-1">
              <span className="text-zinc-400 font-medium uppercase tracking-wider text-xs">Links</span>
              <div className="flex flex-col gap-2 mt-0.5">
                <div className="flex gap-4 flex-wrap items-center">
                  {project.links?.github && <a href={project.links.github} target="_blank" rel="noreferrer" className="font-semibold text-white hover:text-fuchsia-400 transition-colors text-sm md:text-base">GitHub ↗</a>}
                  {project.links?.figma && <a href={project.links.figma} target="_blank" rel="noreferrer" className="font-semibold text-white hover:text-[#45b2ff] transition-colors text-sm md:text-base">Figma ↗</a>}
                  <span className="px-2 py-0.5 bg-amber-900/30 text-amber-500 border border-amber-700/50 rounded text-[10px] uppercase font-bold tracking-widest">RESTRICTED</span>
                </div>
              </div>
            </div>
          </div>

          {project.thumbnail && (
            <div className={`w-full aspect-video relative rounded-xl md:rounded-2xl overflow-hidden border-2 flex items-center justify-center ${project.glowBorder || 'border-zinc-800'} border-opacity-30 mb-12 md:mb-16 shadow-[0_0_50px_rgba(0,0,0,0.5)]`}>
               <Image src={project.thumbnail} alt={project.title} fill className="object-cover" />
               <div className="absolute inset-0 opacity-10 mix-blend-screen pointer-events-none" style={{ backgroundColor: project.glowColor }}></div>
            </div>
          )}
        </div>

        {/* Content Sections */}
        <div className="space-y-14 md:space-y-20">

          {/* Overview */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white tracking-tight">
              Overview & Problem Statement
            </h2>
            <div className="bg-zinc-900/40 border-l-4 border-fuchsia-500/50 p-6 md:p-8 rounded-r-2xl shadow-inner relative overflow-hidden group hover:bg-zinc-900/60 transition-colors">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-fuchsia-500/5 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="prose prose-base md:prose-lg prose-invert text-zinc-300 max-w-none relative z-10">
                  {project.shortDescription && <p>{project.shortDescription}</p>}
                  <div 
                    className="whitespace-pre-line leading-loose" 
                    dangerouslySetInnerHTML={{ __html: project.overview }} 
                  />
              </div>
            </div>
          </section>

          {/* My Role */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white tracking-tight">My Role & Contributions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {project.roleContributions?.map((item, i) => {
                const parts = item.split(': ');
                const hasTitle = parts.length > 1;
                const title = hasTitle ? parts[0] : `Role 0${i+1}`;
                const description = hasTitle ? parts.slice(1).join(': ') : item;
                
                return (
                  <div key={i} className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-5 md:p-6 transition-all hover:bg-zinc-900/80 hover:border-zinc-700 hover:shadow-lg md:hover:-translate-y-1 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 font-black text-8xl text-white opacity-[0.02] transform translate-x-4 -translate-y-6 font-mono group-hover:text-fuchsia-500 group-hover:opacity-10 transition-all duration-500 select-none pointer-events-none">
                      {i + 1}
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center mb-4 text-fuchsia-400 font-bold font-mono shadow-inner group-hover:border-fuchsia-500/50 group-hover:bg-fuchsia-500/20 transition-colors">
                      0{i + 1}
                    </div>
                    <h3 className="text-lg font-bold text-zinc-100 mb-2.5 tracking-tight relative z-10 group-hover:text-white transition-colors">{title}</h3>
                    <p className="text-zinc-300 text-sm leading-relaxed relative z-10 group-hover:text-zinc-300 transition-colors">
                      {description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white tracking-tight">Tech Stack & Tools</h2>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {project.techStack.map((tech, i) => {
                const techLower = tech.toLowerCase();
                let colorClass = "bg-zinc-900 border-zinc-800 text-zinc-300";
                
                if (techLower.includes('ruby') || techLower.includes('rails')) {
                  colorClass = "bg-red-500/10 text-red-400 border-red-500/20";
                } else if (techLower.includes('llm') || techLower.includes('langchain') || techLower.includes('openai') || techLower.includes('gpt')) {
                  colorClass = "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20";
                } else if (techLower.includes('database') || techLower.includes('mysql') || techLower.includes('weaviate')) {
                  colorClass = "bg-blue-500/10 text-blue-400 border-blue-500/20";
                }

                return (
                  <span key={i} className={`px-4 py-2 md:px-5 md:py-2.5 border rounded-xl shadow-sm font-medium text-sm md:text-base transition-colors ${colorClass}`}>
                      {tech}
                  </span>
                );
              })}
            </div>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white tracking-tight">Key Features / Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {project.features?.map((feature, i) => (
                <div key={i} className="bg-zinc-900/40 border border-zinc-800 rounded-xl md:rounded-2xl p-5 md:p-6 transition-all hover:bg-zinc-900/80 hover:border-fuchsia-500/30 group shadow-sm hover:shadow-[0_0_30px_rgba(232,121,249,0.05)] md:hover:-translate-y-1">
                  <h3 className="text-lg md:text-xl font-bold text-zinc-100 mb-3 flex items-start gap-3">
                    <div className="w-7 h-7 mt-0.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-fuchsia-500/20 group-hover:border-fuchsia-500/50 transition-colors shadow-[0_0_10px_rgba(232,121,249,0.1)]">
                      <svg className="w-3.5 h-3.5 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {feature.title}
                  </h3>
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed pl-10 group-hover:text-zinc-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Screenshots Gallery */}
          {project.screenshots && project.screenshots.length > 0 && (
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white tracking-tight">Screenshots Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {project.screenshots.map((screenshot, i) => (
                  <div key={i} className="w-full aspect-video bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 text-sm font-mono overflow-hidden relative">
                    {screenshot.startsWith('/') ? (
                       <Image src={screenshot} alt={`Screenshot ${i+1} for ${project.title}`} fill className="object-cover" />
                    ) : (
                       <span className="p-4 text-center">{screenshot}</span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Challenges & Learnings */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white tracking-tight">Challenges & Learnings</h2>
            <div className="prose prose-base md:prose-lg prose-invert text-zinc-300 max-w-none">
              {Array.isArray(project.challenges) ? (
                <div className="space-y-6">
                  {project.challenges.map((item, i) => (
                    <div key={i} className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl md:rounded-2xl p-5 md:p-6 mb-5 transition-all hover:bg-zinc-900/80 hover:border-zinc-700 md:hover:-translate-y-1 hover:shadow-lg group relative overflow-hidden">
                      <div className="absolute top-0 right-0 font-black text-8xl text-white opacity-[0.02] transform translate-x-4 -translate-y-6 font-mono group-hover:text-fuchsia-500 group-hover:opacity-10 transition-all duration-500 select-none pointer-events-none">
                        {i + 1}
                      </div>
                      
                      <div className="flex flex-row items-center gap-4 mb-6 relative z-10">
                         <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 font-bold font-mono text-lg shadow-inner group-hover:border-fuchsia-500/50 group-hover:bg-fuchsia-500/20 transition-colors flex-shrink-0">
                           0{i + 1}
                         </div>
                         <h3 className="text-xl md:text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors tracking-tight -translate-y-3">
                           {item.title}
                         </h3>
                      </div>

                      <div className="space-y-4 text-sm md:text-base relative z-10">
                        <div>
                          <strong className="text-zinc-200 block mb-1">Challenge:</strong>
                          <p className="m-0 text-zinc-300 leading-relaxed group-hover:text-zinc-300 transition-colors">{item.challenge}</p>
                        </div>
                        <div>
                          <strong className="text-zinc-200 block mb-1">Solution:</strong>
                          <p className="m-0 text-zinc-300 leading-relaxed group-hover:text-zinc-300 transition-colors">{item.solution}</p>
                        </div>
                        <div>
                          <strong className="text-zinc-200 block mb-1">Result:</strong>
                          <p className="m-0 text-fuchsia-400/90 font-medium group-hover:text-fuchsia-400 transition-colors">{item.result}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="whitespace-pre-line">{project.challenges}</p>
              )}
            </div>
          </section>

          {/* Outcome / Result */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white tracking-tight">Outcome & Results</h2>
            {Array.isArray(project.outcome) ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {project.outcome.map((item, i) => (
                  <div key={i} className="bg-zinc-800/30 border-t-2 border-fuchsia-400 rounded-b-xl md:rounded-b-2xl p-5 md:p-6 flex flex-col gap-3 transition-colors hover:bg-zinc-800/50">
                    <h3 className="text-lg font-bold text-white tracking-tight">{item.title}</h3>
                    <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-zinc-800/30 border-l-4 border-fuchsia-400 rounded-r-xl md:rounded-r-2xl p-5 md:p-6">
                <p className="text-zinc-300 text-base md:text-lg whitespace-pre-line">
                  {project.outcome}
                </p>
              </div>
            )}
          </section>

        </div>
      </div>
    </div>
  );
}
