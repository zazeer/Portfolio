"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';


const formSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name must be 100 characters or less'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required').max(150, 'Subject must be 150 characters or less'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be 1000 characters or less'),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch(process.env.FORMSPREE_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmitStatus('success');
        reset();

        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const capture = document.querySelector(".glow-capture-contact");
    if (!capture) return;

    const overlay = capture.querySelector(".glow-overlay-contact");
    if (!overlay) return;

    // Clear previous clones to prevent "stuck" or "ghost" glows
    overlay.innerHTML = "";

    // Clone the form container (which is now the second child of capture)
    // capture.children[0] is the overlay, capture.children[1] is the form container
    const formToClone = capture.children[1];
    if (!formToClone) return;

    const clonedChild = formToClone.cloneNode(true);
    overlay.appendChild(clonedChild);

    const handleMouseMove = (event) => {
      // Check if any input/textarea is currently focused
      const activeEl = document.activeElement;
      const isInputFocused = activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA');

      if (isInputFocused) {
        overlay.style.setProperty("--glow-opacity", "0");
        return;
      }

      const rect = capture.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      overlay.style.setProperty("--glow-x", `${x}px`);
      overlay.style.setProperty("--glow-y", `${y}px`);
      overlay.style.setProperty("--glow-opacity", "1");
    };

    const handleFocusIn = () => {
      overlay.style.setProperty("--glow-opacity", "0");
    };

    const handleMouseLeave = () => {
      overlay.style.setProperty("--glow-opacity", "0");
    };

    capture.addEventListener("mousemove", handleMouseMove);
    capture.addEventListener("mouseleave", handleMouseLeave);
    capture.addEventListener("focusin", handleFocusIn);

    return () => {
      capture.removeEventListener("mousemove", handleMouseMove);
      capture.removeEventListener("mouseleave", handleMouseLeave);
      capture.removeEventListener("focusin", handleFocusIn);
    };
  }, [isValid, isSubmitting, submitStatus]);

  return (
    <div className="bg-[#030014] w-full min-h-screen py-20 flex items-center">
      <div className="z-20 relative w-full max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start"
        >
          {/* Left Column - Text & Socials */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center text-center lg:text-left lg:pt-10">
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-violet-700 via-purple-400 to-fuchsia-300 text-transparent bg-clip-text animate-gradient bg-300% pb-4">
              Let&apos;s Connect
            </h2>
            <p className="mt-4 text-zinc-400 text-lg md:text-xl leading-relaxed">
              I&apos;m always open to connecting, discussing new opportunities, or collaborating on interesting ideas and projects.
            </p>

            {/* Social Links (Desktop Only) */}
            <div className="mt-12 hidden lg:flex flex-col gap-5">
              <h4 className="font-semibold text-white/90 uppercase tracking-widest text-sm opacity-80">Connect On Socials</h4>
              <div className="flex gap-6">
                <Link href="https://github.com/zazeer" target="_blank" rel="noopener">
                  <div className="p-4 bg-zinc-950/50 backdrop-blur-xl rounded-2xl border-2 border-white/40 hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:-translate-y-2 transition-all duration-300 group">
                    <AiFillGithub className="w-7 h-7 text-white transition-colors" />
                  </div>
                </Link>
                <Link href="https://linkedin.com/in/reza-tafazzul" target="_blank" rel="noopener">
                  <div className="p-4 bg-zinc-950/50 backdrop-blur-xl rounded-2xl border-2 border-[#0A66C2]/50 hover:border-[#0A66C2] hover:shadow-[0_0_25px_rgba(10,102,194,0.4)] hover:-translate-y-2 transition-all duration-300 group">
                    <AiFillLinkedin className="w-7 h-7 text-[#0A66C2] transition-colors" />
                  </div>
                </Link>
                <Link href="https://instagram.com/reza.tafaz" target="_blank" rel="noopener">
                  <div className="p-4 bg-zinc-950/50 backdrop-blur-xl rounded-2xl border-2 border-[#d946ef]/60 hover:border-[#d946ef] hover:shadow-[0_0_25px_rgba(217,70,239,0.5)] hover:-translate-y-2 transition-all duration-300 group">
                    <AiFillInstagram className="w-7 h-7 text-[#d946ef] transition-colors" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full lg:w-7/12 mt-10 lg:mt-0 relative">
            {/* Dedicated wrapper for glow-capture to ensure the effect is contained ONLY to the form box */}
            <div className="relative glow-capture-contact rounded-3xl overflow-hidden">
              {/* Glow Overlay Effect */}
              <div
                className="absolute inset-0 -z-10 glow-overlay glow-overlay-contact pointer-events-none"
                style={{
                  '--glow-color': '#d946ef',
                  '--glow-opacity': 0,
                  '--glow-size': '15rem'
                }}
              ></div>

              <div className="bg-zinc-900/50 border-2 border-fuchsia-300/50 rounded-3xl p-8 md:p-12 shadow-lg shadow-black/80 backdrop-blur-sm relative group form-container-glow">

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 relative z-10 w-full">
                <div className="flex flex-col md:flex-row gap-6 w-full">
                  <div className="w-full flex-1">
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2 ml-1">Name</label>
                    <div className={`form-input-wrap ${errors.name ? 'error' : ''}`}>
                      <input
                        id="name"
                        type="text"
                        {...register('name')}
                        className="w-full bg-transparent text-white px-5 py-4 rounded-xl border-0 outline-none placeholder:text-zinc-500"
                        placeholder="Your name"
                      />
                    </div>
                    {errors.name && <p className="mt-2 text-sm text-red-400 ml-1">{errors.name.message}</p>}
                  </div>

                  <div className="w-full flex-1">
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2 ml-1">Email Address</label>
                    <div className={`form-input-wrap ${errors.email ? 'error' : ''}`}>
                      <input
                        id="email"
                        type="email"
                        {...register('email')}
                        className="w-full bg-transparent text-white px-5 py-4 rounded-xl border-0 outline-none placeholder:text-zinc-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    {errors.email && <p className="mt-2 text-sm text-red-400 ml-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="w-full">
                  <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2 ml-1">Subject</label>
                  <div className={`form-input-wrap ${errors.subject ? 'error' : ''}`}>
                    <input
                      id="subject"
                      type="text"
                      {...register('subject')}
                      className="w-full bg-transparent text-white px-5 py-4 rounded-xl border-0 outline-none placeholder:text-zinc-500"
                      placeholder="Subject of your message"
                    />
                  </div>
                  {errors.subject && <p className="mt-2 text-sm text-red-400 ml-1">{errors.subject.message}</p>}
                </div>

                <div className="w-full">
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2 ml-1">Message</label>
                  <div className={`form-input-wrap ${errors.message ? 'error' : ''}`}>
                    <textarea
                      id="message"
                      {...register('message')}
                      rows={5}
                      className="w-full bg-transparent text-white px-5 py-4 rounded-xl border-0 outline-none placeholder:text-zinc-500 resize-y"
                      placeholder="Write your message here..."
                    />
                  </div>
                  {errors.message && <p className="mt-2 text-sm text-red-400 ml-1">{errors.message.message}</p>}
                </div>

                <div className="mt-4 flex justify-center w-full">
                  <motion.button
                    type="submit"
                    disabled={!isValid || isSubmitting || submitStatus === 'success'}
                    layout
                    transition={{ duration: 0.3 }}
                    className={`backdrop-blur-xl rounded-xl font-bold text-lg transition-all flex justify-center items-center shadow-lg relative overflow-hidden w-full
                      ${(submitStatus === 'success' || isSubmitting) ? 'w-16 h-16 rounded-full p-0' : 'py-4 px-6'}
                      ${isValid && !isSubmitting && submitStatus !== 'success'
                        ? 'bg-gradient-to-r from-violet-700 via-fuchsia-500 to-purple-400 animate-gradient bg-[length:300%_auto] text-white shadow-[0_0_25px_rgba(217,70,239,0.4)]'
                        : 'bg-zinc-900/50 border border-zinc-700/50 text-zinc-500 cursor-not-allowed opacity-80'
                      }
                      ${submitStatus === 'success' ? 'bg-emerald-500/30 border border-emerald-400 text-emerald-400' : ''}`}
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : submitStatus === 'success' ? (
                      <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-8 h-8 text-emerald-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </motion.svg>
                    ) : (
                      <motion.span layout="position">Send Message</motion.span>
                    )}
                  </motion.button>
                </div>
              </form>

              {/* Toast Messages */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="mt-6 p-4 bg-red-500/10 border border-red-500/50 text-red-400 rounded-xl text-center font-medium shadow-[0_0_20px_rgba(239,68,68,0.1)] backdrop-blur-md z-20 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Oops! Something went wrong. Please try again later.
                </motion.div>
              )}
            </div>
          </div>

            {/* Social Links (Mobile Only) */}
            <div className="mt-16 flex lg:hidden flex-col items-center gap-5">
              <h4 className="font-semibold text-white/90 uppercase tracking-widest text-sm opacity-80">Connect On Socials</h4>
              <div className="flex gap-6">
                <Link href="https://github.com/zazeer" target="_blank" rel="noopener">
                  <div className="p-4 bg-zinc-950/50 backdrop-blur-xl rounded-2xl border-2 border-white/40 hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:-translate-y-2 transition-all duration-300 group">
                    <AiFillGithub className="w-7 h-7 text-white transition-colors" />
                  </div>
                </Link>
                <Link href="https://linkedin.com/in/reza-tafazzul" target="_blank" rel="noopener">
                  <div className="p-4 bg-zinc-950/50 backdrop-blur-xl rounded-2xl border-2 border-[#0A66C2]/50 hover:border-[#0A66C2] hover:shadow-[0_0_25px_rgba(10,102,194,0.4)] hover:-translate-y-2 transition-all duration-300 group">
                    <AiFillLinkedin className="w-7 h-7 text-[#0A66C2] transition-colors" />
                  </div>
                </Link>
                <Link href="https://instagram.com/reza.tafaz" target="_blank" rel="noopener">
                  <div className="p-4 bg-zinc-950/50 backdrop-blur-xl rounded-2xl border-2 border-[#d946ef]/60 hover:border-[#d946ef] hover:shadow-[0_0_25px_rgba(217,70,239,0.5)] hover:-translate-y-2 transition-all duration-300 group">
                    <AiFillInstagram className="w-7 h-7 text-[#d946ef] transition-colors" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
