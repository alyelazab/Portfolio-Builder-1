import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import profilePhoto from "@/assets/profile.png";

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-6 bg-background flex flex-col items-center justify-center min-h-[90vh] text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto flex flex-col items-center"
      >
        <div className="mb-8 relative">
          <div className="absolute inset-0 rounded-full bg-aly-violet/20 blur-xl scale-110"></div>
          <img 
            src={profilePhoto} 
            alt="Aly Elazab" 
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-[0_0_0_2px_theme(colors.aly.violet)] relative z-10"
          />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-aly-bg-alt border border-border/50 text-sm font-medium mb-6">
          <span>🚀</span> Currently at Contango, Abu Dhabi
        </div>

        <h1 className="text-5xl md:text-[64px] leading-tight font-extrabold mb-6 text-foreground">
          I build products that people <span className="relative whitespace-nowrap">
            actually
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-aly-coral" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="transparent" />
            </svg>
          </span> use.
        </h1>

        <p className="text-xl md:text-2xl text-secondary-foreground mb-10 max-w-2xl font-medium">
          Senior AI Product Manager with 4+ years in SaaS. Bridging the gap between complex AI and intuitive user experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button size="lg" className="bg-aly-violet hover:bg-aly-violet/90 text-white rounded-xl text-base px-8 h-14 hover-lift">
            View My Work
          </Button>
          <Button size="lg" variant="outline" className="rounded-xl text-base px-8 h-14 hover-lift border-border/60 hover:bg-aly-bg-alt text-foreground">
            Get In Touch
          </Button>
        </div>

        <div className="flex items-center gap-6 text-secondary-foreground">
          <a href="#" className="hover:text-aly-violet transition-colors hover:-translate-y-1 transform duration-200">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-aly-violet transition-colors hover:-translate-y-1 transform duration-200">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-aly-violet transition-colors hover:-translate-y-1 transform duration-200">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}