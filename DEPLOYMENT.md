# GitHub Pages Deployment Guide

This project is configured to deploy to GitHub Pages with the root directory ("/") as the base path.

## Configuration

The following configurations have been set up for GitHub Pages deployment:

### Vite Configuration
- **Base path**: Set to `"/"` in `vite.config.ts` for deployment at the root directory
- **Server**: Configured to run on port 5000 with host `0.0.0.0`

### NPM Scripts
Two deployment scripts have been added to `package.json`:

```bash
npm run predeploy  # Automatically builds the project before deployment
npm run deploy     # Deploys the built files to GitHub Pages
```

## How to Deploy

### Prerequisites
1. Make sure you have a GitHub repository set up
2. Ensure you have committed all your changes to git
3. The `gh-pages` package is already installed

### Deployment Steps

1. **Build and Deploy**:
   ```bash
   npm run deploy
   ```
   This command will:
   - Build your project (`npm run build`)
   - Deploy the `dist` folder to the `gh-pages` branch
   - Push to GitHub

2. **Enable GitHub Pages**:
   - Go to your GitHub repository
   - Navigate to **Settings** → **Pages**
   - Under "Source", select the `gh-pages` branch
   - Click Save
   - Your site will be available at: `https://your-username.github.io/your-repo-name/`

### For Custom Domain or Root Deployment

If you're deploying to a custom domain or the root of your GitHub Pages site (e.g., `username.github.io`):
- The base path is already set to `"/"` in `vite.config.ts`
- No additional changes needed

If you're deploying to a repository page (e.g., `username.github.io/repo-name`):
- Update the `base` in `vite.config.ts` to `"/repo-name/"`
- Run `npm run deploy` again

## Development

To run the development server locally:

```bash
npm run dev
```

The app will be available at `http://localhost:5000`

## Build

To build the project without deploying:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview

To preview the built version locally:

```bash
npm run preview
```
