import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle, Calendar, Award, TrendingUp } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Microsoft Certified: Data Analyst Associate",
      issuer: "Microsoft",
      date: "2024",
      skills: ["Power BI", "DAX", "Power Query", "Data Modeling"],
      status: "verified",
      credentialUrl: "#",
    },
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      date: "2023",
      skills: ["R Programming", "Tableau", "SQL", "Data Cleaning"],
      status: "verified", 
      credentialUrl: "#",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      skills: ["AWS", "Cloud Computing", "Data Storage"],
      status: "verified",
      credentialUrl: "#"
    },
    {
      title: "Python for Data Science and AI",
      issuer: "IBM",
      date: "2023",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib"],
      status: "verified",
      credentialUrl: "#"
    },
    {
      title: "SQL for Data Science",
      issuer: "University of California, Davis",
      date: "2023",
      skills: ["SQL", "Database Management", "Query Optimization"],
      status: "verified",
      credentialUrl: "#"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University",
      date: "2023",
      skills: ["Machine Learning", "Deep Learning", "Neural Networks"],
      status: "verified",
      credentialUrl: "#"
    },
    {
      title: "Tableau Desktop Specialist",
      issuer: "Tableau",
      date: "2022",
      skills: ["Tableau", "Data Visualization", "Dashboard Design"],
      status: "verified",
      credentialUrl: "#"
    },
    {
      title: "Advanced Excel for Business",
      issuer: "Macquarie University",
      date: "2022",
      skills: ["Excel", "VBA", "Financial Modeling", "Data Analysis"],
      status: "verified",
      credentialUrl: "#"
    }
  ];

  const stats = [
    { icon: Award, number: "8", label: "Certificações", color: "text-tech-green" },
    
    { icon: TrendingUp, number: "2024", label: "Última", color: "text-tech-blue" },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30" id="certifications">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Certificações &</span>{" "}
            <span className="text-gradient-primary">Qualificações</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Formação contínua e certificações que validam minha expertise em análise de dados
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
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="w-full text-primary hover:text-primary-foreground hover:bg-primary"
                      >
                        <ExternalLink className="h-3 w-3 mr-2" />
                        Acesse minha certificação
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
                    <li>• Snowflake Data Analyst</li>
                    <li>• Databricks Certified Associate</li>
                    <li>• Azure Data Scientist Associate</li>
                  </ul>
                </div>

                <Button 
                  className="w-full bg-gradient-primary text-primary-foreground hover-glow"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Ver Todas no LinkedIn
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