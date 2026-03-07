import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-border/50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-secondary-foreground text-sm font-medium">
          Built by Aly · {new Date().getFullYear()}
        </div>
        
        <div className="flex items-center gap-6 text-secondary-foreground">
          <a href="#" className="hover:text-aly-violet transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-aly-violet transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-aly-violet transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>

        <div className="text-secondary-foreground text-sm font-medium flex items-center gap-1">
          Made with code, coffee, and Claude ☕
        </div>
      </div>
    </footer>
  );
}