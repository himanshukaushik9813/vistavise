# VistaVise Consulting Frontend

Next.js App Router website for VistaVise Consulting. The public homepage is a single-page marketing experience with contact and podcast API routes.

## Getting Started

Install dependencies and run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contact Form Email Setup (Resend)

1. Copy `.env.example` to `.env.local`.
2. Set your values:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` (where messages should arrive)
   - `CONTACT_FROM_EMAIL` (sender identity, must be valid for your Resend setup)
   - `YOUTUBE_CHANNEL_ID` (optional; if omitted, the podcast section uses built-in fallback episodes)
3. Restart the dev server.

The Contact section submits to `POST /api/contact`, which sends the email through Resend.

## Main Files

- `src/app/page.tsx` wires the homepage sections together.
- `src/app/globals.css` defines the global visual system.
- `src/app/api/contact/route.ts` handles contact submissions.
- `src/app/api/podcasts/route.ts` fetches podcast episodes with fallbacks.

## Production Checks

```bash
npm run lint
npm run build
npm audit
```

## Deploy

Deploy the `frontend/` directory as a Next.js application.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
