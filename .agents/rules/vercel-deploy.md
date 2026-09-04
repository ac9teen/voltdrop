# Vercel Deployment Rules

## Permanent Quota-Free Deploy Path
- Pushing to the Git repository connected to Vercel (`ac9teen/voltdrop` on `main`) is the permanent, quota-free deployment path that avoids Vercel CLI daily API rate limits (`api-deployments-free-per-day`).

## Stale Git Ref Auto-Redeploy Trick
- If Vercel ever builds from a stale ref or shows old content after a push:
  Run:
  ```bash
  git commit --allow-empty -m "chore: trigger vercel git deploy from main tip" && git push origin main
  ```
- Vercel immediately triggers a fresh production build from the true `main` tip in ~20-30 seconds.
