# Site de la CFTC des personnels de Pas de Calais habitat

Site statique (HTML + CSS, sans framework ni dépendance externe) hébergé sur GitHub Pages.

## Arborescence

```
.
├── index.html                  Page d'accueil (contenu)
├── 404.html                    Page d'erreur
├── robots.txt
├── .nojekyll                   Désactive Jekyll : les fichiers sont servis tels quels
└── assets/
    ├── css/style.css           Toute la mise en forme (sections commentées)
    ├── img/                    Logos et favicon
    │   └── fonds/              Photos du bandeau d'accueil
    └── docs/                   PDF : profession de foi et liste des candidats
```

## Modifier le site

- **Texte, contacts, liens** : `index.html` (une ligne `<li class="contact">` par contact).
- **Couleurs, tailles, post-it** : `assets/css/style.css` (variables en haut du fichier).
- **PDF** : déposer dans `assets/docs/` les fichiers `profession-de-foi-2026.pdf` et `liste-des-candidats-2026.pdf`.
- **Photos du bandeau** : `assets/img/fonds/` et blocs `.hero__slide--…` du CSS.

## Publication

Settings → Pages → *Deploy from a branch* → branche `main`, dossier `/ (root)`.
