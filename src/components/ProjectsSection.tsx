import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Análise de Tickets de Suporte Técnico",
      description: "Desenvolvi um pipeline de dados para limpeza, organização e enriquecimento de tickets de suporte técnico, transformando dados brutos em informações estruturadas para análise.",
      category: "Python | Exploração de Dados (EDA) | Power BI",
      tags: ["Python", "Pandas", "SQL", "Seaborn", "Matplotlib", "Data Visualization", "Storytelling "],
      demoUrl: "https://github.com/dataPalacio/support-tickets-analytics/blob/main/notebooks/data_explorer.ipynb",
      githubUrl: "https://github.com/dataPalacio/support-tickets-analytics",
      featured: true
    },
    
    {
      title: "Análise de Dados do FIFA 19",
      description: "Desenvolvi um projeto de análise de dados com foco em visualização e storytelling, aplicando técnicas de limpeza, transformação e análise estatística em dados esportivos.",
      category: "Python | Exploração de Dados (EDA)",
      tags: ["Power BI", "Python", "Seaborn", "Matplotlib", "Data Visualization", "Storytelling"],
      demoUrl: "https://github.com/dataPalacio/proj-fifa19/blob/main/notebook/fifa19_analise.ipynb",
      githubUrl: "https://github.com/dataPalacio/proj-fifa19",
      featured: true
    },
  ];

  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden" id="projects">
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-tech-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-tech-blue/10 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="text-foreground">Meus</span>{" "}
          <span className="text-gradient-primary">Projetos</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-border/50 shadow-card hover-glow animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col space-y-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <span className="text-sm text-muted-foreground">{project.category}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 w-full">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button size="sm" className="w-full bg-gradient-primary text-primary-foreground hover-glow">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Saiba Mais
                    </Button>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline" size="sm" className="w-full">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;