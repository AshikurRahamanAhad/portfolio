"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen((prev) => !prev);
  const closeDrawer = () => setIsOpen(false);

  return (
    <header className="fixed top-3.5 left-2.5 right-2.5 sm:left-3.5 sm:right-3.5 z-50">
      {/* Main Bar */}
      <div className="flex items-center justify-between w-full p-2.5 sm:px-6 sm:py-3 bg-white/90 backdrop-blur-md border border-blue-600/15 shadow-xl shadow-blue-900/5 rounded-2xl">
        
        {/* Logo */}
        <a className="inline-flex items-center no-underline " href="#top" aria-label="Ashikur Rahaman Ahad home">
          <Image 
            src="/ashikur-rahaman-ahad-logo.svg" 
            alt="Ashikur Rahaman Ahad Logo" 
            width={40} 
            height={40} 
            className="w-auto h-10"
            priority 
          />
        </a>

        {/* Desktop Links (Hidden on Mobile) */}
        <ul className="hidden md:flex items-center gap-3.5 list-none m-0 p-0">
          <li>
            <a href="#project-section" className="no-underline text-slate-700 text-sm font-bold px-3 py-1.5 rounded-full hover:bg-blue-600/10 hover:text-blue-700 transition-all duration-200">
              Projects
            </a>
          </li>
          <li>
            <a href="#about-section" className="no-underline text-slate-700 text-sm font-bold px-3 py-1.5 rounded-full hover:bg-blue-600/10 hover:text-blue-700 transition-all duration-200">
              About
            </a>
          </li>
          <li>
            <a href="/Ashikur_Rahaman_Ahad_Resume.pdf" download className="no-underline text-slate-700 text-sm font-bold px-3 py-1.5 rounded-full border border-blue-600/40 hover:bg-blue-600/10 hover:text-blue-700 transition-all duration-200">
              Resume
            </a>
          </li>
        </ul>

        {/* Right CTA + Hamburger */}
        <div className="flex items-center gap-2">
          {/* Contact Button (Always visible) */}
<a 
              href="#contact-section" 
              className="no-underline text-white text-xs sm:text-sm font-bold px-3.5 py-2 rounded-full bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all duration-200 shadow-md shadow-blue-500/20"
            >
              Contact
            </a>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={toggleDrawer}
            type="button"
            className="md:hidden p-2 text-slate-700 hover:bg-blue-600/10 rounded-xl transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 1024 1024" className="w-6 h-6 fill-current">
              <path d="M128 469.333333h768v85.333334H128zM128 213.333333h768v85.333334H128zM128 725.333333h768v85.333334H128z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      <div 
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeDrawer}
      />

      {/* Mobile Side Drawer Container */}
      <aside 
        className={`fixed top-0 right-0 h-full w-72 bg-white text-slate-800 shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:hidden z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Drawer Top / Header */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
            <Image 
              src="/ashikur-rahaman-ahad-logo.svg" 
              alt="Logo" 
              width={32} 
              height={32} 
              className="h-8 w-auto" 
            />
            <button 
              onClick={closeDrawer} 
              type="button" 
              className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Mobile Links */}
          <ul className="flex flex-col gap-2 list-none p-0 m-0 font-semibold text-base">
            <li>
              <a 
                href="#project-section" 
                onClick={closeDrawer}
                className="block py-3 px-4 rounded-xl hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#about-section" 
                onClick={closeDrawer}
                className="block py-3 px-4 rounded-xl hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="/Ashikur_Rahaman_Ahad_Resume.pdf" 
                download 
                onClick={closeDrawer}
                className="block py-3 px-4 rounded-xl hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-colors"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>

        {/* Drawer Footer */}
        <div className="pt-6 border-t border-slate-100 text-xs text-slate-400 text-center">
          © 2026 Ashikur Rahaman Ahad
        </div>
      </aside>
    </header>
  );
}