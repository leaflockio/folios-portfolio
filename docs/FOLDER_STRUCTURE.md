# 🗂️ Folder Structure

This document describes the folder layout of the **folios-portfolio** project to help developers quickly understand the organization and purpose of each directory.

---

## 📁 Project Root

```
folios-portfolio/
├── public/                 # Static files (e.g., favicon, vite.svg)
├── src/                    # Source code for the React application
├── scripts/                # Custom Husky pre-commit and pre-push scripts
├── docs/                   # Documentation markdowns (guide, roadmap, etc.)
├── .devcontainer/          # Dev container configuration
├── .husky/                 # Git hooks managed via Husky
├── .github/                # GitHub-specific configs (e.g., PR templates)
├── Dockerfile              # Dev container build definition
├── docker-compose.yml      # Service orchestration setup
├── eslint.config.js        # ESLint configuration
├── vite.config.js          # Vite app configuration
├── package.json            # Project metadata and scripts
├── .cspell.json            # Spell check configuration
├── .gitignore              # Files/folders to ignore in Git
└── README.md               # Project overview and instructions
```

---

## 📂 Inside `src/`

```
src/
├── assets/                 # Static image and vector assets
├── components/             # Reusable UI components (e.g., Button, Card)
├── config/                 # Shared constants and app-level config
├── context/                # React context providers (e.g., PortfolioContext)
├── hooks/                  # Custom React hooks
├── sections/               # Layout-level sections (e.g., Hero, About, Projects)
├── styles/                 # Global styles and Tailwind extensions
├── utils/                  # Utility functions (e.g., fetchRemoteJson.js)
├── App.jsx                 # Main app layout
└── main.jsx                # Entry point to the app
```

---

## 🧾 Description of Key Folders

### `components/`

Small, reusable UI parts like `Button`, `Badge`, `Avatar`, or `Link`.

### `sections/`

Major screen sections of the portfolio such as `Hero`, `Projects`, `Contact`.

### `config/`

Constants, defaults, environment helpers — eventually schema structure too.

### `context/`

Central state management using the React Context API (e.g., theme, portfolio data).

### `hooks/`

Custom logic (e.g., `useDarkMode`, `useRemoteData`, etc.)

### `styles/`

Includes global Tailwind utilities or style-layer abstraction if needed.

### `utils/`

General helper functions for data fetching, parsing, validation, or transformation.

---

## 🧠 Notes

- The folder structure is **modular and scalable**.
- Each folder can optionally use an `index.js` for simplified imports.
- Project supports loading config from a **remote JSON**, validated soon using Zod.
- Build flow is test-driven and zero-config from a consumer’s point of view.
