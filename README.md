# TravelWithAI

AI-powered travel planning and booking agent — plan, book, and manage trips through natural conversation.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Node.js + Express + TypeScript |
| Web | Next.js 14 + TypeScript |
| Mobile | React Native + Expo + TypeScript |
| Shared Types | TypeScript |
| AI | Anthropic Claude API |
| Payments | Stripe |

## Monorepo Structure

```
travelwithAI/
├── api/src/        # Backend (Node.js/Express)
├── web/src/        # Frontend (Next.js)
├── mobile/src/     # Mobile (React Native + Expo)
├── shared/types/   # Shared TypeScript types
├── docs/           # Architecture & documentation
└── infra/          # Infrastructure configs
```

## Getting Started

```bash
# Install all dependencies
npm install

# Run API + web in parallel
npm run dev

# Run only API
npm run dev:api

# Run only web
npm run dev:web
```

## Environment Variables

Copy `.env.example` in each package and fill in your keys:

```bash
cp api/.env.example api/.env
cp web/.env.example web/.env.local
```

See `docs/architecture.md` for the full architecture overview.
