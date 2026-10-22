# LinkUs interactive prototype

Next.js + TypeScript + Tailwind CSS. The original `index.html` is retained.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000. Production check: `npm run build`; production server: `npm start`.

## Demo walkthrough

1. Switch English / 中文 / 한국어 in the header or My page.
2. Home → Analyze a contract → Use sample contract (or choose a PDF/JPG/PNG under 10 MB).
3. Start demo analysis → review deposit, maintenance, early termination and special clauses.
4. Save the sample to My contracts; open the signing checklist and tick five items.
5. Open Reminders and mark the sample rent as paid.

All analysis is predefined sample data, irrespective of the chosen file. Files are not read, uploaded, analyzed or verified. Saved contracts, checklist progress and reminder states exist only in React memory and reset on reload. No authentication, payments, cloud storage or actual notifications. Sample guidance is not legal verification.

## Vercel deployment

The application is at the root of the `a2629492403-source/mechanical-portfolio` repository. The local checkout directory name is not a repository subdirectory.

- Git repository: `a2629492403-source/mechanical-portfolio`
- Production branch: `main`
- Root Directory: repository root (leave empty, or `.`)
- Framework Preset: Next.js
- Install Command: `npm ci`
- Build Command: `npm run build`
- Output Directory: default Next.js output; disable any custom override. Do not use `public`, `out`, or `dist`.

`vercel.json` explicitly selects Next.js. The homepage is `app/page.tsx`, with the root layout at `app/layout.tsx`. The preserved `index.html` is an older portfolio file, not the Next.js homepage. No static export or custom rewrite is required.

Deploy the latest `main` commit after correcting the project settings. Confirm the deployment's Git repository and commit match, then open the production domain and verify that `/` returns HTTP 200, the title contains LinkUs, and the sample analysis works. A Ready status alone does not verify the production domain.
