# 🎨 Style Guide

This document outlines the **code style**, **design principles**, and **UX guidelines** used in the `folios-portfolio` project. Following this guide helps maintain consistency and readability across the codebase and UI.

---

## 🧱 Code Structure & Naming

### 🔡 Naming Conventions

These naming conventions are enforced using ESLint (`@typescript-eslint/naming-convention` rule):

| Element           | Convention                                           | Example                                                           |
| ----------------- | ---------------------------------------------------- | ----------------------------------------------------------------- |
| Components        | `PascalCase`                                         | `UserCard`, `HeroSection`                                         |
| Functions         | `camelCase`                                          | `fetchData`, `handleSubmit`                                       |
| Variables         | `camelCase`                                          | `userName`, `portfolioList`                                       |
| Constants         | `UPPER_SNAKE_CASE`                                   | `DEFAULT_THEME`, `API_BASE_URL`                                   |
| Classes           | `PascalCase`                                         | `PortfolioSection`                                                |
| Enum & EnumMember | `PascalCase` / `UPPER_CASE`                          | `ThemeType`, `DARK_MODE`                                          |
| Type Alias        | `PascalCase`                                         | `PortfolioData`, `SectionConfig`                                  |
| Interfaces        | `PascalCase` (no `I` prefix)                         | `UserProfile`, not `IUserProfile`                                 |
| Files & Folders   | `kebab-case` (Markdown files use `UPPER_SNAKE_CASE`) | `project-card/`, `portfolio.json`, `README.md`, `CONTRIBUTING.md` |

> ⚠️ ESLint will throw errors for any naming violations.

---

## 📁 Folder Organization

Keep structure modular and scoped:

```
src/
├── components/        # Shared reusable components
├── sections/          # Page-level sections (Hero, About, Projects)
├── hooks/             # Custom React hooks
├── utils/             # Helpers and reusable logic
├── styles/            # Global styles or Tailwind config
├── config/            # Constants and external config
```

---

## 🎨 Design System

### ✍️ Typography

- Use clear, legible fonts
- Stick to a scale (e.g., `text-sm`, `text-base`, `text-xl`, etc.)
- Limit font families to 1–2 max

### 🎨 Colors

- Use Tailwind's default color palette where possible
- Custom colors should be added in `tailwind.config.js` under `extend.colors`
- Ensure sufficient contrast for accessibility (WCAG AA)

### 🌓 Light & Dark Mode

- Theme switching is supported via CSS classes (`dark`)
- All components must support both themes
- Avoid hard-coded colors — use Tailwind classes like `bg-white dark:bg-gray-900`

---

## 🧩 Component Guidelines

- **Pure + Reusable**: Keep components small, focused, and stateless when possible
- **Props-first**: Make components configurable through props
- **No magic values**: Use config constants or Tailwind classes

---

## 🧠 UX Guidelines

- Respect motion preferences (`prefers-reduced-motion`)
- All buttons and links should be keyboard-accessible
- Use semantic HTML where possible
- Ensure layouts are responsive from `sm` to `xl` breakpoints
- Use `aria` labels and roles where needed

---

## ✅ Linting & Formatting

We use the following tools:

- **Prettier** for consistent formatting
- **ESLint** for code quality
- **@typescript-eslint/naming-convention** for naming rules
- **husky** + **lint-staged** for Git pre-commit enforcement

---

## 🧪 Testing Style _(Planned)_

When test setup is complete:

- Use `describe/it` structure
- Keep test files next to components with `.test.tsx` or `.spec.tsx`
- Follow the Arrange–Act–Assert pattern

---

## 💬 Questions?

Open an issue or start a discussion if you're unsure how to style or name something.
