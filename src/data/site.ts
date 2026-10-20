export const site = {
  name: 'Xun Gao',
  headline: 'Machine learning, perception & intelligent systems',
  location: 'Stockholm, Sweden',
  email: 'xun.gao.work@gmail.com',
  github: 'https://github.com/xungao-dev',
  linkedin: 'https://www.linkedin.com/in/xun-gao-2056832b4',
  cvUrl: '', // Optional: add '/cv.pdf' after placing your PDF in public/cv.pdf
};

// Helps links work whether the site is at the domain root or a GitHub Pages subpath.
const rawBase = import.meta.env.BASE_URL;
export const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
export const href = (page = '') => `${base}${page.replace(/^\/+/, '')}`;
