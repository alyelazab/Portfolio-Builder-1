import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "MyMasareef",
      description: "A comprehensive personal finance tracker designed for the Middle Eastern market. Built to handle complex expense categorization with a dead-simple UI.",
      tag: "Live Product",
      tagColor: "text-aly-teal bg-aly-teal/10",
      tech: ["React Native", "Node.js", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Transcript Analyzer",
      description: "An internal AI pipeline that automatically ingests customer call recordings, transcribes them, and extracts actionable product insights and feature requests.",
      tag: "Internal Tool",
      tagColor: "text-aly-coral bg-aly-coral/10",
      tech: ["Python", "OpenAI API", "FastAPI"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-12">Featured Work 💻</h2>
          
          <div className="space-y-12">
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col md:flex-row gap-8 bg-background border border-border rounded-[24px] p-8 hover-lift shadow-sm"
              >
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${project.tagColor}`}>
                      {project.tag}
                    </span>
                  </div>
                  
                  <p className="text-secondary-foreground text-lg">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, j) => (
                      <span key={j} className="px-3 py-1 bg-aly-bg-alt text-secondary-foreground rounded-full text-sm font-medium border border-border/50">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a href={project.link} className="inline-flex items-center gap-2 text-aly-violet font-semibold hover:text-aly-violet/80 transition-colors mt-4">
                    View Project <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
                
                <div className="flex-1 rounded-xl bg-aly-bg-alt border border-border/50 flex items-center justify-center min-h-[240px] relative overflow-hidden group-hover:border-aly-violet/30 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-br from-aly-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-secondary-foreground/50 font-medium flex items-center gap-2">
                    <Github className="w-5 h-5" /> Screenshot Placeholder
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}