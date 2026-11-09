# Site de la CFTC des personnels de Pas de Calais habitat

Site statique (HTML + CSS, sans framework ni dépendance externe) hébergé sur GitHub Pages.

## Arborescence

```
.
├── index.html                  Page d'accueil (contenu)
├── candidats.html              Liste des candidats (page d'attente jusqu'au 20 novembre)
├── profession-de-foi.html      Profession de foi (page d'attente jusqu'au 20 novembre)
├── 404.html                    Page d'erreur
├── robots.txt
├── .nojekyll                   Désactive Jekyll : les fichiers sont servis tels quels
└── assets/
    ├── css/style.css           Toute la mise en forme (sections commentées)
    └── img/                    Logos et favicon
        └── fonds/              Photos du bandeau d'accueil
```

## Modifier le site

- **Texte, contacts, liens** : `index.html` (une ligne `<li class="contact">` par contact).
- **Couleurs, tailles, post-it** : `assets/css/style.css` (variables en haut du fichier).
- **Candidats et profession de foi** : pages d'attente jusqu'au 20 novembre, puis voir `publication-20-novembre/LISEZMOI-PUBLICATION.txt` (dossier fourni à part, à ne pas mettre dans le dépôt avant la date).
- **Photos du bandeau** : `assets/img/fonds/` et blocs `.hero__slide--…` du CSS.

## Publication

Settings → Pages → *Deploy from a branch* → branche `main`, dossier `/ (root)`.
