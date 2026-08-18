"use client";

import React from "react";
import NewsPaperProjectCard from "../ui/NewsPaperProjectCard";
export default function ProjectGrid() {
  return (
    <>
      {/* Direction Section */}
      <section id="project-section" className="mt-10 p-6 sm:p-8 bg-white/90 border border-blue-600/10 rounded-2xl sm:rounded-3xl shadow-xl shadow-blue-900/5">
        <div className="mb-5">
          <span className="inline-block px-2.5 py-1 rounded-full bg-blue-600/10 text-blue-700 uppercase tracking-wider text-[11px] font-extrabold">Project direction</span>
          <h2 className="mt-2.5 mb-0 text-2xl sm:text-3xl font-bold text-slate-900">What I am building toward</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <NewsPaperProjectCard />
          <article className="p-5 bg-linear-to-b from-white to-blue-50/30 rounded-2xl border border-blue-100 border-l-4 border-l-blue-600">
            <h3 className="m-0 mb-2.5 text-base font-bold text-blue-700">Current Focus: MERN Stack</h3>
            <p className="m-0 text-slate-500 text-sm leading-relaxed">Building dynamic, full-stack web applications using JavaScript (ES6+), Node.js, Express, and MongoDB.</p>
          </article>

          <article className="p-5 bg-linear-to-b from-white to-blue-50/30 rounded-2xl border border-blue-100 border-l-4 border-l-purple-400">
            <h3 className="m-0 mb-2.5 text-base font-bold text-blue-700">Upcoming: Database Engineering</h3>
            <p className="m-0 text-slate-500 text-sm leading-relaxed">Planning to expand into relational database management systems (RDBMS) with a core focus on PostgreSQL.</p>
          </article>

          <article className="p-5 bg-linear-to-b from-white to-blue-50/30 rounded-2xl border border-blue-100 border-l-4 border-l-purple-400">
            <h3 className="m-0 mb-2.5 text-base font-bold text-blue-700">Upcoming: DevOps and Infrastructure</h3>
            <p className="m-0 text-slate-500 text-sm leading-relaxed">Targeting system automation, containerization (Docker), and modern deployment pipelines in the near future.</p>
          </article>
        </div>
      </section>

    </>
  );
}