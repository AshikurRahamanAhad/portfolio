import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import ProjectGrid from "@/components/sections/ProjectGrid";
import About from "@/components/sections/About";
import Connect from "@/components/sections/Connect";
import Education from "@/components/sections/Education";
import Background from "@/components/ui/Background";

export default function Home() {
  return (
    <>
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* 1. Moving Background Layer (Fixed behind all content) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Background />
      </div>

      {/* 2. Page Content Layer (Elevated above background) */}
      <div className="relative z-10">
      <Navbar />
      <main className="max-w-295 mx-auto pt-28 sm:pt-36 pb-12 px-5">
        <Hero />
        <ProjectGrid />
        <Education />
        <About />
        <Connect/>
      </main>
      <footer className="pt-5 pb-10 text-center">
        <p className="m-0 text-slate-500 text-xs sm:text-sm">
          © 2026 Ashikur Rahaman Ahad • Built with Next.js & Tailwind CSS
        </p>
      </footer>
      </div>
    </div>
    </>
  );
}
