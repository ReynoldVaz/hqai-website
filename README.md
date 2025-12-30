# HQAI Website

A full-stack website built with React, Express, and TypeScript.

## Tech Stack

- **Frontend**: React + Vite + TailwindCSS
- **Backend**: Express + TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **UI Components**: Radix UI + shadcn/ui

## Local Development

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## Deployment on Vercel

### Prerequisites
- Install Vercel CLI: `npm i -g vercel`
- Have a Vercel account

### Deploy Steps

1. **Initialize Vercel project** (first time only):
   ```bash
   vercel
   ```
   Follow the prompts to link your project.

2. **Set up environment variables** in Vercel dashboard:
   - Go to your project settings on vercel.com
   - Add any required environment variables (e.g., `DATABASE_URL`, `SESSION_SECRET`)

3. **Deploy to production**:
   ```bash
   vercel --prod
   ```

### Important Notes

- The `vercel.json` configuration file is already set up
- The serverless function is in the `api/` directory
- Build command: `npm run build`
- Output directory: `dist/public`
- All API routes are handled by the serverless function
- Static files are served from `dist/public`

### Database Setup

If using PostgreSQL, you'll need to:
1. Set up a database (e.g., Vercel Postgres, Supabase, or any PostgreSQL provider)
2. Add `DATABASE_URL` environment variable in Vercel
3. Run migrations: `npm run db:push`

### Troubleshooting

- Check Vercel logs for any deployment errors
- Ensure all environment variables are set
- Verify the build completes successfully locally first
