"use client";
      {/* About Section */}

export default function About() {
  return (
    <>
      <section id="about-section" className="mt-10 p-6 sm:p-8 bg-white/90 border border-blue-600/10 rounded-2xl sm:rounded-3xl shadow-xl shadow-blue-900/5 ">
        <div className="mb-5">
          <span className="inline-block px-2.5 py-1 rounded-full bg-blue-600/10 text-blue-700 uppercase tracking-wider text-[11px] font-extrabold">About</span>
          <h2 className="mt-2.5 mb-0 text-2xl sm:text-3xl font-bold text-slate-900"> Full-Stack Developer </h2>
        </div>
        <div className="space-y-4 text-slate-500 text-base leading-relaxed">
<p>
  I am a <strong className="text-slate-800">Full-Stack Developer</strong>. 
  I learned modern web development through {" "}
  <a 
    href="https://ostad.app/course/mern" 
    target="_blank" 
    rel="noopener noreferrer"
    className="font-medium text-blue-600 underline underline-offset-4 hover:text-blue-800 transition-colors"
  >
    Ostad&apos;s MERN Stack Program
  </a>
  , where I built real-world web applications from scratch.
</p>
<p>
  I focus on building complete, performant web applications—handling both clean user interfaces 
  on the frontend (<strong className="text-slate-800">React, Next.js</strong>) and solid database 
  systems on the backend (<strong className="text-slate-800">Node.js, Express, MongoDB</strong>). 
  My goal is to write clean, maintainable code that solves real problems.
</p>
        </div>
      </section>
      </>
    );
}