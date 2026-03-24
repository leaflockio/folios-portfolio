# 🧰 Tech Stack

This document outlines the technologies used in the **folios-portfolio** project, along with justifications and their roles within the project. The goal is to maintain a clean, scalable, and developer-friendly architecture that is easy to adopt and extend.

---

## 🧱 Frontend Framework

### ⚙️ React (with JSX)

- **Why**: React is a mature and widely-used library for building component-based user interfaces.
- **How it helps**: Enables a modular, reusable structure — ideal for building a customizable portfolio template.

### ⚡ Vite

- **Why**: A modern build tool that offers fast startup, hot module replacement, and optimized builds.
- **How it helps**: Makes development faster and improves the developer experience over traditional tools like Create React App.

### 🌐 React Router DOM

- **Why**: Enables page-based routing for multi-page experiences.
- **How it helps**: Lets users navigate between sections like `/about`, `/projects`, etc., without a full page reload.

---

## 🎨 Styling & UX

### 🎨 Tailwind CSS

- **Why**: Utility-first CSS framework with responsive design, dark mode support, and customization.
- **How it helps**: Allows rapid UI development directly in JSX without writing custom CSS files.

### 🌀 Framer Motion

- **Why**: A popular animation library for React, built for simplicity and flexibility.
- **How it helps**: Adds polished, performant animations (e.g., fade-ins, slide-ins) to improve user experience.

---

## 🧩 Config-Driven Architecture

### 📦 Remote JSON Configuration

- **Why**: Makes the portfolio zero-code for end users — content is pulled from a user-hosted JSON file.
- **How it helps**: Users only need to update content in a JSON file without modifying code.

### ✅ Zod (JSON Schema Validation)

- **Why**: Type-safe and powerful schema validation for parsing user-provided JSON.
- **How it helps**: Ensures that the loaded JSON is valid before rendering, providing safer and more predictable UI behavior.

---

## ⚙️ State Management

### 🧠 React Context API

- **Why**: Simple, built-in tool to manage global state.
- **How it helps**: Allows sharing of theme state, user data, etc., without third-party libraries.

---

## 🧪 Testing

### 🧪 Jest

- **Why**: Industry-standard test runner and assertion library for JavaScript/React.
- **How it helps**: Supports unit testing and integration testing with fast feedback.

### 🧪 React Testing Library (RTL)

- **Why**: Provides tools to test components the way users interact with them.
- **How it helps**: Encourages accessible, user-focused tests that simulate real user behavior.

---

## 🧹 Code Quality & Developer Tools

### 🧼 ESLint

- **Why**: Linter to catch common errors and enforce coding standards.
- **How it helps**: Prevents bugs and ensures consistency across the codebase.

### 🧼 Prettier

- **Why**: Code formatter that enforces consistent styling across files.
- **How it helps**: Keeps code clean, readable, and minimizes style debates in reviews.

### 🪝 Husky

- **Why**: Manages Git hooks to automate pre-commit tasks.
- **How it helps**: Runs checks (like linting/formatting) before code is committed.

### 🧹 lint-staged

- **Why**: Runs scripts (like ESLint/Prettier) only on files that are staged for commit.
- **How it helps**: Ensures fast pre-commit checks without slowing down the workflow.

---

## 📝 Documentation

### 📘 Markdown

- **Why**: Simple and widely supported format for project documentation.
- **How it helps**: Keeps everything well-documented, readable on GitHub and dev environments.

### 💬 JSDoc

- **Why**: Enables inline documentation of functions, parameters, and components.
- **How it helps**: Helps contributors understand the codebase and generates potential docs in future.

---

## 🐳 Dev Environment

### 🐳 Docker + Dev Container (VS Code)

- **Why**: Containerized development ensures consistency across machines.
- **How it helps**: You can work in a clean, reproducible environment with all tools pre-installed.

---

## 🔚 Conclusion

This tech stack has been chosen to strike a balance between:

- 🧩 Flexibility
- ⚡ Speed
- 🧪 Maintainability
- 💻 Developer happiness

Every tool contributes directly to performance, reliability, or customization — which are core goals of the `folios-portfolio`.
