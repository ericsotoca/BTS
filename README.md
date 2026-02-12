
# Présentation Prospective BTS SIO 2026-2030

Ce projet est une présentation interactive ultra-moderne conçue pour les lycéens de terminale. Elle présente les enjeux futurs du BTS SIO (options SISR et SLAM) avec une esthétique futuriste.

## Technologies
- **React 18** + **TypeScript**
- **Tailwind CSS** pour le design "Dark Mode / Cyber"
- **Lucide React** pour les icônes
- **Vanille CSS/JS** pour les transitions légères

## Comment déployer sur GitHub Pages

1. **Créer un nouveau dépôt sur GitHub.**
2. **Copier les fichiers** générés dans votre dossier local.
3. **Pousser le code vers GitHub** :
   ```bash
   git init
   git add .
   git commit -m "Initial commit: BTS SIO presentation"
   git branch -M main
   git remote add origin https://github.com/VOTRE_NOM/NOM_DU_REPO.git
   git push -u origin main
   ```
4. **Activer GitHub Pages** :
   - Allez dans l'onglet **Settings** de votre dépôt GitHub.
   - Cliquez sur **Pages** dans le menu latéral.
   - Dans "Build and deployment", sélectionnez "GitHub Actions" (si vous avez un workflow de build) ou "Deploy from a branch" (si vous poussez un build statique).

*Note : Cette application est conçue comme un Single Page Application (SPA) légère.*

## Navigation
- Flèches gauche/droite ou Espace pour naviguer.
- Entièrement responsive (Mobile / Tablette / Desktop).
- Quiz interactif inclus à la fin pour aider à l'orientation.
