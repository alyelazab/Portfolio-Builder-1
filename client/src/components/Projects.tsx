import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ChevronDown } from "lucide-react";
import { projectsData, myMasareefCaseStudy, transcriptAnalyzerCaseStudy } from "@/lib/data";
import mymasareefDemo from "@/assets/mymasareef-demo.gif";
import transcriptDemo from "@/assets/transcript-demo.gif";

const caseStudies = {
  mymasareef: myMasareefCaseStudy,
  transcript: transcriptAnalyzerCaseStudy,
} as const;

/** Renders text with backtick-wrapped segments as inline <code> elements. */
function RichText({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/(`[^`]+`)/g);
  return (
    <p className={className}>
      {parts.map((part, i) =>
        part.startsWith("`") && part.endsWith("`") ? (
          <code key={i} className="px-1.5 py-0.5 bg-aly-bg-alt border border-border/50 rounded text-sm font-mono text-foreground">
            {part.slice(1, -1)}
          </code>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </p>
  );
}

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-12">Side Projects 💻</h2>

          <div className="space-y-12">
            {projectsData.map((project, i) => {
              const isExpanded = expandedIndex === i;
              const caseStudy = caseStudies[project.caseStudyKey];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-background border border-border rounded-[24px] p-8 hover-lift shadow-sm"
                >
                  <div className="flex flex-col md:flex-row gap-8">
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

                      <div className="flex items-center gap-6 mt-4">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-aly-violet font-semibold hover:text-aly-violet/80 transition-colors">
                          View Project <ArrowUpRight className="w-4 h-4" />
                        </a>
                        <button
                          onClick={() => setExpandedIndex(isExpanded ? null : i)}
                          className="inline-flex items-center gap-2 text-secondary-foreground font-semibold hover:text-foreground transition-colors cursor-pointer"
                        >
                          Behind the Build
                          <motion.span
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="inline-flex"
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.span>
                        </button>
                      </div>
                    </div>

                    <div className="flex-1 rounded-xl bg-aly-bg-alt border border-border/50 flex items-center justify-center min-h-[240px] relative overflow-hidden group-hover:border-aly-violet/30 transition-colors">
                      <div className="absolute inset-0 bg-gradient-to-br from-aly-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      {project.image ? (
                        <img
                          src={project.image === "mymasareef-demo" ? mymasareefDemo : project.image === "transcript-demo" ? transcriptDemo : undefined}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-secondary-foreground/50 font-medium flex items-center gap-2">
                          <Github className="w-5 h-5" /> Screenshot Placeholder
                        </span>
                      )}
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-8 mt-8 border-t border-border/50 space-y-8">
                          {/* Act 1: The Problem */}
                          <div className="space-y-3">
                            <h4 className="text-sm font-semibold text-aly-coral uppercase tracking-wide">The Problem</h4>
                            <p className="text-foreground text-base">{caseStudy.story.hook}</p>
                            <RichText text={caseStudy.story.detail} className="text-secondary-foreground leading-relaxed" />
                          </div>

                          {/* Act 2: The Solution */}
                          <div className="space-y-3">
                            <h4 className="text-sm font-semibold text-aly-violet uppercase tracking-wide">
                              {project.caseStudyKey === "mymasareef" ? "How It Works" : "The Pipeline"}
                            </h4>
                            <ul className="space-y-2">
                              {caseStudy.steps.map((item: string, k: number) => (
                                <li key={k} className="flex gap-3 text-secondary-foreground text-sm leading-relaxed">
                                  <span className="text-aly-violet mt-1 shrink-0">▸</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Act 3: Product Decisions */}
                          <div className="space-y-3">
                            <h4 className="text-sm font-semibold text-aly-teal uppercase tracking-wide">Product Decisions</h4>
                            <ul className="space-y-2">
                              {caseStudy.productDecisions.map((item: string, k: number) => (
                                <li key={k} className="flex gap-3 text-secondary-foreground text-sm leading-relaxed">
                                  <span className="text-aly-violet mt-1 shrink-0">▸</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Build time footer */}
                          <p className="text-sm text-secondary-foreground/50 font-medium text-right">
                            Built in {caseStudy.buildTime}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
