// src/utils/paths.js
export const withBase = (p) => {
  if (!p) return p;
  // ne touche pas aux URL externes (http, https, data:, blob:)
  if (
    /^(?:[a-z]+:)?\/\//i.test(p) ||
    p.startsWith('data:') ||
    p.startsWith('blob:')
  )
    return p;
  const base = import.meta.env.BASE_URL || '/';
  // enlève un éventuel slash de tête pour éviter base//images
  return base + p.replace(/^\/+/, '');
};

// pratique : transforme un projet entier
const mapProjectPaths = (project) => ({
  ...project,
  cover: withBase(project.cover),
  pictures: (project.pictures || []).map(withBase),
});

export default mapProjectPaths;
