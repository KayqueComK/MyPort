export interface Project {
  id: string;
  title: string;
  category: string;
  featured: boolean;
  problem: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
  demoCredentials?: string;
}

export const projects: Project[] = [
  {
    id: "financely",
    title: "Financely - Gestão Financeira",
    category: "Full Stack / Finanças",
    featured: true,
    problem:
      "Resolve a falta de controle orçamentário centralizando fluxo de caixa, orçamentos mensais e relatórios inteligentes em tempo real.",
    description:
      "Plataforma completa de gestão financeira desenvolvida com arquitetura robusta. Conta com autenticação de usuários, modelagem relacional via Prisma, gráficos analíticos interativos e containerização com Docker.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Docker"],
    link: "https://financely-gules.vercel.app/login",
    github: "https://github.com/KayqueComK/financely",
    demoCredentials: "demo@financely.com / demo123",
  },
  {
    id: "kanban",
    title: "Kanban Dashboard com Pomodoro",
    category: "Produtividade & Web",
    featured: false,
    problem:
      "Combina a agilidade do método Kanban com blocos de hiperfoco (Pomodoro) para evitar a sobrecarga diária.",
    description:
      "Quadro kanban com suporte a drag-and-drop nativo no navegador, timer Pomodoro sonoro customizável, modo escuro e persistência de dados local sem dependências externas.",
    tags: ["JavaScript (ES6+)", "HTML5", "CSS Moderno", "Drag & Drop", "LocalStorage"],
    link: "https://projeto-kanban-com-pomodoro.vercel.app/",
    github: "https://github.com/KayqueComK/Projeto-Kanban-com-pomodoro",
  },
  {
    id: "skyloft",
    title: "Skyloft - Locação de Chalés",
    category: "UI/UX & Landing Page",
    featured: false,
    problem:
      "Proporciona uma experiência visual de alto padrão para reservas de hospedagens exclusivas em meio à natureza.",
    description:
      "Landing page editorial com visual limpo inspirada no modelo Airbnb de chalés e lofts. Foco em tipografia refinada, arquitetura de informação clara e microinterações desenhadas no Figma.",
    tags: ["React", "Tailwind CSS", "UI/UX Design", "Figma", "Design Responsivo"],
    link: "https://skylofts.vercel.app/",
    github: "https://github.com/KayqueComK/skylofts",
  },
  {
    id: "portfolio",
    title: "Portfólio Pessoal (MyPort)",
    category: "Creative Coding & 3D",
    featured: false,
    problem:
      "Une design expressivo e engenharia criativa com renderização WebGL em tempo real sem prejudicar performance.",
    description:
      "Portfólio pessoal construído com Next.js (Turbopack) e animações 3D interativas com Three.js/WebGL. Transições fluidas com Framer Motion, cursor customizado e identidade visual autoral.",
    tags: ["Next.js", "Three.js", "WebGL", "Framer Motion", "Tailwind CSS", "TypeScript"],
    link: "https://meuportifolio-flax-three.vercel.app/",
    github: "https://github.com/KayqueComK/MyPort",
  },
];

/** Aplica as traduções do contexto de idioma, usando o texto original como fallback. */
export function localizeProject(
  project: Project,
  t: (key: string) => string
): Project {
  const tr = (field: "title" | "category" | "problem" | "description") =>
    t(`work.projects.${project.id}.${field}`) || project[field];

  return {
    ...project,
    title: tr("title"),
    category: tr("category"),
    problem: tr("problem"),
    description: tr("description"),
  };
}
