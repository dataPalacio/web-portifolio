// Modificar o componente JsonLd para não exigir props e exportar diretamente os scripts
import { useEffect } from "react";

const JsonLd = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gustavo Palacio",
    "url": "https://yourdomain.com/",
    "sameAs": [
      "https://github.com/dataPalacio",
      "https://www.linkedin.com/in/gfpalacio/",
      "https://medium.com/@datapalacio"
    ],
    "jobTitle": "Data Analyst",
    "description": "Analista de Dados especializado em Python, SQL, Power BI. Transformando dados em insights estratégicos.",
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Data Palacio - Gustavo | Data Analyst Portfolio",
    "url": "https://yourdomain.com/",
    "creator": {
      "@type": "Person",
      "name": "Gustavo Palacio"
    },
    "description": "Portfolio de Gustavo Palacio com projetos, habilidades e certificações em análise de dados.",
  };

  const certificationsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Certificações de Gustavo Palacio",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "CreativeWork",
          "name": "Análise de dados com linguagem Python",
          "url": "https://mycourse.app/VpSaV2qkmrNh8Qv39"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "CreativeWork",
          "name": "Análise de dados com Power BI e clínica de BI",
          "url": "https://mycourse.app/DD6BsHZCsjLsQUHe8"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "CreativeWork",
          "name": "SQL para data science",
          "url": "https://drive.google.com/file/d/1volYmdkCYaAU-Kmm1I17fgkPRHrZoEhg/view?usp=sharing"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "CreativeWork",
          "name": "Santander - Excel com Inteligência Artificial",
          "url": "https://drive.google.com/file/d/1wF6DbF_Q3vdHP52idn3mS7OsBiALgQnQ/view?usp=sharing"
        }
      }
    ]
  };

  useEffect(() => {
    const scriptPerson = document.createElement("script");
    scriptPerson.type = "application/ld+json";
    scriptPerson.text = JSON.stringify(personSchema);
    document.head.appendChild(scriptPerson);

    const scriptPortfolio = document.createElement("script");
    scriptPortfolio.type = "application/ld+json";
    scriptPortfolio.text = JSON.stringify(portfolioSchema);
    document.head.appendChild(scriptPortfolio);

    const scriptCertifications = document.createElement("script");
    scriptCertifications.type = "application/ld+json";
    scriptCertifications.text = JSON.stringify(certificationsSchema);
    document.head.appendChild(scriptCertifications);

    return () => {
      document.head.removeChild(scriptPerson);
      document.head.removeChild(scriptPortfolio);
      document.head.removeChild(scriptCertifications);
    };
  }, []);

  return null;
};

export default JsonLd;
