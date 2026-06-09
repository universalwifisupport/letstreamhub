# Deployment Guide: GitHub Pages with GitHub Actions

This site is configured to automatically build and deploy to GitHub Pages using GitHub Actions.

## Prerequisites

1. Push your code to a GitHub repository
2. Ensure you have a `main` or `master` branch
3. GitHub Pages should be enabled in your repository settings

## Setup Steps

### 1. Enable GitHub Pages

- Go to your repository on GitHub
- Navigate to **Settings** → **Pages**
- Under "Source", select **Deploy from a branch**
- Choose branch: **gh-pages**
- Root: **/ (root)**
- Click **Save**

### 2. Configure Custom Domain (Optional)

If you have a custom domain (e.g., `letstreamHub.com`):

- In repository **Settings** → **Pages**
- Under "Custom domain", enter your domain name
- Click **Save**
- Update the `cname` field in `.github/workflows/deploy.yml`:
  ```yaml
  cname: letstreamHub.com
  ```
- Add/update DNS records pointing to GitHub Pages:
  ```
  A Record: 185.199.108.153
  A Record: 185.199.109.153
  A Record: 185.199.110.153
  A Record: 185.199.111.153
  ```
  Or use CNAME: `<username>.github.io`

### 3. Deploy

Once configured, the workflow will:

1. **Trigger** on every push to `main` or `master`
2. **Build** the site using `npm run build`
3. **Deploy** to `gh-pages` branch (published automatically)

View your site at:

- Without custom domain: `https://<username>.github.io/<repo-name>`
- With custom domain: `https://letstreamHub.com`

## Workflow File Location

`.github/workflows/deploy.yml`

The workflow uses:

- **Node.js 18.x** (adjust in the workflow file if needed)
- **peaceiris/actions-gh-pages** action for deployment
- Automatic caching of npm dependencies for faster builds

## Troubleshooting

### Build fails

- Check the **Actions** tab → click the failed workflow
- Review logs for errors (usually missing dependencies or syntax issues)
- Run locally: `npm ci && npm run build`

### Site not updating

- Verify the workflow ran successfully (green checkmark in Actions tab)
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Check GitHub Pages settings → ensure it's pointing to `gh-pages` branch

### Custom domain not working

- Verify DNS records are correctly configured
- Wait 24 hours for DNS propagation
- Check CNAME file was created: repository should have a `CNAME` file in `gh-pages` branch

## Environment Variables (Optional)

If you need to set environment variables (e.g., for analytics IDs):

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add your secrets (e.g., `GA4_ID`, `GTM_ID`)
4. Update `.github/workflows/deploy.yml`:
   ```yaml
   - name: Build site
     run: npm run build
     env:
       VITE_GA4_ID: ${{ secrets.GA4_ID }}
       VITE_GTM_ID: ${{ secrets.GTM_ID }}
   ```

## Next Steps

1. Replace `letstreamHub.com` in:
   - `.github/workflows/deploy.yml` (cname field)
   - `public/robots.txt` (sitemap URL)
   - `public/sitemap.xml` (all URLs)
   - SEO component values in route files

2. Push to GitHub and monitor the Actions tab

3. Your site will be live at your GitHub Pages URL!
