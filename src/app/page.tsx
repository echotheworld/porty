import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import MarqueeTicker from "@/components/sections/marquee-ticker";
import About from "@/components/sections/about";
import Credentials from "@/components/sections/credentials";
import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Testimonials from "@/components/sections/testimonials";
import Gallery from "@/components/sections/gallery";
import Footer from "@/components/sections/footer";
import BottomBar from "@/components/sections/bottom-bar";

export default function Page() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden" style={{ background: "var(--bg)" }}>
      <Navbar />
      <Hero />
      {/* Marquee between hero and dark about — light version */}
      <MarqueeTicker />
      <About />

      <Credentials />
      <Experience />
      <Skills />
      <Projects />
      <Testimonials />
      <Gallery />
      <Footer />
      <BottomBar />
    </main>
  );
}
