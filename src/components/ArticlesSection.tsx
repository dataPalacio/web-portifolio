import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const ArticlesSection = () => {
  const featuredArticles = [
    {
      title: "Como transformar dados brutos em insights estratégicos",
      excerpt: "Um guia completo sobre o processo de análise de dados, desde a coleta até a apresentação de insights que geram valor real para o negócio.",
      category: "Data Analysis",
      tags: ["Python", "Business Intelligence", "Analytics"],
      url: "#",
      featured: true
    },
    {
      title: "Machine Learning para previsão de churn: Estudo de caso",
      excerpt: "Implementação prática de um modelo de ML para predição de cancelamento de clientes, incluindo feature engineering e interpretabilidade.",
      category: "Machine Learning", 
      tags: ["Python", "Scikit-learn", "Churn Prediction"],
      url: "#",
      featured: true
    }
  ];

  const regularArticles = [
    {
      title: "Power BI vs Tableau: Qual escolher para seu projeto?",
      excerpt: "Comparação detalhada entre as duas principais ferramentas de BI do mercado.",
      category: "Business Intelligence",
      tags: ["Power BI", "Tableau", "Comparison"],
      url: "#"
    },
    {
      title: "SQL para análise de dados: Queries que todo analista deve saber",
      excerpt: "As consultas SQL mais importantes para análise de dados e otimização de performance.",
      category: "SQL",
      tags: ["SQL", "Database", "Performance"],
      url: "#"
    },
    {
      title: "Visualização de dados: Princípios de design para dashboards",
      excerpt: "Melhores práticas para criar dashboards que comunicam insights de forma clara e efetiva.",
      category: "Data Visualization",
      tags: ["Design", "Dashboard", "UX"],
      url: "#"
    },
    {
      title: "Python para análise de dados: Pandas vs Polars",
      excerpt: "Comparação entre as bibliotecas Pandas e Polars para processamento de dados.",
      category: "Python",
      tags: ["Python", "Pandas", "Polars"],
      url: "#"
    },
    {
      title: "A/B Testing: Como validar hipóteses com dados",
      excerpt: "Metodologia completa para implementar testes A/B e tomar decisões baseadas em dados.",
      category: "Statistics",
      tags: ["Statistics", "A/B Testing", "Experimentation"],
      url: "#"
    },
    {
      title: "Data Quality: Como garantir a confiabilidade dos seus dados",
      excerpt: "Estratégias e ferramentas para monitorar e melhorar a qualidade dos dados.",
      category: "Data Engineering",
      tags: ["Data Quality", "ETL", "Monitoring"],
      url: "#"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Data Analysis": "tech-green",
      "Machine Learning": "tech-blue",
      "Business Intelligence": "data-purple",
      "SQL": "chart-orange",
      "Data Visualization": "tech-green",
      "Python": "tech-blue",
      "Statistics": "data-purple",
      "Data Engineering": "tech-green"
    };
    return colors[category] || "tech-green";
  };

  return (
    <section className="py-20 px-4 bg-background" id="articles">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Artigos &</span>{" "}
            <span className="text-gradient-primary">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compartilhando conhecimento sobre análise de dados, machine learning e business intelligence
          </p>
        </div>

        {/* Featured Articles */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredArticles.map((article, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/50 shadow-card hover-glow animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge 
                    variant="secondary"
                    className={`text-${getCategoryColor(article.category)} bg-background/50`}
                  >
                    {article.category}
                  </Badge>
                  <Badge className="bg-gradient-primary text-primary-foreground">
                    Destaque
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-gradient-primary transition-all duration-300">
                  {article.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline" 
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Read Button */}
                <Button 
                  size="lg"
                  className="w-full bg-gradient-primary text-primary-foreground hover-glow"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Ler Artigo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {regularArticles.map((article, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/50 shadow-card hover-glow animate-scale-in group"
              style={{ animationDelay: `${(index + 2) * 0.05}s` }}
            >
              <CardHeader className="pb-4">
                <Badge 
                  variant="secondary"
                  className={`text-${getCategoryColor(article.category)} bg-background/50 w-fit`}
                >
                  {article.category}
                </Badge>
                <CardTitle className="text-lg group-hover:text-gradient-primary transition-all duration-300">
                  {article.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {article.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline" 
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Read Button */}
                <div className="pt-4 border-t border-border/50">
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-primary text-primary-foreground hover-glow"
                  >
                    <ExternalLink className="h-3 w-3 mr-2" />
                    Ler Artigo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="text-center animate-slide-up">
          <Card className="bg-gradient-card border-border/50 shadow-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient-primary">
                Fique por dentro das novidades
              </h3>
              <p className="text-muted-foreground mb-6">
                Siga no LinkedIn para receber conteúdo exclusivo sobre análise de dados e insights do mercado.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground hover-glow"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Seguir no LinkedIn
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;