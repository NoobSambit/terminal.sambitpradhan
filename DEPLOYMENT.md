# Vercel Deployment Guide

## Quick Deploy (Recommended)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository: `terminal.sambitpradhan`
   - Vercel will auto-detect the settings ✅
   - Click "Deploy"

3. **Done!** Your site will be live at: `https://terminal-sambitpradhan.vercel.app`

---

### Option 2: Deploy via CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   - Follow the prompts
   - First time: Answer setup questions
   - Subsequent deploys: Just run `vercel --prod`

---

## Custom Domain Setup (Optional)

1. Go to your project on Vercel
2. Settings → Domains
3. Add your custom domain (e.g., `sambitpradhan.dev`)
4. Follow DNS configuration instructions

---

## Environment Variables (If Needed)

If you add any API keys later:
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy

---

## Build Configuration

Already configured in `vercel.json`:
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **SPA Routing**: Enabled

---

## Automatic Deployments

Every push to `main` branch will automatically deploy to production! 🚀

---

## Project Stats

- **Name**: terminal-sambitpradhan
- **Version**: 2.0.0
- **Framework**: React + Vite + TypeScript
- **Styling**: Tailwind CSS
