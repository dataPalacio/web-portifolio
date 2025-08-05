import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Download, ExternalLink, BarChart3, Database, TrendingUp, FileText, Newspaper, Award, Hourglass } from "lucide-react";

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/dataPalacio", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/gfpalacio/", label: "LinkedIn" },
    { icon: FileText, href: "https://medium.com/@datapalacio", label: "Medium" },
    { icon: Mail, href: "mailto:palacio.dados@gmail.com", label: "Email" },
  ];

  const stats = [
    { icon: BarChart3, number: "2", label: "Projetos", color: "text-tech-green" },
    { icon: Award, number: "4", label: "Certificações", color: "text-tech-blue" },
    { icon: Hourglass, number: "244", label: "Horas de estudo", color: "text-data-purple" },
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
              De engenheiro civil a analista de dados, focado em aplicar conhecimentos em Python, SQL e Power BI para resolver desafios estratégicos.


            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://drive.google.com/file/d/13YajMZt8RkXZIoPzmzT6jjWkndZ6DEwH/view?usp=sharing" download className="inline-block">
                <Button
                  variant="outline"
                  size="lg"
                  className="hover-glow"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </a>
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
                    "Muitas vezes, a resposta não está em algoritmos complexos de Machine Learning, mas na atitude de investigar profundamente as causas raízes, com uma abordagem proativa"
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