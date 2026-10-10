# SPARK — Phase 1 prototype

A mobile-first visual prototype for a QR-based event matchmaking experience. The screens use fictional mock data; there is no real registration, authentication, quiz persistence, matching, countdown synchronization, mutual-consent operation, or chat.

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The demo event is at `/e/afterglow-friday`.

## Checks

```bash
npm run typecheck
npm run build
```

## Routes in this phase

- `/` — product landing page
- `/e/afterglow-friday` — fictional event and join form
- `/e/afterglow-friday/quiz` — eight-question interactive quiz
- `/e/afterglow-friday/waiting` — illustrative reveal countdown
- `/e/afterglow-friday/reveal` — fictional match card
- `/e/afterglow-friday/connection` — simulated opt-in status
- `/e/afterglow-friday/mailbox` — fictional event updates
- `/host` — host tools phase placeholder
- `/privacy` and `/guidelines` — prototype disclosures and safety guidance

The countdown is illustrative and does not unlock results. Join controls and post-match choices are visual-only. Later phases should add the server-authoritative lifecycle, private guest sessions, matching, mutual opt-in, moderation, database migrations, and organizer access described in the product brief. No Supabase credentials or environment variables are needed for this phase.

## Deployment

This Next.js app can be deployed to Vercel after dependency installation and a successful production build. No backend secrets are used by this prototype.
