"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

export const translations = {
  pt: {
    header: {
      home: "Início",
      work: "Trabalhos",
      about: "Sobre",
      contact: "Contato",
      menuOpen: "Abrir menu",
      menuClose: "Fechar menu",
    },
    home: {
      greeting: "Olá, sou o",
      name: "Kayque Alberto",
      welcome: "Seja bem-vindo ao meu",
      portfolio: "portfólio",
      role: "Desenvolvedor Web",
      subtitle:
        "Estudante de Sistemas de Informação e desenvolvedor web. Crio aplicações com JavaScript, TypeScript, Node.js e Next.js.",
      viewProjects: "Ver meus projetos",
      aboutMe: "Mais sobre mim",
      contactMe: "Me contatar",
    },
    about: {
      title: "Sobre mim.",
      pageTitle: "Sobre mim | Kayque Alberto",
      greeting: "Olá, eu sou o",
      nameHighlight: "Kayque Alberto",
      introRest:
        ", tenho 21 anos e atualmente moro em Minas Gerais e sou apaixonado por Tecnologia.",
      p1: "Estudo Sistemas de Informação na UNIVALE no meu dia a dia, escrevo consultas em SQL Server e valido a consistência de dados, além de fazer a ponte entre clientes e o time de desenvolvimento.",
      p2: "Meu projeto mais completo é o Financely, uma plataforma de gestão financeira com autenticação, banco de dados com Prisma, gráficos, cotações de mercado e exportação de relatórios. Também tenho um estudo de CRUD com APIs REST em Node.js, um dashboard Kanban com Pomodoro e este portfólio, onde exploro shaders e modelagem 3D na web.",
      p3: "Meu objetivo é atuar como desenvolvedor júnior, construindo sistemas bem estruturados, testados e documentados, que tornem o dia a dia das pessoas mais simples.",
      p4: "Fora do código, sou músico (violão, guitarra, cajon e cavaquinho) e voluntário há anos na Fraternidade O Caminho e na Comunidade Missionária Católica Ágape (grupo Lolek), experiências que me ensinaram escuta, resiliência e trabalho em equipe.",
      skillsTitle: "Habilidades & Tecnologias",
      skillsCat1: "Back-end",
      skillsCat2: "Front-end",
      skillsCat3: "Ferramentas",
      ctaQuestion: "Quer ver o resultado prático dessas habilidades?",
      ctaProjects: "Ver projetos",
      ctaContact: "Contato",
    },
    work: {
      title: "Trabalhos",
      pageTitle: "Trabalhos | Kayque Alberto",
      featuredBadge: "Destaque",
      problemLabel: "Problema que resolve:",
      demoLabel: "Acesso para teste (Demo):",
      liveProjectBtn: "Acessar Projeto",
      viewCodeBtn: "Ver Código",
      codeShortBtn: "Código",
      ctaQuestion: "Gostou dos projetos ou tem uma ideia em mente?",
      contactBtn: "Me contatar",
      footerCredits: "Projetado & codado por KIQ",
      projects: {
        financely: {
          title: "Financely - Gestão Financeira",
          category: "Full Stack / Finanças",
          problem:
            "Resolve a falta de controle orçamentário centralizando fluxo de caixa, orçamentos mensais e relatórios inteligentes em tempo real.",
          description:
            "Plataforma completa de gestão financeira desenvolvida com arquitetura robusta. Conta com autenticação de usuários, modelagem relacional via Prisma, gráficos analíticos interativos e containerização com Docker.",
        },
        kanban: {
          title: "Kanban Dashboard com Pomodoro",
          category: "Produtividade & Web",
          problem:
            "Combina a agilidade do método Kanban com blocos de hiperfoco (Pomodoro) para evitar a sobrecarga diária.",
          description:
            "Quadro kanban com suporte a drag-and-drop nativo no navegador, timer Pomodoro sonoro customizável, modo escuro e persistência de dados local sem dependências externas.",
        },
        skyloft: {
          title: "Skyloft - Locação de Chalés",
          category: "UI/UX & Landing Page",
          problem:
            "Proporciona uma experiência visual de alto padrão para reservas de hospedagens exclusivas em meio à natureza.",
          description:
            "Landing page editorial com visual limpo inspirada no modelo Airbnb de chalés e lofts. Foco em tipografia refinada, arquitetura de informação clara e microinterações desenhadas no Figma.",
        },
        portfolio: {
          title: "Portfólio Pessoal (MyPort)",
          category: "Creative Coding & 3D",
          problem:
            "Une design expressivo e engenharia criativa com renderização WebGL em tempo real sem prejudicar performance.",
          description:
            "Portfólio pessoal construído com Next.js (Turbopack) e um fundo animado com shaders WebGL via OGL. Transições fluidas com Framer Motion, cursor customizado e identidade visual autoral.",
        },
      },
    },
    contact: {
      title: "Vamos conversar.",
      pageTitle: "Contato | Kayque Alberto",
      status: "Disponível para novas oportunidades & freelance",
      description:
        "Interessado em trabalhar juntos, tem uma oportunidade em mente ou quer falar sobre desenvolvimento? Sinta-se à vontade para me enviar um e-mail ou baixar meu currículo.",
      copyEmailBtn: "Copiar E-mail",
      copiedEmailBtn: "✓ E-mail Copiado!",
      downloadCvBtn: "↓ Baixar Currículo (PDF)",
      cvFileName: "Curriculo-Kayque-Alberto.pdf",
    },
  },
  en: {
    header: {
      home: "Home",
      work: "Work",
      about: "About",
      contact: "Contact",
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },
    home: {
      greeting: "Hello, I am",
      name: "Kayque Alberto",
      welcome: "Welcome to my",
      portfolio: "portfolio",
      role: "Web Developer",
      subtitle:
        "Information Systems student and web developer. Building applications with JavaScript, TypeScript, Node.js, and Next.js.",
      viewProjects: "View my projects",
      aboutMe: "More about me",
      contactMe: "Get in touch",
    },
    about: {
      title: "About me.",
      pageTitle: "About me | Kayque Alberto",
      greeting: "Hello, I'm",
      nameHighlight: "Kayque Alberto",
      introRest:
        ", a web developer from Governador Valadares, MG (Brazil). I am studying Information Systems at UNIVALE and work as an ERP Support Technician at Softek, where I troubleshoot incidents, write SQL Server queries, validate data consistency, and bridge the gap between clients and the development team.",
      p1: "In day-to-day coding, I work with JavaScript, TypeScript, and Node.js, building RESTful APIs and interfaces with React and Next.js. I love understanding the entire system: from the database and business logic to what the user sees on screen.",
      p2: "My most comprehensive project is Financely, a financial management platform with user authentication, a Prisma-backed database, interactive charts, market quotes, and report exports. I also have a REST API CRUD study in Node.js, a Kanban dashboard with Pomodoro, and this portfolio, where I explore web shaders and 3D modeling.",
      p3: "My goal is to work as a junior developer, building well-structured, tested, and documented software that simplifies people's everyday lives.",
      p4: "Outside of code, I am a musician (acoustic guitar, electric guitar, cajón, and cavaquinho) and a long-time volunteer at Fraternidade O Caminho and Comunidade Missionária Católica Ágape (Lolek group)—experiences that taught me active listening, resilience, and teamwork.",
      experienceTitle: "Experience",
      exp1Role: "ERP Support Technician",
      exp1Company: "Softek Automação",
      exp1Period: "May 2026 – Present",
      exp1Desc:
        "Troubleshooting ERP incidents, writing SQL Server queries, validating data consistency, and directly collaborating with the engineering team.",
      exp2Role: "Consultative Sales Representative",
      exp2Company: "Livraria João Paulo II",
      exp2Period: "Sep 2025 – Mar 2026",
      exp2Desc:
        "Consultative customer service, CRM lead management, and client communication, building strong active listening and teamwork skills.",
      skillsTitle: "Skills & Technologies",
      skillsCat1: "Back-end",
      skillsCat2: "Front-end",
      skillsCat3: "Tools",
      ctaQuestion: "Want to see these skills in action?",
      ctaProjects: "View projects",
      ctaContact: "Contact",
    },
    work: {
      title: "Work",
      pageTitle: "Work | Kayque Alberto",
      featuredBadge: "Featured",
      problemLabel: "Problem it solves:",
      demoLabel: "Demo test credentials:",
      liveProjectBtn: "Live Project",
      viewCodeBtn: "View Code",
      codeShortBtn: "Code",
      ctaQuestion: "Liked the projects or have an idea in mind?",
      contactBtn: "Get in touch",
      footerCredits: "Designed & coded by KIQ",
      projects: {
        financely: {
          title: "Financely - Financial Management",
          category: "Full Stack / Finance",
          problem:
            "Solves the lack of budget control by centralizing cash flow, monthly budgets, and smart real-time reports.",
          description:
            "Complete financial management platform built with robust architecture. Features user authentication, Prisma relational modeling, interactive charts, and Docker containerization.",
        },
        kanban: {
          title: "Kanban Dashboard with Pomodoro",
          category: "Productivity & Web",
          problem:
            "Combines Kanban agile methodology with focused Pomodoro time blocks to prevent daily overwhelm.",
          description:
            "Kanban board with native browser drag-and-drop, customizable Pomodoro audio timer, dark mode, and local storage data persistence without external libraries.",
        },
        skyloft: {
          title: "Skyloft - Cabin & Loft Rentals",
          category: "UI/UX & Landing Page",
          problem:
            "Delivers a high-end visual experience for booking exclusive nature retreats and lofts.",
          description:
            "Editorial landing page inspired by Airbnb cabin and loft stays. Focused on refined typography, clear information hierarchy, and micro-interactions designed in Figma.",
        },
        portfolio: {
          title: "Personal Portfolio (MyPort)",
          category: "Creative Coding & 3D",
          problem:
            "Blends expressive design and creative engineering with real-time WebGL rendering without sacrificing performance.",
          description:
            "Personal portfolio built with Next.js (Turbopack) and an animated WebGL shader background via OGL. Features fluid Framer Motion transitions, custom cursor, and signature identity.",
        },
      },
    },
    contact: {
      title: "Let's talk.",
      pageTitle: "Contact | Kayque Alberto",
      status: "Available for new opportunities & freelance",
      description:
        "Interested in working together, have an opportunity in mind, or want to chat about development? Feel free to drop me an email or download my resume.",
      copyEmailBtn: "Copy Email",
      copiedEmailBtn: "✓ Email Copied!",
      downloadCvBtn: "↓ Download Resume (PDF)",
      cvFileName: "Resume-Kayque-Alberto.pdf",
    },
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: "pt",
  setLanguage: () => { },
  toggleLanguage: () => { },
  t: () => "",
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("pt");

  useEffect(() => {
    const saved = localStorage.getItem("preferred_language") as Language | null;
    if (saved === "pt" || saved === "en") {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("preferred_language", lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  };

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  const t = (path: string): string => {
    const keys = path.split(".");
    let current: unknown = translations[language];
    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = (current as Record<string, unknown>)[key];
      } else {
        return path;
      }
    }
    return typeof current === "string" ? current : path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
