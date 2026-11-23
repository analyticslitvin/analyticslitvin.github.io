# Uliana Litvin — Portfolio

A simple, clean, responsive single-page portfolio inspired by the reference layout. No profile photograph. Plain HTML/CSS/JavaScript; no build step.

## Files
- `index.html` — content and sections
- `styles.css` — responsive styling
- `script.js` — loads up to 8 public repositories from GitHub user `analyticslitvin`
- `CNAME` — custom domain `ulianalitvin.com`
- `.nojekyll` — GitHub Pages configuration

## Publish
1. Create a public repository named `ulianalitvin.github.io` under the `analyticslitvin` GitHub account.
2. Extract this ZIP and upload the contents (not the ZIP) into the repository root.
3. Open Settings → Pages; select Deploy from a branch, `main`, `/ (root)`, and Save.
4. The default site URL will be `https://analyticslitvin.github.io/`.
5. Buy `ulianalitvin.com`; then in Settings → Pages enter it as the custom domain.
6. Add these DNS records at your registrar:

| Type | Host | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | analyticslitvin.github.io |

Keep existing email MX/TXT records. Remove only conflicting website parking/forwarding records. Wait for DNS propagation, then enable Enforce HTTPS in GitHub Pages.

Only public GitHub repositories are displayed. The portfolio intentionally avoids claims of unverified professional skills or project experience. GitHub API rate limits may temporarily prevent automatic repository loading; the direct GitHub link remains available.
