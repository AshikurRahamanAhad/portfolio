import React from "react";
export default function Education() {
  return (
    <>
      {/* Education Section */}
      <section id="education" className="mt-10 p-6 sm:p-8 bg-white/90 border border-blue-600/10 rounded-2xl sm:rounded-3xl shadow-xl shadow-blue-900/5">
        <div className="mb-5">
          <span className="inline-block px-2.5 py-1 rounded-full bg-blue-600/10 text-blue-700 uppercase tracking-wider text-[11px] font-extrabold">Education</span>
          <h2 className="mt-2.5 mb-0 text-2xl sm:text-3xl font-bold text-slate-900">Academic background</h2>
        </div>
        <ul className="list-none m-0 p-0 grid gap-4">
          <li className="p-4 bg-blue-50/40 border-l-4 border-l-blue-600 rounded-xl text-slate-500 text-sm sm:text-base leading-relaxed">
            <strong className="text-slate-800">Bachelor of Social Science (BSS)</strong><br />
            Bhasha Soinik Ajit Guha College, Cumilla
          </li>
          <li className="p-4 bg-blue-50/40 border-l-4 border-l-blue-600 rounded-xl text-slate-500 text-sm sm:text-base leading-relaxed">
            <strong className="text-slate-800">Higher Secondary Certificate (HSC) - Humanities</strong><br />
            Comilla Pathshala College
          </li>
        </ul>
      </section>

    </>
  );
}