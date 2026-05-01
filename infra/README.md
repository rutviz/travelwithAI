# Infrastructure

Infrastructure configurations for TravelWithAI.

## Planned Stack

| Layer | Service |
|-------|---------|
| Hosting (API) | Railway / Render |
| Hosting (Web) | Vercel |
| Database | PostgreSQL (Supabase / Neon) |
| Cache | Redis (Upstash) |
| Object Storage | AWS S3 / Cloudflare R2 |
| Auth | Supabase Auth / Auth0 |
| Monitoring | Sentry + Datadog |
| CI/CD | GitHub Actions |

## Directory Structure (planned)

```
infra/
├── docker/
│   ├── Dockerfile.api
│   └── docker-compose.yml
├── k8s/          # Kubernetes manifests (future)
└── github-actions/
    └── ci.yml
```
