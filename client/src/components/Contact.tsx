import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-aly-bg-alt">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's build something 🤝</h2>
            <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
              Whether you're looking to build a new product, or just want to chat about AI and SaaS, I'm always open to connecting.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2 space-y-4">
              <div className="bg-background p-6 rounded-[16px] border border-border/50 flex items-center gap-4 hover-lift">
                <div className="w-12 h-12 bg-aly-violet/10 text-aly-violet rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-sm text-secondary-foreground">hello@alyelazab.com</div>
                </div>
              </div>
              <div className="bg-background p-6 rounded-[16px] border border-border/50 flex items-center gap-4 hover-lift">
                <div className="w-12 h-12 bg-[#0077b5]/10 text-[#0077b5] rounded-full flex items-center justify-center">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">LinkedIn</div>
                  <div className="text-sm text-secondary-foreground">/in/alyelazab</div>
                </div>
              </div>
              <div className="bg-background p-6 rounded-[16px] border border-border/50 flex items-center gap-4 hover-lift">
                <div className="w-12 h-12 bg-aly-coral/10 text-aly-coral rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-sm text-secondary-foreground">Abu Dhabi, UAE</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 bg-background p-8 rounded-[24px] border border-border/50 shadow-sm">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Name</label>
                    <Input placeholder="John Doe" className="bg-aly-bg-alt border-transparent focus-visible:ring-aly-violet rounded-xl h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Email</label>
                    <Input type="email" placeholder="john@example.com" className="bg-aly-bg-alt border-transparent focus-visible:ring-aly-violet rounded-xl h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Message</label>
                  <Textarea placeholder="Tell me about your project..." className="bg-aly-bg-alt border-transparent focus-visible:ring-aly-violet rounded-xl min-h-[120px] resize-none" />
                </div>
                <Button className="w-full h-14 rounded-xl bg-aly-violet hover:bg-aly-violet/90 text-white font-semibold text-base hover-lift">
                  Send Message <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}