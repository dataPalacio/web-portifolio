import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Dashboard de Vendas E-commerce",
      description: "Análise completa de vendas com identificação de tendências, sazonalidade e otimização de estoque usando Power BI e SQL.",
      category: "Business Intelligence",
      tags: ["Power BI", "SQL", "DAX", "Python"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Modelo Preditivo de Churn",
      description: "Machine Learning para predição de cancelamento de clientes com 87% de precisão, gerando economia de R$ 2M anuais.",
      category: "Machine Learning",
      tags: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "ETL Pipeline - Dados Financeiros",
      description: "Pipeline automatizado para processamento de dados financeiros em tempo real com validações e alertas.",
      category: "Data Engineering",
      tags: ["Python", "Apache Airflow", "PostgreSQL", "Docker"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Análise de Sentimento - Redes Sociais",
      description: "Monitoramento de sentiment analysis para marca usando NLP e visualização de insights em tempo real.",
      category: "NLP & Analytics",
      tags: ["Python", "NLTK", "Streamlit", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Otimização de Campanha Marketing",
      description: "A/B testing e análise estatística para otimização de campanhas de marketing digital com ROI melhorado.",
      category: "Marketing Analytics",
      tags: ["R", "Statistical Analysis", "Tableau", "Google Analytics"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Dashboard COVID-19 Brasil",
      description: "Visualização interativa dos dados da pandemia no Brasil com análises epidemiológicas e projeções.",
      category: "Public Health",
      tags: ["Python", "Plotly", "Dash", "Pandas"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Business Intelligence": "tech-green",
      "Machine Learning": "tech-blue", 
      "Data Engineering": "data-purple",
      "NLP & Analytics": "chart-orange",
      "Marketing Analytics": "tech-green",
      "Public Health": "tech-blue"
    };
    return colors[category] || "tech-green";
  };

  return (
    <section className="py-20 px-4 bg-muted/30" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Meus</span>{" "}
            <span className="text-gradient-primary">Projetos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções reais que transformaram dados em valor de negócio
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`bg-gradient-card border-border/50 shadow-card hover-glow animate-scale-in group ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <Badge 
                    variant="secondary" 
                    className={`text-${getCategoryColor(project.category)} bg-background/50`}
                  >
                    {project.category}
                  </Badge>
                  {project.featured && (
                    <Badge className="bg-gradient-primary text-primary-foreground">
                      Destaque
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl group-hover:text-gradient-primary transition-all duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline" 
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>


                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-primary text-primary-foreground hover-glow"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-slide-up">
          <Card className="bg-gradient-card border-border/50 shadow-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient-primary">
                Quer ver mais projetos?
              </h3>
              <p className="text-muted-foreground mb-6">
                Visite meu perfil no GitHub para explorar todos os projetos e contribuições open source.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground hover-glow"
              >
                <Github className="h-5 w-5 mr-2" />
                Visitar GitHub
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;