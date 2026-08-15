import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import ProjectGrid from "@/components/sections/ProjectGrid";
import About from "@/components/sections/About";
import Connect from "@/components/sections/Connect";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-295 mx-auto pt-28 sm:pt-36 pb-12 px-5">
        <Hero />
        <ProjectGrid />
        <About />
        <Connect/>
      </main>
      <footer className="pt-5 pb-10 text-center">
        <p className="m-0 text-slate-500 text-xs sm:text-sm">
          © 2026 Ashikur Rahaman Ahad • Built with Next.js & Tailwind CSS
        </p>
      </footer>
    </>
  );
}
