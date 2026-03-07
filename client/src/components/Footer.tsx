import { Github, Linkedin } from "lucide-react";
import { footerText, siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-border/50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-secondary-foreground text-sm font-medium">
          {footerText.credit} · {new Date().getFullYear()}
        </div>

        <div className="flex items-center gap-6 text-secondary-foreground">
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-aly-violet transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="hover:text-aly-violet transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </div>

        <div className="text-secondary-foreground text-sm font-medium flex items-center gap-1">
          {footerText.tagline} ☕
        </div>
      </div>
    </footer>
  );
}
