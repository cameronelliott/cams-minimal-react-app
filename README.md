# Cam's Minimal React App

## An Alternative to CRA: Create React App

- jsx not tsx based
- 100% Esbuild based
  - Esbuild build output
  - Esbuild dev server
- two command:
  - `npm run build` to build
  - `npm run start` to start dev server
- serve setup closely follows Esbuild docs [docs](https://esbuild.github.io/api/#serve)
- out of box working with live reload [docs](https://esbuild.github.io/api/#live-reload)
- only five files (excluding dist, and node_modules, gitignore)
  - package.json
  - package-lock.json
  - www/index.html
  - src/index.jsx
  - README.md
- no babel, no webpack, no tsconfig, no eslint, no prettier, no husky, no lint-staged, no commitlint, no commitizen, no commitlint

* Something missing, please open an issue, not a PR. Thanks!
