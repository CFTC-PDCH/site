# Site de la CFTC des personnels de Pas de Calais habitat

Site statique (HTML + CSS, sans framework ni dépendance externe) hébergé sur GitHub Pages.

## Arborescence

```
.
├── index.html                  Page d'accueil (contenu)
├── candidats.html              Liste des candidats
├── profession-de-foi.html      Profession de foi (affiche le PDF)
├── 404.html                    Page d'erreur
├── robots.txt
├── .nojekyll                   Désactive Jekyll : les fichiers sont servis tels quels
└── assets/
    ├── css/style.css           Toute la mise en forme (sections commentées)
    ├── js/countdown.js         Décompte (plus utilisé depuis le 20 novembre)
    ├── docs/                   profession-de-foi-2026.pdf
    └── img/                    Logos et favicon
        └── fonds/              Photos du bandeau d'accueil
```

## Modifier le site

- **Texte, contacts, liens** : `index.html` (une ligne `<li class="contact">` par contact).
- **Couleurs, tailles, post-it** : `assets/css/style.css` (variables en haut du fichier).
- **Profession de foi** : remplacer `assets/docs/profession-de-foi-2026.pdf` (même nom).
- **Photos du bandeau** : `assets/img/fonds/` et blocs `.hero__slide--…` du CSS.

## Publication

Settings → Pages → *Deploy from a branch* → branche `main`, dossier `/ (root)`.
