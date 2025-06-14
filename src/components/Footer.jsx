import { ArrowUp, Instagram, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Esquerda: Copyright e Info */}
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} PedroJunior.co. All rights
            reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Built with React, TailwindCSS, and ❤️ by Pedro Junior.
          </p>
        </div>

        {/* Centro: Navegação rápida */}
        <div className="flex space-x-6 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </div>

        {/* Direita: Redes sociais + voltar ao topo */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/pedro-j%C3%BAniorr/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/junior_pedrooo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://github.com/anon595"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="#hero"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
