# Mana Rythu

Mana Rythu is a Next.js farm-to-home marketplace.

## Local development

```bash
npm install
npm run dev
```

## GitHub Pages deployment

The `Deploy Next.js site to GitHub Pages` workflow builds a static export and publishes it from `out/`. In the repository settings, go to **Settings > Pages** and set **Build and deployment > Source** to **GitHub Actions**. The workflow configures the `/mana-rythu` base path and deploys on every push to `main`.
