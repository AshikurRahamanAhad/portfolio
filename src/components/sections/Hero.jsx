"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center p-7 sm:p-12 bg-linear-to-br from-white to-blue-50/50 border border-blue-100 rounded-2xl sm:rounded-[30px] shadow-xl shadow-blue-900/5" id="home">
      {/* Left Column */}
      <div className="lg:col-span-7 flex flex-col items-start">
        <span className="inline-block px-2.5 py-1 rounded-full bg-blue-600/10 text-blue-700 uppercase tracking-wider text-[11px] font-extrabold">Software Engineer and Full-stack developer</span>
        
        <h1 className="my-4 text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900">
          Hi, I&apos;m <span className="text-blue-600">Ashikur Rahaman Ahad</span>
        </h1>
        
        <p className="max-w-2xl m-0 text-slate-500 text-base sm:text-lg leading-relaxed">
         Full-Stack Developer specializing in the MERN stack and Next.js. I focus on building functional, responsive web applications with clean REST APIs and efficient database structures.
         </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3.5 mt-7">
          <a href="#contact-section" className="inline-flex items-center justify-center min-h-11.5 px-5 text-sm font-bold text-white no-underline rounded-full bg-linear-to-r from-blue-800 via-sky-500 to-blue-800 bg-size-[300%_300%] animate-[blue-indigo-shift_6s_ease_infinite] shadow-lg shadow-blue-500/25 hover:-translate-y-0.5 transition-transform duration-200"> Lets connect </a>         
          <a className="inline-flex items-center justify-center min-h-11.5 px-5 text-sm font-bold text-blue-700 no-underline rounded-full bg-white border border-blue-600/30 hover:-translate-y-0.5 transition-transform duration-200" href="/Ashikur_Rahaman_Ahad_Resume.pdf" download>Download resume</a>
        </div>

        {/* Quick Stats */}
        <div className="flex flex-wrap gap-3.5 mt-7">
          <div className="flex flex-col gap-1 min-w-30 p-3.5 sm:p-4 bg-white rounded-2xl border border-blue-100">
            <strong className="text-slate-900">MERN</strong>
            <span className="text-xs text-slate-500">Core focus</span>
          </div>
          <div className="flex flex-col gap-1 min-w-30 p-3.5 sm:p-4 bg-white rounded-2xl border border-blue-100">
            <strong className="text-slate-900">Next.js</strong>
            <span className="text-xs text-slate-500">SEO & SSR</span>
          </div>
          <div className="flex flex-col gap-1 min-w-30 p-3.5 sm:p-4 bg-white rounded-2xl border border-blue-100">
            <strong className="text-slate-900">Tailwind CSS</strong>
            <span className="text-xs text-slate-500">Modern UI styling</span>
          </div>
        </div>
      </div>

      {/* Right Column Profile */}
      <div className="lg:col-span-5 relative flex items-center justify-center mt-4 lg:mt-0">
        <div className="w-full max-w-95 rounded-[28px] p-3 bg-linear-to-br from-white to-blue-100 shadow-xl shadow-blue-900/5">
          <Image src="/Ashikur-Rahaman-Ahad-profile.jpg" alt="Portrait of Ashikur Rahaman Ahad" width={380} height={450} className="block w-full rounded-xl object-cover" priority />
        </div>
        
        <div className="absolute -bottom-4 sm:bottom-4 left-2.5 sm:left-auto sm:-right-2.5 right-2.5 inline-flex items-center justify-center gap-2.5 p-3 sm:px-4 sm:py-3 bg-slate-900/95 text-white rounded-full text-xs shadow-xl backdrop-blur-md border border-slate-800">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-blue-500/20 shrink-0"></span>
          <span className="truncate">Open to collaboration and system-minded product work</span>
        </div>
      </div>
    </section>
  );
}