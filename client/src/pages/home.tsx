import { useEffect } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Experience from "@/components/Experience";
import Speaking from "@/components/Speaking";
import BeyondWork from "@/components/BeyondWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { trackPageView, initSectionObserver, handleHashScroll } from "@/lib/analytics";

export default function Home() {
  useEffect(() => {
    trackPageView();
    handleHashScroll();
    const cleanup = initSectionObserver();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Process />
        <Experience />
        <Speaking />
        <BeyondWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}