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

# ChatGPT direction on how I built this

## Question

`how can i create a react app step by step without even create react app using esbuild`

Creating a React app from scratch using esbuild involves several steps, which include setting up a project, installing dependencies, configuring esbuild, and creating React components. Below are the step-by-step instructions:

### Step 1: Setup Project Directory

1. Create a new directory for your project:

   ```sh
   mkdir my-react-app
   cd my-react-app
   ```

2. Initialize a new Node.js project:
   ```sh
   npm init -y
   ```

### Step 2: Install Dependencies

Install React, React DOM, esbuild, and a development server like serve:

```sh
npm install react react-dom
npm install --save-dev esbuild serve
```

### Step 3: Create Files and Directories

Create the following file structure in your project directory:

- `public/index.html`
- `src/index.js`
- `src/App.js`

1. Create `public` and `src` directories:

   ```sh
   mkdir public src
   ```

2. Create `public/index.html`:

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <title>My React App</title>
     </head>
     <body>
       <div id="root"></div>
       <script src="../dist/bundle.js"></script>
     </body>
   </html>
   ```

3. Create `src/index.js`:

   ```jsx
   import React from 'react';
   import ReactDOM from 'react-dom';
   import App from './App';

   ReactDOM.render(<App />, document.getElementById('root'));
   ```

4. Create `src/App.js`:

   ```jsx
   import React from 'react';

   function App() {
     return <div>Hello, World!</div>;
   }

   export default App;
   ```

### Step 4: Configure esbuild

Create a build script in your `package.json` to run esbuild:

1. Open `package.json` and add a `scripts` field with the following content:
   ```json
   "scripts": {
     "build": "esbuild --bundle --minify --sourcemap --outdir=dist src/index.js",
     "start": "serve public"
   }
   ```

### Step 5: Build and Run

Now you can build and run your React app.

1. Build the app:

   ```sh
   npm run build
   ```

2. Start the server:

   ```sh
   npm start
   ```

3. Open your browser and navigate to [http://localhost:5000](http://localhost:5000).

### Considerations

- This setup is meant for learning and understanding the basics. For a production setup, you would need to consider adding Babel for JSX transformation and newer JavaScript syntax, configuring environment variables, and optimizing the build process.
- You may also want to include a CSS preprocessor, set up routing, manage state using Redux or other state management libraries, and add testing frameworks according to your project needs.
