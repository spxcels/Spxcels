# Contributing to Spxcels

First off, thank you for your interest in contributing to Spxcels! 🎉

Whether you're fixing a bug, improving documentation, adding a feature, or sharing an idea, every contribution is appreciated.

Please take a few minutes to read this guide before getting started.

---

# Code of Conduct

By participating in this project, you agree to be respectful and constructive with other contributors.

We aim to build an open, welcoming, and collaborative community.

---

# Before You Start

Please make sure you:

- Read the README.md
- Search existing Issues before creating a new one
- Open an Issue before implementing large features
- Keep Pull Requests focused on a single change

---

# Development Setup

## 1. Fork the repository

Click the **Fork** button on GitHub.

---

## 2. Clone your fork

```bash
git clone https://github.com/<your-username>/spxcels.git

cd spxcels
```

---

## 3. Install dependencies

```bash
pnpm install
```

---

## 4. Configure environment variables

Each application contains its own `.env.example`.

Copy the examples and configure the required values before starting development.

---

## 5. Start development

Example:

```bash
pnpm --filter admin-backend start:dev

pnpm --filter admin-frontend dev

pnpm --filter web dev

pnpm --filter public-api start:dev
```

---

# Branch Naming

Please use descriptive branch names.

Examples:

```
feature/add-phone-search

feature/specification-organizer

feature/media-manager

fix/login-validation

fix/cloudinary-upload

docs/update-readme

refactor/search-service
```

---

# Commit Messages

Use clear and meaningful commit messages.

Good examples:

```
feat: add phone specification organizer

feat: implement card image upload

fix: resolve authentication issue

fix: improve search performance

docs: update installation guide

refactor: simplify organizer service
```

Avoid commit messages like:

```
update

changes

fix

done

test
```

---

# Coding Guidelines

Please follow these conventions:

- Write clean and readable TypeScript
- Keep functions focused on a single responsibility
- Prefer reusable components
- Avoid duplicate code
- Keep modules organized
- Use meaningful variable names
- Remove unused code before opening a Pull Request

---

# Pull Requests

Before submitting a Pull Request, ensure that:

- Project builds successfully
- No lint errors
- Code has been tested locally
- Documentation is updated when necessary
- Changes are limited to one feature or fix

Please describe:

- What changed
- Why it changed
- Any screenshots (if applicable)

---

# Reporting Bugs

When reporting a bug, please include:

- Description
- Expected behavior
- Actual behavior
- Steps to reproduce
- Environment (OS, browser, Node.js version)
- Screenshots if helpful

---

# Suggesting Features

Feature requests are welcome.

Before starting development:

1. Search existing Issues.
2. Open a new Issue describing the proposal.
3. Wait for discussion before implementing major changes.

This helps avoid duplicate work and keeps the project aligned.

---

# Project Vision

Spxcels aims to become an open-source platform for structured consumer technology information.

Current focus:

- Smartphones

Future categories:

- Tablets
- Laptops
- Desktop PCs
- CPUs
- GPUs
- RAM
- Storage
- Wearables
- Accessories

Contributions that improve scalability, maintainability, documentation, developer experience, and user experience are especially welcome.

---

# Questions

If you have questions or need help, feel free to open an Issue or start a GitHub Discussion.

We're happy to help new contributors get started.

---

Thank you for helping improve Spxcels! ❤️
