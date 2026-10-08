# 🚀 MyPort — Meu Portfólio Pessoal

Portfólio web de **Kayque Alberto**, desenvolvedor web. Apresenta minha trajetória, habilidades, projetos em destaque e um canal direto de contato.

🌐 **Site ao vivo:** [https://meuportifolio-flax-three.vercel.app/](https://meuportifolio-flax-three.vercel.app/)

---

## 📌 Sobre o Projeto

Design moderno, responsivo e interativo, com foco em performance, acessibilidade e animações suaves.

### ✨ Destaques

- 🌍 **Bilíngue (PT/EN)** com troca de idioma em tempo real.
- 🎨 **Fundo animado com shaders WebGL** (OGL), que respeita `prefers-reduced-motion` e pausa quando a aba fica oculta.
- ♿ **Acessível:** lista de projetos navegável por teclado, com `aria-expanded` e foco visível.
- 🔎 **SEO:** metadados Open Graph/Twitter, imagem de preview gerada por código, `sitemap.xml`, `robots.txt` e dados estruturados (JSON-LD).
- 📊 **Vercel Analytics e Speed Insights.**

---

## 🛠️ Tecnologias Utilizadas

- **Framework:** [Next.js](https://nextjs.org/) (React 19 & App Router)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animações:** [Framer Motion](https://www.framer.com/motion/)
- **Gráficos (WebGL):** [OGL](https://github.com/oframe/ogl)
- **Hospedagem & Analytics:** [Vercel](https://vercel.com/)

---

## 🗂️ Estrutura

```
src/
├── app/              # Rotas (home, work, about, contact), sitemap, robots, OG image
├── components/
│   ├── canvas/       # Fundo WebGL (Balatro)
│   ├── layout/       # Header, cursor, splash, etc.
│   ├── ui/           # Componentes reutilizáveis
│   └── work/         # Partes da página de projetos
├── context/          # Idioma (PT/EN) e traduções
└── data/             # Dados dos projetos
```

---

## 💻 Como Rodar Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/KayqueComK/MyPort.git
   cd MyPort
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Scripts

| Comando         | Descrição                    |
| --------------- | ---------------------------- |
| `npm run dev`   | Servidor de desenvolvimento  |
| `npm run build` | Build de produção            |
| `npm start`     | Roda o build de produção     |
| `npm run lint`  | Verifica o código com ESLint |

---

## 📬 Meios de Contato

Vamos conversar ou trabalhar juntos? Entre em contato comigo através dos canais abaixo:

- ✉️ **E-mail:** [Kayquealberto@hotmail.com](mailto:Kayquealberto@hotmail.com)
- 💼 **LinkedIn:** [Kayque Alberto](https://www.linkedin.com/in/kayque-alberto-937a08230/)
- 🐙 **GitHub:** [@KayqueComK](https://github.com/KayqueComK)
- 📸 **Instagram:** [@k.ayqueal](https://www.instagram.com/k.ayqueal/)
