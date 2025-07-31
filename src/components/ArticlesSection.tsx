import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ArticlesSection = () => {
  const articles = [
    {
      title: "Qualquer semelhança é mera coincidência: SQL e Pandas.",
      excerpt: "Explora como SQL e Pandas realizam tarefas semelhantes com sintaxes diferentes.",
      category: "Data Analysis",
      tags: ["Python", "Business Intelligence", "Analytics", "SQL"],
      url: "https://datapalacio.medium.com/qualquer-semelhan%C3%A7a-%C3%A9-mera-coincid%C3%AAncia-sql-e-pandas-5b33c1551a23",
      imageUrl: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*co0PoyTF9WqAikTpXX29aA.png",
      featured: true
    },
    {
      title: "Transformando Dados em Decisões: Otimizando o Suporte Técnico com Análise de Dados",
      excerpt: "Automatiza a limpeza e análise de dados para gerar relatórios confiáveis e decisões mais rápidas.",
      category: "Business Intelligence",
      tags: ["#PowerBI", "#DataDriven", "#EngenhariaDeDados", "#DataScience"],
      url: "https://datapalacio.medium.com/transformando-dados-em-decis%C3%B5es-otimizando-o-suporte-t%C3%A9cnico-com-an%C3%A1lise-de-dados-25b005102404",
      imageUrl: "https://www.criarmeme.com.br/meme/meme-68773-JA--ABRIU-CHAMADO.jpg",
      featured: false
    },
    {
      title: "Artigo em breve",
      excerpt: "Lorem ipsum dolor sit amet. Sit fugiat expedita aut corporis omnis non inventore dolorem et natus recusandae aut Quis animi aut laudantium quam ut labore eligendi. Aut dolor quae non expedita sunt et neque galisum et iusto beatae.",
      category: "Categoria Exemplo",
      tags: ["Tag1", "Tag2"],
      url: "#",
      imageUrl: "https://freepngimg.com/save/11420-coming-soon-png-file/659x170",
      featured: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden" id="articles">
      {/* Background Effects */}
      {/* <div className="absolute inset-0 bg-gradient-hero"></div> */}
      {/* <div className="absolute top-20 right-10 w-72 h-72 bg-tech-green/10 rounded-full blur-3xl"></div> */}
      {/* <div className="absolute bottom-20 left-10 w-96 h-96 bg-tech-blue/10 rounded-full blur-3xl"></div> */}

      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        <span className="text-foreground">Artigos</span>{" "}
        <span className="text-gradient-primary">em Destaque</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-5xl mx-auto">
        {articles.map((article, index) => (
          <Card
            key={index}
            className="bg-gradient-card border-border/50 shadow-card hover-glow animate-scale-in rounded-lg p-6 flex items-start gap-6 max-w-2xl mx-auto"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {article.imageUrl && (
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-20 h-20 object-contain rounded-md bg-transparent"
              />
            )}
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-foreground flex items-center gap-2">
                {article.title}
                {article.featured && (
                  <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">Destaque</span>
                )}
              </h3>
              <p className="text-muted-foreground mb-4 max-w-xl">{article.excerpt}</p>
              <Button asChild variant="ghost" size="sm" className="w-full text-primary hover:text-primary-foreground hover:bg-primary">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center w-full justify-center"
                >
                  Leia mais
                </a>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ArticlesSection;
