# Xun Gao · Astro Portfolio

A responsive, static Astro portfolio customized around research and engineering projects. No React or backend required.

## 1. Requirements

- Node.js **22.22.0 or later** (`node --version`)
- npm
- A code editor such as VS Code (the Astro extension is recommended)

## 2. Run locally

```bash
npm install
npm run dev
```

Open the local address printed in your terminal (usually http://localhost:4321).

To build a production version:

```bash
npm run build
npm run preview
```

Optional type-checking after installing dependencies: `npm run check`.

## 3. Edit your information

| What to change | File |
| --- | --- |
| Email, GitHub, LinkedIn, CV URL | `src/data/site.ts` |
| Project names, categories, descriptions, tags and links | `src/data/projects.ts` |
| Homepage intro and featured sections | `src/pages/index.astro` |
| Education, experience and publication | `src/pages/about.astro` |
| Styles, spacing, colors | `src/styles/global.css` |
| Main site navigation | `src/components/Header.astro` |
| Project artwork | `src/components/ProjectArt.astro` |

`featured: true` in a project object makes it appear on the homepage. Every project in `src/data/projects.ts` automatically gets its own page at `/projects/your-slug/`.

**Adding a new project**: duplicate an object in `src/data/projects.ts`, update the fields, and give it a unique `slug` and one of the existing `art` values. Put it in the appropriate `category` for filtering.

**CV download**: place a version of your CV that you want to publish at `public/cv.pdf`, then set `cvUrl: '/cv.pdf'` in `src/data/site.ts`. The CV button stays hidden until you set this.

**Confidential projects**: descriptions here are deliberately high-level. Re-check NDA/IP requirements before putting actual company figures, screenshots, metrics, source code, architectures or datasets on a public site. Edit/remove any draft descriptions that cannot be published.

**Your project screenshots**: Currently the site uses self-contained vector illustrations. If you add screenshots later, put files under `public/images/`, and update the `ProjectArt`/`ProjectCard` components as desired.

## 4. Publish for free with GitHub Pages

The easiest personal URL is **https://xungao-dev.github.io/**.

1. Create a **public** GitHub repository named exactly `xungao-dev.github.io`.
2. Open a terminal inside the project folder, then run:

```bash
git init
git add .
git commit -m "Initial Astro portfolio"
git branch -M main
git remote add origin https://github.com/xungao-dev/xungao-dev.github.io.git
git push -u origin main
```

3. On GitHub, go to the repository **Settings → Pages** and choose **GitHub Actions** as the build/deployment source.
4. The workflow at `.github/workflows/deploy.yml` will build and deploy automatically on pushes to `main`. Check the **Actions** tab for progress.
5. Once deployment succeeds, visit **https://xungao-dev.github.io/**.

The workflow uses Astro's official `withastro/action` and GitHub Pages deployment action.

### If you use a different repository name

For example, `portfolio` would publish to `https://xungao-dev.github.io/portfolio/`.

Add `base: '/portfolio'` to `astro.config.mjs`. Internal page links in this starter use `href()` from `src/data/site.ts` and already support a `base` setting. If you set `cvUrl`, be sure to include the base prefix or use a full URL.

### If you later buy a domain

Update `site` in `astro.config.mjs`, remove `base` if present, and follow GitHub Pages' custom-domain instructions.

## 5. Notes

- The project information is a **starter draft** based on previously described CV and GitHub work. Review every claim before publishing.
- No private company source code, datasets or screenshots are included.
- Do not claim a demo is working until you have verified it locally.
- There is no analytics, cookies, newsletter or external font dependency.

Official resources: https://docs.astro.build/install-and-setup/ and https://docs.astro.build/en/guides/deploy/github/
