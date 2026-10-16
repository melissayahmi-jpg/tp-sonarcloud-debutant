# TP SonarQube Cloud (SonarCloud) — Analyse de la qualité du code

## Objectif
Analyser un petit programme JavaScript avec SonarQube Cloud, relever les problèmes signalés, proposer des corrections et comparer avant/après.

## Code
`calcul-notes.js` contient volontairement plusieurs choix de code perfectibles (variables `var`, comparaison `==`, duplication, variable inutilisée, etc.). SonarQube Cloud peut signaler certains de ces points selon le profil de qualité actif : les résultats exacts doivent être relevés dans la plateforme.

## Test local facultatif
Si Node.js est installé : `node calcul-notes.js`.

## Analyse dans SonarQube Cloud
1. Créer un nouveau dépôt GitHub, par exemple `tp-sonarcloud-debutant`.
2. Ajouter `calcul-notes.js` et `README.md` à la racine du dépôt.
3. Ouvrir https://sonarcloud.io et se connecter via GitHub.
4. Créer/importer son organisation et sélectionner le dépôt avec « Analyze new project ».
5. Si proposé, choisir l'analyse automatique (Automatic analysis).
6. Regarder les résultats de l'Overview, de l'onglet Issues et du Quality Gate.
7. Faire des captures d'écran des résultats : nombre de problèmes, sévérités, duplication, Quality Gate.

## Rapport
Ne pas inventer de chiffres ou de problèmes : ils varient selon le profil et la date. Noter les résultats réellement affichés, puis corriger le fichier dans GitHub et relancer l'analyse.
