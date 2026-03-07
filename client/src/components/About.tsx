import { motion } from "framer-motion";
import { aboutData } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-aly-bg-alt">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-12">About Me 👋</h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-lg text-secondary-foreground leading-relaxed">
              {aboutData.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {aboutData.metrics.map((metric, i) => (
                <div key={i} className="bg-background rounded-2xl p-6 shadow-sm border border-border/50 relative overflow-hidden hover-lift">
                  <div className={`absolute top-0 left-0 w-full h-1 ${metric.color}`} />
                  <div className="text-3xl font-extrabold text-foreground mb-1">{metric.value}</div>
                  <div className="text-sm text-secondary-foreground font-medium">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
