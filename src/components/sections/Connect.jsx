"use client";

{/* Connect Section */}
export default function Connect() {
  return (
    <>
   
      <section id="contact-section" className="mt-10 p-6 sm:p-8 bg-white/90 border border-blue-600/10 rounded-2xl sm:rounded-3xl shadow-xl shadow-blue-900/5">
        <div className="mb-5">
          <span className="inline-block px-2.5 py-1 rounded-full bg-blue-600/10 text-blue-700 uppercase tracking-wider text-[11px] font-extrabold">Connect</span>
          <h2 className="mt-2.5 mb-0 text-2xl sm:text-3xl font-bold text-slate-900">Lets build and learn together</h2>
        </div>
        <div className="grid gap-5">
          <p className="m-0 text-slate-500 leading-relaxed">Open to collaborations, engineering discussions, and practical product thinking across the web stack.</p>
          
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 pt-2">
            <a className="inline-flex flex-col items-center gap-1.5 no-underline text-slate-600 hover:-translate-y-1 transition-transform duration-200" href="https://github.com/AshikurRahamanAhad" target="_blank" rel="me noopener noreferrer">
              <svg className="w-7 h-7 fill-slate-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
              </svg>
              <span className="text-xs font-bold">GitHub</span>
            </a>

            <a className="inline-flex flex-col items-center gap-1.5 no-underline text-slate-600 hover:-translate-y-1 transition-transform duration-200" href="https://www.linkedin.com/in/ashikur-rahaman-ahad/" target="_blank" rel="me noopener noreferrer">
              <svg className="w-7 h-7 fill-[#0A66C2]" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.2225 0z"/></svg>
              <span className="text-xs font-bold">LinkedIn</span>
            </a>

            <a className="inline-flex flex-col items-center gap-1.5 no-underline text-slate-600 hover:-translate-y-1 transition-transform duration-200" href="https://x.com/Ashikur_Ahad" target="_blank" rel="me noopener noreferrer">
              <svg className="w-7 h-7 fill-slate-900" viewBox="0 0 24 24"><path d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z"></path></svg>
              <span className="text-xs font-bold">X (Twitter)</span>
            </a>

            <a className="inline-flex flex-col items-center gap-1.5 no-underline text-slate-600 hover:-translate-y-1 transition-transform duration-200" href="https://orcid.org/0009-0008-8875-0928" target="_blank" rel="me noopener noreferrer">
              <svg className="w-7 h-7" viewBox="0 0 512 512">
                <circle cx="256" cy="256" r="256" fill="#a6ce39"></circle>
                <path d="m173 372h-31v-214h31zm45-214h83c79 0 114 57 114 107 0 55-43 107-114 107h-84zm31 187h49c70 0 86-53 86-79 0-43-27-79-87-79h-47zm-71-231c0 11-9 20-20 20s-20-9-20-20a20 20 0 0 1 20-20c11 0 20 9 20 20z" fill="#ffffff"></path>
              </svg>
              <span className="text-xs font-bold">ORCID</span>
            </a>
          </div>
        </div>
      </section> 
    </>
  );
}