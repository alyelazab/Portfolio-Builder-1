import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <button
          className="font-extrabold text-xl tracking-tighter text-foreground cursor-pointer bg-transparent border-none"
          onClick={() => scrollTo("hero")}
          aria-label="Scroll to top"
        >
          Aly.
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary-foreground">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => scrollTo(link.id)} className="hover:text-foreground transition-colors">
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => scrollTo("contact")}
            className="bg-aly-violet hover:bg-aly-violet/90 text-white rounded-xl shadow-sm hidden md:inline-flex"
          >
            Let's Talk
          </Button>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden glass-nav border-t border-border/50"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="py-3 px-4 text-left text-base font-medium text-secondary-foreground hover:text-foreground hover:bg-aly-bg-alt rounded-xl transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="py-3 px-4 text-left text-base font-semibold text-aly-violet hover:bg-aly-violet/10 rounded-xl transition-colors"
              >
                Let's Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
