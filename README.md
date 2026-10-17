# Deadweight — a gym on Foundry Street

Single-page static fitness gym landing, built with plain HTML, CSS and JS.
No build step, no frameworks, no dependencies.

## Run locally

```
python3 -m http.server 3000
```

Then visit http://localhost:3000.

## Deploy to Netlify

1. Create a GitHub repo and push this branch:
   ```bash
   git remote add origin git@github.com:YOUR-USERNAME/deadweight.git
   git push -u origin freebuff/27b34a7cc7fecd82ac226595
   ```
2. In Netlify, **New site from Git → GitHub → select this repo**.
3. Build settings (this is a static site, so the defaults work):
   - Build command: leave empty
   - Publish directory: `.` (root)
4. Deploy. Netlify will serve `index.html` from the repo root.

Netlify can also connect that repo to a custom domain and add a basic password
if you want the site to stay private while you iterate.
