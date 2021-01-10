module.exports = {
  // extends: ['@acot'],
  presets: ['@acot/wcag'],
  rules: { "@acot/wcag/interactive-supports-focus": "error" },
  origin: 'https://interactive-supports-focus-sandbox.netlify.app',
  paths: ['/'],
};
