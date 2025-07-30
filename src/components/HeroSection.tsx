import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Download, ExternalLink, BarChart3, Database, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/gustavo-palacio", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/gustavo-palacio", label: "LinkedIn" },
    { icon: Mail, href: "mailto:gustavo@datapalacio.com", label: "Email" },
  ];

  const stats = [
    { icon: BarChart3, number: "12+", label: "Projetos", color: "text-tech-green" },
    { icon: Database, number: "8", label: "Certificações", color: "text-tech-blue" },
    { icon: TrendingUp, number: "15+", label: "Ferramentas", color: "text-data-purple" },
  ];

  return (
    <section className="min-h-screen pt-24 pb-16 px-4 relative overflow-hidden" id="about">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-tech-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-tech-blue/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8 animate-fade-in">
            {/* Badge */}
            <Badge 
              variant="secondary" 
              className="w-fit bg-gradient-primary text-primary-foreground shadow-primary px-4 py-2"
            >
              Data Analyst
            </Badge>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-gradient-primary">Gustavo</span>{" "}
                <span className="text-foreground">Palacio</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl">
                Transformando dados em{" "}
                <span className="text-gradient-accent font-medium">insights estratégicos</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Especialista em análise de dados com foco em Python, SQL e Power BI. 
              Experiência em transformar dados complexos em soluções de negócio 
              que geram valor real para organizações.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover-glow text-primary-foreground font-semibold"
              >
                Ver Projetos
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="hover-glow"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-4">
              <span className="text-sm text-muted-foreground">Conecte-se:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="lg:col-span-4 animate-scale-in">
            <Card className="bg-gradient-card border-border/50 shadow-card hover-glow">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-foreground">
                  Estatísticas
                </h3>
                <div className="space-y-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-background/50 ${stat.color}`}>
                        <stat.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-foreground">
                          {stat.number}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-background/30 rounded-lg border border-border/30">
                  <p className="text-sm text-muted-foreground">
                    "Dados são o novo petróleo, mas insights são a gasolina refinada."
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-2">
                    - Gustavo Palacio
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;