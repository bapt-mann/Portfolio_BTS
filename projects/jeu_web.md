# POC : Moteur Backend Multijoueur Temps Réel (Node.js)

![Aperçu du jeu web](images/jeu_web.png)

## Présentation du projet
Afin d'expérimenter la communication bidirectionnelle en temps réel (qui diffère totalement des requêtes HTTP classiques que j'utilise en entreprise), j'ai développé un "Proof of Concept" (POC). Il s'agit d'un moteur de jeu de stratégie au tour par tour (T-RPG) jouable en 1v1 directement dans le navigateur. Le frontend gère le rendu de la grille, tandis que la logique repose sur un backend Node.js transpilé en TypeScript.

## Organiser son développement professionnel 
Ce projet est le fruit de la mise en place d'un environnement d'apprentissage personnel en dehors de mon cursus classique. J'ai utilisé la technologie des websockets pour réaliser ce projet qui n'est pas abordée dans le cursus scolaire. Le choix de TypeScript a également été une démarche d'auto-formation pour m'imposer un typage fort et éviter de nombreux bugs lors de la manipulation des objets en mémoire.

## Gérer le patrimoine informatique 
Dans une architecture multijoueur web, le client (navigateur) est par définition vulnérable. Pour exploiter les standards de sécurité de cette industrie, j'ai mis en œuvre le concept de "Server Authority". Le backend Node.js détient l'état réel de la partie : il vérifie la validité des déplacements et calcule les dégâts avant de renvoyer l'état synchronisé aux deux joueurs, protégeant ainsi l'intégrité de la partie contre la triche.

