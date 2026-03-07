import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, MapPin, Send, Check, Loader2 } from "lucide-react";
import { contactData, siteConfig } from "@/lib/data";

const EDGE_FN_URL = "https://czhhwofczlvxsiavkpwd.supabase.co/functions/v1/send-contact";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    if (!payload.name || !payload.email || !payload.message) return;

    setStatus("sending");
    try {
      const res = await fetch(EDGE_FN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

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
            <h2 className="text-4xl font-bold mb-4">{contactData.heading} 🤝</h2>
            <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
              {contactData.subheading}
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2 space-y-4">
              <a href={`mailto:${siteConfig.email}`} className="bg-background p-6 rounded-[16px] border border-border/50 flex items-center gap-4 hover-lift block">
                <div className="w-12 h-12 bg-aly-violet/10 text-aly-violet rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">{contactData.emailLabel}</div>
                  <div className="text-sm text-secondary-foreground">{siteConfig.email}</div>
                </div>
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="bg-background p-6 rounded-[16px] border border-border/50 flex items-center gap-4 hover-lift block">
                <div className="w-12 h-12 bg-[#0077b5]/10 text-[#0077b5] rounded-full flex items-center justify-center">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">{contactData.linkedinLabel}</div>
                  <div className="text-sm text-secondary-foreground">/in/aly-elazab</div>
                </div>
              </a>
              <div className="bg-background p-6 rounded-[16px] border border-border/50 flex items-center gap-4 hover-lift">
                <div className="w-12 h-12 bg-aly-coral/10 text-aly-coral rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">{contactData.locationLabel}</div>
                  <div className="text-sm text-secondary-foreground">{siteConfig.location}</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 bg-background p-8 rounded-[24px] border border-border/50 shadow-sm">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Name</label>
                    <Input name="name" required placeholder="John Doe" className="bg-aly-bg-alt border-transparent focus-visible:ring-aly-violet rounded-xl h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Email</label>
                    <Input name="email" type="email" required placeholder="john@example.com" className="bg-aly-bg-alt border-transparent focus-visible:ring-aly-violet rounded-xl h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Message</label>
                  <Textarea name="message" required placeholder="Tell me about your project..." className="bg-aly-bg-alt border-transparent focus-visible:ring-aly-violet rounded-xl min-h-[120px] resize-none" />
                </div>
                <Button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className="w-full h-14 rounded-xl bg-aly-violet hover:bg-aly-violet/90 text-white font-semibold text-base hover-lift disabled:opacity-70"
                >
                  {status === "sending" && <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...</>}
                  {status === "sent" && <><Check className="w-4 h-4 mr-2" /> Message Sent!</>}
                  {status === "error" && <>Try Again <Send className="w-4 h-4 ml-2" /></>}
                  {status === "idle" && <>Send Message <Send className="w-4 h-4 ml-2" /></>}
                </Button>
                {status === "error" && (
                  <p className="text-sm text-aly-coral text-center">Something went wrong. Please try again or email me directly.</p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
