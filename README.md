# Saad Khan — Portfolio Website

A next-gen DevOps portfolio built with vanilla HTML, CSS, and JS.
Hosted on Cloudflare Pages.

## Files
- `index.html` — Main portfolio page
- `style.css` — All styles (dark terminal theme)
- `main.js` — Interactions, typed effect, project filtering
- `projects-data.js` — All 17 project data with GitHub links
- `_headers` — Cloudflare Pages security headers
- `_redirects` — Cloudflare Pages URL redirects

## Deploy to Cloudflare Pages
1. Push all files to a GitHub repository
2. Go to Cloudflare Dashboard → Pages → Create a project
3. Connect your GitHub repo
4. Set build command: (leave empty — static site)
5. Set output directory: `/` (root)
6. Deploy!

## Optional: Add devops-engineer.pdf
Place your CV PDF in the root folder so the "Download CV" button works.

## GitHub Actions Auto-Deploy (CI/CD)
Add `.github/workflows/deploy.yml` to auto-deploy on every push.
