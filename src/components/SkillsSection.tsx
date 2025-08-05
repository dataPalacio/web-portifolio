import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, BarChart3, Code } from "lucide-react";

const SkillsSection = () => {
  const hardSkills = [
    {
      name: "Python",
      icon: Code,
      description: "Pandas, NumPy, Matplotlib, Seaborn, Selenium",
      color: "tech-green",
    },
    {
      name: "SQL",
      icon: Database,
      description: "MySQL, PostgreSQL, CASE WHEN, CTEs, Views",
      color: "tech-blue",
    },
    {
      name: "Power BI",
      icon: BarChart3,
      description: "Dashboards interativos, DAX, Power Query, Modelagem",
      color: "data-purple",
    },
    {
      name: "Microsoft Excel",
      icon: BarChart3,
      description: "Dashboards interativos, Power Query, Tabelas Dinamicas",
      color: "text-accent",
    },
  ];

  const tools = [
    "Git/GitHub", "Jupyter Notebook", "Figma", 'LLMs', 'n8n'
  ];

  return (
    <section className="py-20 px-4 bg-background relative isolate overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto relative">
        {/* Background effects from HeroSection */}
        <div
          className="absolute inset-0 -z-10 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="bg-gradient-to-tr from-primary/40 via-secondary/40 to-accent/40 opacity-30 animate-blob rounded-full w-[600px] h-[600px] top-[-100px] left-[50%] translate-x-[-50%] absolute"
            style={{ filter: "blur(100px)" }}
          />
          <div
            className="bg-gradient-to-br from-secondary/30 via-primary/30 to-accent/30 opacity-20 animate-blob animation-delay-4000 rounded-full w-[800px] h-[800px] bottom-[-150px] right-[10%] absolute"
            style={{ filter: "blur(150px)" }}
          />
        </div>
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Hard</span>{" "}
            <span className="text-foreground">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Futuro analista de dados em formação, com domínio inicial em Python, SQL e Power BI. Busco oportunidades para evoluir minhas habilidades técnicas e contribuir em projetos reais.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {hardSkills.map((skill, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 shadow-card hover-glow animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-background/50 text-${skill.color}`}>
                    <skill.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{skill.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools Section */}
        <div className="animate-slide-up">
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Ferramentas Complementares
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
                {tools.map((tool, index) => (
                  <Badge 
                    key={index}
                    variant="secondary" 
                    className="px-4 py-2 text-sm hover-glow cursor-pointer transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;