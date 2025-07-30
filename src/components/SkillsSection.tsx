import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, BarChart3, Code } from "lucide-react";

const SkillsSection = () => {
  const hardSkills = [
    {
      name: "Python",
      icon: Code,
      description: "Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn",
      color: "tech-green",
    },
    {
      name: "SQL",
      icon: Database,
      description: "MySQL, PostgreSQL, SQL Server, consultas complexas",
      color: "tech-blue",
    },
    {
      name: "Power BI",
      icon: BarChart3,
      description: "Dashboards interativos, DAX, Power Query, modelagem",
      color: "data-purple",
    },
  ];

  const tools = [
    "R Programming", "Apache Spark", "Docker", "Git/GitHub", 
    "Jupyter Notebook", "Google Analytics", "Looker Studio", 
    "MongoDB", "Airflow", "AWS", "Google Cloud", "Figma"
  ];

  return (
    <section className="py-20 px-4 bg-background" id="skills">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Hard</span>{" "}
            <span className="text-foreground">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para entregar soluções de dados de alta qualidade
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