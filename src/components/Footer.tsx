import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowUp, Github, Linkedin, Mail, Heart, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Sobre", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projetos", href: "#projects" },
    { name: "Artigos", href: "#articles" },
    { name: "Certificações", href: "#certifications" },
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/dataPalacio", 
      label: "GitHub",
      description: "Projetos e código"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/gfpalacio/", 
      label: "LinkedIn",
      description: "Rede profissional"
    },
    { 
      icon: Mail, 
      href: "mailto:palacio.dados@gmail.com", 
      label: "Email",
      description: "Contato direto"
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gradient-primary mb-2">
                Data Palacio
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Dados não mentem, eles apenas revelam a verdade escondida.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Conecte-se</h4>
              <div className="grid gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200 group"
                  >
                    <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                    <div>
                      <div className="font-medium">{social.label}</div>
                      <div className="text-xs text-muted-foreground/80">
                        {social.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          {/* A seção "Navegação Rápida" foi removida conforme solicitado */}

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <div>
                  <div className="text-sm">Email</div>
                  <div className="text-xs">palacio.dados@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <div>
                  <div className="text-sm">Localização</div>
                  <div className="text-xs">Natal, RN - Brasil</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm text-muted-foreground">
              © 2025 Data Palacio. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <p className="text-xs text-muted-foreground flex items-center">
              Feito com <Heart className="h-3 w-3 mx-1 text-red-500" /> e dados
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="hover:bg-primary/10 hover:text-primary"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Topo
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;