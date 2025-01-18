# BAM! Portfolio Site - Andy Chapman
![https://astro.build/](https://img.shields.io/badge/astro-5.1.2-orange?style=flat&logo=astro&logoColor=orange&link=https%3A%2F%2Fastro.build%2F)
![https://www.typescriptlang.org/](https://img.shields.io/badge/typescript-5.3.3-blue?style=flat&logo=typescript&link=https%3A%2F%2Fwww.typescriptlang.org%2F)
![https://tailwindcss.com/](https://img.shields.io/badge/tailwind-3.4.1-cyan?style=flat&logo=tailwindcss&link=https%3A%2F%2Ftailwindcss.com%2F)


Insert short desc 

---

## 🎨 Design Philosophy


## ✨ Features


---

## 🚀 Quick Start

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Chapster87/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
    npm run dev
    ```

4. **Open your browser and visit [http://localhost:4321](http://localhost:4321)**

5. **Start customizing your site!**

---

## 📚 Documentation

1. Project structure
2. Built-in components
3. Theme customization

### 1. 📂 Project Structure

The project structure is designed to be easy to understand and navigate. Here's a quick overview of the directories and files you'll find in this project:

```bash
/
├── public/             # Static assets (images, icons, etc.)
├── src/
│   └── config/         # Site configuration
│       └── config.json # Top-level site configuration, like title, description, metas, some astro settings, etc.
│       └── menu.json   # Configure the site visible navigation in header and footer
│       └── social.json # Social links and icons
│       └── theme.json  # Your theme names and font settings (used in tailwind.config.js, related to styles/theme.css)
│   ├── content/        # Markdown and mdx files for dynamic content following the Astro conventions (see below)
│   ├── components/     # Reusable components
│   ├── layouts/        # Astro Reutilizable Layout components
│   ├── pages/          # Site pages (follows Astro conventions)
│   ├── styles/         # Global and component-specific styles
├── astro.config.mjs    # Astro configuration
├── tailwind.config.js  # TailwindCSS configuration
├── package.json        # No need to explain
└── [editor cfg files]  # Project dependencies and scripts
```

## 🧞 Commands (by Astro)

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
