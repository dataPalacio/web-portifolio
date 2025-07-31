import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle, Calendar, Award, TrendingUp } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Análise de dados com linguagem Python",
      issuer: "Data Science Academy",
      date: "2024",
      skills: ["Python for Data Analysis", "Data Cleaning", "Scripting"],
      status: "verified",
      credentialUrl: "https://mycourse.app/VpSaV2qkmrNh8Qv39",
    },
    {
      title: "Análise de dados com Power BI e clínica de BI",
      issuer: "Data Science Academy",
      date: "2024",
      skills: ["Dashboards", "ETL", "Power Query", "Data Modeling"],
      status: "verified", 
      credentialUrl: "https://mycourse.app/DD6BsHZCsjLsQUHe8",
    },
    {
      title: "SQL para data science",
      issuer: "Data Science Academy",
      date: "2023",
      skills: ["Queries", "Data Extraction", "CTEs", "Window Functions"],
      status: "verified",
      credentialUrl: "https://drive.google.com/file/d/1volYmdkCYaAU-Kmm1I17fgkPRHrZoEhg/view?usp=sharing"
    },
    {
      title: "Santander - Excel com Inteligência Artificial",
      issuer: "Santander",
      date: "2025",
      skills: ["Excel Data Analysis", "Business Intelligence", "Dashboards", "Pivot Tables"],
      status: "verified",
      credentialUrl: "https://drive.google.com/file/d/1wF6DbF_Q3vdHP52idn3mS7OsBiALgQnQ/view?usp=sharing"
    },
  ];

  const stats = [
    { icon: Award, number: "4", label: "Certificações", color: "text-tech-green" },
    
    { icon: TrendingUp, number: "2025", label: "Última", color: "text-tech-blue" },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden" id="certifications">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Background Effects copied from HeroSection.tsx */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[120%] h-[150%] rounded-full bg-gradient-to-tr from-tech-pink via-tech-purple to-tech-blue opacity-20 blur-[100px] animate-blob mix-blend-multiply pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/3 w-[110%] h-[140%] rounded-full bg-gradient-to-tr from-tech-blue via-tech-green to-tech-pink opacity-20 blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 translate-x-0 -translate-y-1/2 w-[100%] h-[100%] rounded-full bg-gradient-to-tr from-tech-purple via-tech-pink to-tech-green opacity-10 blur-[150px] animate-blob animation-delay-4000 mix-blend-multiply pointer-events-none"></div>
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Certificações &</span>{" "}
            <span className="text-gradient-primary">Qualificações</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Certificado, preparado e pronto pra transformar números em soluções de verdade.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* All Certifications */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Certificações</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <Card 
                    key={index}
                    className="bg-gradient-card border-border/50 shadow-card hover-glow animate-scale-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg">{cert.title}</CardTitle>
                        {cert.status === "verified" && (
                          <CheckCircle className="h-4 w-4 text-success-green flex-shrink-0 mt-1" />
                        )}
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span className="font-medium">{cert.issuer}</span>
                        <span>•</span>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {cert.date}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {/* Skills */}
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="outline" 
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                        {cert.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{cert.skills.length - 3}
                          </Badge>
                        )}
                      </div>

                      {/* Credential Button */}
                      <Button asChild variant="ghost" size="sm" className="w-full text-primary hover:text-primary-foreground hover:bg-primary">
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center w-full justify-center"
                        >
                          <ExternalLink className="h-3 w-3 mr-2" />
                          Acesse minha certificação
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Sidebar */}
          <div className="lg:col-span-4 animate-slide-up">
            <Card className="bg-gradient-card border-border/50 shadow-card sticky top-24">
              <CardHeader>
                <CardTitle className="text-xl text-center">
                  Resumo de Certificações
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
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

                <div className="mt-8 p-4 bg-background/30 rounded-lg border border-border/30">
                  <h4 className="font-semibold mb-2 text-foreground">Próximos Objetivos</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• n8n + Cursor</li>
                    <li>• Machine Learning</li>
                    <li>• Data Warehouse </li>
                  </ul>
                </div>

                <Button
                  asChild
                  className="w-full bg-gradient-primary text-primary-foreground hover-glow"
                >
                  <a
                    href="https://www.linkedin.com/in/gfpalacio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center bg-gradient-primary text-primary-foreground hover-glow px-4 py-2 rounded"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver Todas no LinkedIn
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;