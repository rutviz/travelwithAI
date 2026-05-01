# Architecture Overview

## Monorepo Structure

| Package | Tech | Purpose |
|---------|------|---------|
| `api` | Node.js + Express + TypeScript | REST API backend |
| `web` | Next.js 14 + TypeScript | Web frontend |
| `mobile` | React Native + Expo + TypeScript | iOS & Android app |
| `shared` | TypeScript | Shared types across packages |

## API Routes

```
GET  /health
GET  /api/v1/trips
POST /api/v1/trips
GET  /api/v1/trips/:id
PATCH /api/v1/trips/:id
DELETE /api/v1/trips/:id

POST /api/v1/chat/session
GET  /api/v1/chat/session/:id
POST /api/v1/chat/session/:id/message

GET  /api/v1/search/flights
GET  /api/v1/search/hotels
GET  /api/v1/search/activities
```

## Key Third-Party Integrations

| Service | Purpose |
|---------|---------|
| Anthropic Claude | AI trip planning, chat |
| Amadeus | Flight search & booking |
| Booking.com / Expedia | Hotel search |
| GetYourGuide / Viator | Activities |
| Stripe | Payment processing |
| FlightAware | Real-time flight status |

## Data Flow

```
User Input (natural language)
  → Claude API (parse intent)
  → Search APIs (flights/hotels/activities)
  → Itinerary Builder
  → User Review & Edit
  → Booking Engine
  → Confirmation & Storage
```
