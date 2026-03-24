# Deployment Setup Guide

## Overview

```
feature branches → PR → pre-main (QA) → PR → main (Production)
                              ↓                    ↓
                       qa.yourdomain.com    yourdomain.com
```

## Version Bumping

Versions are automatically bumped based on commit messages:

| Commit Type                   | Example                              | Version Bump          |
| ----------------------------- | ------------------------------------ | --------------------- |
| `fix:`                        | `fix(hero): resolve mobile layout`   | Patch (1.0.0 → 1.0.1) |
| `feat:`                       | `feat(sections): add skills section` | Minor (1.0.0 → 1.1.0) |
| `feat!:` or `BREAKING CHANGE` | `feat!: redesign profile schema`     | Major (1.0.0 → 2.0.0) |
| `chore:`, `docs:`, `style:`   | `chore: update deps`                 | No bump               |

## Netlify Setup

### 1. Create Two Netlify Sites

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Create **Site 1 (Production)**:
   - Click "Add new site" → "Deploy manually" (or import from Git)
   - Name: `your-site-prod` (or similar)
   - Note the **Site ID** from Site Settings → General → Site details

3. Create **Site 2 (QA)**:
   - Click "Add new site" → "Deploy manually"
   - Name: `your-site-qa` (or similar)
   - Note the **Site ID**

### 2. Configure Custom Domains

**Production site:**

1. Site Settings → Domain management → Add custom domain
2. Add `yourdomain.com`
3. Follow DNS configuration instructions

**QA site:**

1. Site Settings → Domain management → Add custom domain
2. Add `qa.yourdomain.com`
3. Add a CNAME record in your DNS:
   - Name: `qa`
   - Value: `your-site-qa.netlify.app` (your QA site's Netlify subdomain)

### 3. Get Netlify Auth Token

1. Go to [User Settings → Applications](https://app.netlify.com/user/applications)
2. Click "New access token"
3. Name: `GitHub Actions`
4. Copy the token (you won't see it again!)

### 4. Add GitHub Secrets

Go to your GitHub repo → Settings → Secrets and variables → Actions → New repository secret

Add these secrets:

| Secret Name            | Value                                    |
| ---------------------- | ---------------------------------------- |
| `NETLIFY_AUTH_TOKEN`   | Your Netlify personal access token       |
| `NETLIFY_PROD_SITE_ID` | Site ID of production site (from step 1) |
| `NETLIFY_QA_SITE_ID`   | Site ID of QA site (from step 1)         |

### 5. Create Branches

```bash
# Create pre-main branch from main
git checkout main
git pull origin main
git checkout -b pre-main
git push -u origin pre-main
```

### 6. Set Up Branch Protection (Optional but Recommended)

Go to GitHub repo → Settings → Branches → Add rule

**For `main` branch:**

- Branch name pattern: `main`
- ✅ Require a pull request before merging
- ✅ Require status checks to pass before merging
- ✅ Require branches to be up to date before merging
- Restrict who can push: Only allow `pre-main` merges (via PR)

**For `pre-main` branch:**

- Branch name pattern: `pre-main`
- ✅ Require a pull request before merging
- ✅ Require status checks to pass before merging

## Workflows

### Automatic (on push to main)

1. CI runs (lint, test, build)
2. Version is bumped based on commits
3. Git tag created
4. Deploy to production
5. GitHub Release created

### Manual QA Deploy

1. Go to Actions → "Deploy QA"
2. Click "Run workflow"
3. Select branch to deploy
4. Click "Run workflow"

### Semi-Automatic QA Deploy

Push to `pre-main` automatically triggers QA deployment.

## Testing Flow

1. Create feature branch from `pre-main`
2. Make changes, commit with conventional commits
3. Push and create PR to `pre-main`
4. CI runs, review, merge
5. QA auto-deploys to `qa.yourdomain.com`
6. Test on devices
7. Create PR from `pre-main` to `main`
8. Review, merge
9. Production auto-deploys with version bump
