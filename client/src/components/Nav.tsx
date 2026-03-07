import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/data";

export default function Nav() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-extrabold text-xl tracking-tighter text-foreground cursor-pointer" onClick={() => scrollTo('hero')}>
          Aly.
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary-foreground">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => scrollTo(link.id)} className="hover:text-foreground transition-colors">
              {link.label}
            </button>
          ))}
        </div>
        <Button
          onClick={() => scrollTo('contact')}
          className="bg-aly-violet hover:bg-aly-violet/90 text-white rounded-xl shadow-sm"
        >
          Let's Talk
        </Button>
      </div>
    </nav>
  );
}
