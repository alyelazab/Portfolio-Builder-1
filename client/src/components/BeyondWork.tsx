import { motion } from "framer-motion";
import { beyondWorkCards } from "@/lib/data";

export default function BeyondWork() {
  return (
    <section id="beyond" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-12">Beyond Work 🌟</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {beyondWorkCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-aly-bg-alt p-6 rounded-[24px] border border-border/50 text-center hover-lift group"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">{card.emoji}</div>
                <h3 className="font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-secondary-foreground">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
