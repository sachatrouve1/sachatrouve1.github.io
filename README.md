# Portfolio Géométrique

Ce projet est un portfolio personnel avec une ambiance géométrique et squelettique, créé avec React et Vite. Il intègre une animation 3D interactive en arrière-plan grâce à `react-three-fiber` et `three.js`.

## Technologies Utilisées

*   **React**
*   **Vite**
*   **TypeScript**
*   **three.js**
*   **@react-three/fiber**
*   **@react-three/drei**

## Installation

1.  **Cloner le dépôt** (si applicable)
    ```bash
    git clone <URL_DU_DEPOT>
    cd portfolio-geometrique
    ```
2.  **Installer les dépendances**
    ```bash
    npm install
    ```

## Lancer le projet en développement

Pour démarrer le serveur de développement local :

```bash
npm run dev
```

Ouvrez votre navigateur et naviguez vers `http://localhost:5173` (ou le port indiqué dans votre terminal) pour voir l'application.

## Structure du projet

```
.
├── public/                     # Fichiers statiques
├── src/
│   ├── assets/                 # Actifs (images, etc.)
│   ├── components/             # Composants React (Hero, Projects, Contact)
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   └── Projects.tsx
│   ├── App.tsx                 # Composant principal de l'application
│   ├── index.css               # Styles globaux
│   └── main.tsx                # Point d'entrée de l'application
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Personnalisation

*   **Contenu des projets :** Modifiez `src/components/Projects.tsx` pour ajouter vos propres projets.
*   **Informations de contact :** Mettez à jour `src/components/Contact.tsx` pour vos détails de contact.
*   **Thème et couleurs :** Les styles globaux sont dans `src/index.css`. Les couleurs d'accentuation peuvent être ajustées dans les composants individuels.
*   **Animation 3D :** `src/components/Hero.tsx` contient le code de l'animation, vous pouvez l'expérimenter.# Portfolio
