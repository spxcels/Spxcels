# Spxcels

Spxcels is a full-stack phone specifications platform built with a modern TypeScript monorepo architecture.

It includes:

* 🌐 Public website (phones, compare, search)
* 🛠 Admin dashboard
* ⚙️ Admin backend API
* 🗄 Shared database package (Prisma + PostgreSQL)
* 🎨 Shared UI components

The project is designed for scalability, clean architecture, and real production usage.

---

## 🚀 Live Project

* Website: https://spxcel.vercel.app

---

## 🧱 Tech Stack

### Frontend (Public Website)

* Next.js (App Router)
* React 19
* TypeScript
* TailwindCSS
* Framer Motion

### Admin Frontend

* React
* Vite
* TypeScript
* TailwindCSS
* Shadcn UI

### Backend

* NestJS
* JWT Authentication
* Prisma ORM
* PostgreSQL
* Cloudinary (media uploads)

### Monorepo

* NX Workspace
* PNPM Workspaces
* Shared Packages

---

## 📂 Project Structure

```
apps/
  web/              → Public website (Next.js)
  admin-frontend/   → Admin dashboard (React + Vite)
  admin-backend/    → Admin API (NestJS)

packages/
  db/               → Prisma schema + database client
  ui/               → Shared UI component library
```

---

## ⚙️ Getting Started

### Install dependencies

```bash
pnpm install
```

### Setup environment variables

Create `.env` files where required:

```
DATABASE_URL=
JWT_SECRET=
CLOUDINARY_URL=
ADMIN_USERNAME=
ADMIN_PASSWORD=
```

---

## 🗄 Database Setup

Generate Prisma client:

```bash
pnpm prisma generate
```

Run migrations:

```bash
pnpm prisma migrate dev
```

Seed database:

```bash
pnpm prisma db seed
```

---

## ▶️ Run Apps

### Website

```bash
pnpm --filter web dev
```

### Admin Frontend

```bash
pnpm --filter admin-frontend dev
```

### Admin Backend

```bash
pnpm --filter admin-backend start:dev
```

---

## 🧪 Testing

```bash
pnpm --filter admin-backend test
```

---

## 📦 Deployment

Typical deployment setup:

* Website → Vercel
* Admin Frontend → Vercel / Static hosting
* Backend → Render / Node hosting
* Database → PostgreSQL cloud provider

---

## 🧠 Architecture Goals

* TypeScript everywhere
* Shared logic across apps
* Modular backend structure
* Scalable monorepo design
* Production-ready development workflow

---

## 👨‍💻 Author

Built by Himanshu.
