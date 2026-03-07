import { motion } from "framer-motion";
import { experienceRoles } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-12">Experience 📈</h2>

          <div className="flex flex-col gap-4">
            {experienceRoles.map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col md:flex-row md:items-center p-6 bg-background rounded-[16px] border border-border/50 hover:bg-aly-bg-alt transition-colors group"
              >
                <div className="md:w-1/4 font-mono text-aly-violet font-semibold mb-2 md:mb-0">
                  {role.year}
                </div>
                <div className="md:w-1/3 mb-2 md:mb-0">
                  <div className="font-bold text-lg">{role.role}</div>
                  <div className="text-sm text-secondary-foreground">{role.company}</div>
                </div>
                <div className="md:w-5/12 text-secondary-foreground text-sm group-hover:text-foreground transition-colors">
                  {role.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
