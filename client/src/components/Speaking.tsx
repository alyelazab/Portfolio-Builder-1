import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { speakingTalks } from "@/lib/data";

export default function Speaking() {
  return (
    <section id="speaking" className="py-24 px-6 bg-aly-bg-alt">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-12">Speaking 🎤</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {speakingTalks.map((talk, i) => (
              <motion.a
                key={i}
                href={talk.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative bg-background rounded-[24px] overflow-hidden border border-border/50 shadow-sm cursor-pointer aspect-video"
              >
                <img
                  src={talk.thumbnail}
                  alt={talk.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-aly-violet ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                  <div className="font-bold">{talk.title}</div>
                  <div className="text-sm opacity-80">{talk.event}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
