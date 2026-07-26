# Hotel Management App

A hotel booking / room management dashboard built with TanStack Start, React, TypeScript, Tailwind CSS, and Supabase.

## Stack
- Framework: TanStack Start (React, SSR)
- Styling: Tailwind CSS
- Database & Auth: Supabase
- Hosting: Vercel

## Development
Requires Node.js 20+.
\`\`\`sh
git clone <this-repository-url>
cd <repository-name>
npm install
cp .env.example .env
npm run dev
\`\`\`
App runs at http://localhost:8080.

## Environment variables
\`\`\`
VITE_SUPABASE_URL=
VITE_SUPABASE_PUBLISHABLE_KEY=
SUPABASE_URL=
SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SERVICE_ROLE_KEY=
\`\`\`
`SUPABASE_SERVICE_ROLE_KEY` is server-only, never exposed to the browser bundle.

## Build
\`\`\`sh
npm run build
\`\`\`

## Deploy
Deploys to Vercel via Nitro's `vercel` build preset. Push to your connected repo, or run `vercel deploy`.