# Installation d'un projet nuxtTs

lien: https://fr.nuxtjs.org/guide/installation
```
yarn create nuxt-app <project-name>
```

## Selection dans le CLI de **nuxt-app**
- **Vuetify.js** : wrapper pour les composants css
- Pas de server framework
- Installer **Axios** et **DotEnv** mais **PWA** n'est pas forcément necessaire car on peut l'installer plus tard et ce n'est pas toujours utilisé
- ESLint et Prettier pour un meilleur code, il faudra par la suite les configurer
- Pour les tests, choisir **Jest** car on connait le framework de test
- **SPA** et non **SSR** (voir la différence entre les deux)
- Pour les dev tools prendre **jsconfig.json**


 # Installation pour pouvoir utiliser Typescript
lien: https://typescript.nuxtjs.org/guide/setup.html#installation

```code
yarn add --dev @nuxt/typescript-build
yarn add @nuxt/typescript-runtime
```
```js
// dans nuxt.config.js
export default {
  buildModules: ['@nuxt/typescript-build']
}
```
```js
// tsconfig.json
{
  "compilerOptions": {
    "target": "es2018",
    "module": "esnext",
    "moduleResolution": "node",
    "lib": [
      "esnext",
      "esnext.asynciterable",
      "dom"
    ],
    "esModuleInterop": true,
    "allowJs": true,
    "sourceMap": true,
    "strict": true,
    "noEmit": true,
    "baseUrl": ".",
    "paths": {
      "~/*": [
        "./*"
      ],
      "@/*": [
        "./*"
      ]
    }
  },
  "exclude": [
    "node_modules"
  ]
}
```
Ensuite créer un dossier **types** et créer le fichier suivant : **vue-shim.d.ts**

```js
declare module "*.vue" {
  import Vue from 'vue'
  export default Vue
}
```
Dans le fichier tsconfig.js ajouter dans la clé "**compilerOptions**" la clé/valeur suivante
- "typeRoots": ["/types"]

Dans le fichier package.json ajouter les lignes suivantes

```code
    "dev": "nuxt-ts",
    "build": "nuxt-ts build",
    "generate": "nuxt-ts generate",
    "start": "nuxt-ts start"
```

Si le package suivant est installé, supprimez le de vos dépendances : **@nuxtjs/eslint-config**

Ajouter la package suivant 
```code
yarn add -D @nuxtjs/eslint-config-typescript
```

Ensuite dans le fichier **.eslintrc.js** ajouter les lignes suivantes

```javascript
module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ]
}
```

```json
// package.json
"lint": "eslint --ext .ts,.js,.vue ."
```

Dans le fichier suivant, des informations doivent déjà être renseigné, compléter avec celle-ci

```javascript
// nuxt.config.js
export default {
  typescript: {
    typeCheck: {
      eslint: true
    }
  }
}
```