# Spxcels

> An open-source platform for structured consumer technology information.

Spxcels is a modern full-stack TypeScript monorepo for collecting, organizing, managing, and publishing structured product information.

The platform combines a public website, admin dashboard, backend services, and automation tools into a single scalable ecosystem. Although the current focus is smartphones, the architecture is designed to support many categories including laptops, tablets, desktop components, wearables, and more.

---

## ✨ Features

- 🌐 Modern public website
- 🛠 Powerful admin dashboard
- ⚙️ RESTful public API
- 🤖 Automated data collection pipeline
- 📝 Manual specification review workflow
- 📸 Cloud-based media management
- 🔍 Advanced search system
- ⚖ Product comparison
- 📦 Shared database package
- 🏗 Modular TypeScript architecture

---

## 🚧 Current Status

### ✅ Completed

- Authentication
- Brand Management
- Phone Model Management
- Phone Specifications
- Specification Organizer
- Card Image Upload
- Public API
- Search System
- Shared Database Package
- Monorepo Architecture

### 🚧 In Progress

- Media Management
- Automation Engine
- Public Website
- Product Comparison
- Documentation

### 📌 Planned

- Laptop Database
- Desktop PC Database
- CPU Database
- GPU Database
- RAM Database
- Storage Database
- Tablet Database
- Smartwatch Database
- AI Features

---

# 🏛 Architecture

Spxcels is built as a production-ready TypeScript monorepo.

```
                    Users
                      │
          ┌───────────┴───────────┐
          │                       │
     Public Website         Admin Dashboard
          │                       │
          └───────────┬───────────┘
                      │
              Backend Services
                      │
          ┌───────────┴───────────┐
          │                       │
       PostgreSQL            Cloudinary
```

---

# 📦 Applications

| Application        | Description                                |
| ------------------ | ------------------------------------------ |
| **web**            | Public website built with Next.js          |
| **admin-frontend** | Internal admin dashboard                   |
| **admin-backend**  | Administration API and automation services |
| **public-api**     | Public REST API                            |

---

# 📂 Project Structure

```
spxcels/
│
├── apps/
│   ├── web/
│   ├── admin-frontend/
│   ├── admin-backend/
│   └── public-api/
│
├── packages/
│   ├── db/
│   └── shared/
│
├── README.md
├── LICENSE
└── CONTRIBUTING.md
```

---

# 🚀 Tech Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion

## Admin Dashboard

- React
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui

## Backend

- NestJS
- Prisma ORM
- PostgreSQL
- JWT Authentication
- Cloudinary
- Socket.IO

## Shared

- PNPM Workspaces
- TypeScript
- ESLint
- Prettier

---

# ⚙️ Prerequisites

Before getting started, make sure you have installed:

- Node.js 22+
- PNPM
- PostgreSQL
- Git

---

# 🚀 Getting Started

Clone the repository

```bash
git clone https://github.com/<your-username>/spxcels.git

cd spxcels
```

Install dependencies

```bash
pnpm install
```

---

# 🔑 Environment Variables

Each application contains its own `.env.example`.

Copy them before running the project.

Example:

```env
DATABASE_URL=

JWT_SECRET=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=

ADMIN_USERNAME=

ADMIN_PASSWORD=
```

---

# 🗄 Database

Generate Prisma Client

```bash
pnpm prisma generate
```

Run migrations

```bash
pnpm prisma migrate dev
```

Seed the database

```bash
pnpm prisma db seed
```

---

# ▶ Running Applications

## Public Website

```bash
pnpm --filter web dev
```

## Admin Frontend

```bash
pnpm --filter admin-frontend dev
```

## Admin Backend

```bash
pnpm --filter admin-backend start:dev
```

## Public API

```bash
pnpm --filter public-api start:dev
```

---

# 🧪 Testing

Backend

```bash
pnpm --filter admin-backend test
```

---

# 📦 Deployment

Suggested deployment architecture

| Service        | Platform               |
| -------------- | ---------------------- |
| Web            | Vercel                 |
| Admin Frontend | Vercel                 |
| Admin Backend  | Railway / Render / VPS |
| Public API     | Railway / Render / VPS |
| Database       | PostgreSQL             |
| Media          | Cloudinary             |

---

# 🎯 Vision

Spxcels aims to become an open platform for structured consumer technology information.

Future product categories include:

- Smartphones
- Tablets
- Laptops
- Desktop PCs
- CPUs
- GPUs
- RAM
- Storage
- Monitors
- Wearables
- Accessories

The long-term goal is to build a scalable ecosystem that provides reliable product data through automation, manual review, and public APIs.

---

# 🛣 Roadmap

- [x] Monorepo Architecture
- [x] Admin Authentication
- [x] Brand Management
- [x] Phone Models
- [x] Phone Specifications
- [x] Specification Organizer
- [x] Card Image Upload
- [x] Public API
- [x] Search
- [ ] Media Management
- [ ] Automation Engine
- [ ] Public Website
- [ ] Product Comparison
- [ ] Laptop Support
- [ ] Desktop Components
- [ ] AI Features

---

# 🤝 Contributing

Contributions of any size are welcome.

If you'd like to contribute:

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test your changes.
5. Open a Pull Request.

Please read **CONTRIBUTING.md** before submitting a pull request.

---

# 📄 License

This project is licensed under the MIT License.

See the **LICENSE** file for details.

---

# ❤️ Support

If you find this project useful, consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates future development.
