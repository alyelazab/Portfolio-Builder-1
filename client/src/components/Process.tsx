import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      emoji: "🔍",
      title: "Discover",
      desc: "Talk to users. Understand the real problem before jumping to solutions."
    },
    {
      emoji: "⚡",
      title: "Prototype Fast",
      desc: "Build rough, test early. Validate hypotheses with minimum viable effort."
    },
    {
      emoji: "🚀",
      title: "Ship & Measure",
      desc: "Get it in production. Set up analytics. See what people actually do."
    },
    {
      emoji: "🔄",
      title: "Iterate",
      desc: "Use the data. Refine the experience. Make it slightly better every day."
    }
  ];

  return (
    <section id="process" className="py-24 px-6 bg-aly-bg-alt">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-12">How I work ⚡</h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-background p-8 rounded-[24px] border border-border/50 shadow-sm hover-lift group"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform origin-left">{step.emoji}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-secondary-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}