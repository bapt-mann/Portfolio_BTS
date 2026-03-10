# POC : Moteur Backend Multijoueur Temps Réel (Node.js)

**Contexte :** Dans le cadre de mon auto-formation sur les architectures web modernes, j'ai voulu expérimenter la communication bidirectionnelle en temps réel, qui diffère totalement des requêtes HTTP classiques. Pour rendre cet apprentissage concret, j'ai développé un "Proof of Concept" (POC) : un moteur de jeu de stratégie au tour par tour (T-RPG) jouable en 1v1 directement dans le navigateur.

*capture du jeu*

## Stack Technique & Architecture
* **Backend (Logique & Serveur) :** Node.js
* **Langage :** TypeScript (Transpilé via `npx tsc`)
* **Réseau / Temps Réel :** WebSockets (Librairie `Socket.io`)
* **Frontend :** Interface web légère (HTML/CSS/JS) pour le rendu du terrain (Grid).

---

## Réalisations & Choix Techniques

### 1. Communication Temps Réel (WebSockets)
Contrairement à une application classique où le client doit constamment interroger le serveur (Polling) pour savoir si l'adversaire a joué, j'ai implémenté des **WebSockets** avec `Socket.io`. Cela permet de maintenir une connexion TCP ouverte : dès que le Joueur A déplace son unité, le serveur "pousse" instantanément l'information au Joueur B, garantissant une fluidité parfaite pour du tour par tour.



### 2. Sécurité et "Server Authority"
Dans un jeu multijoueur web, la règle d'or est de ne jamais faire confiance au client (pour éviter la triche). Le frontend ne sert ici qu'à afficher la grille et envoyer des "intentions" de jeu. C'est le serveur **Node.js** qui détient l'état réel de la partie : il valide si un déplacement est possible (portée), calcule les dégâts des attaques, gère les tours, puis renvoie le nouvel état synchronisé aux deux joueurs.

### 3. Typage Fort et Modélisation (TypeScript)
Pour gérer la logique complexe d'un RPG (points de vie, statistiques d'attaque, portée sur un quadrillage), j'ai fait le choix d'utiliser **TypeScript**. Le typage strict m'a permis d'éviter de nombreux bugs lors de la manipulation des objets "Unités" et "Joueurs" côté serveur avant la compilation en JavaScript.

---

## Compétences E5 Validées

* **Organiser son développement professionnel :**
  * *Mettre en place son environnement d’apprentissage personnel :* Auto-formation sur Node.js, TypeScript et le protocole WebSocket en dehors du cursus scolaire classique.
* **Gérer le patrimoine informatique :**
  * *Exploiter des référentiels, normes et standards :* Mise en œuvre d'une architecture client-serveur stricte où le backend est garant de l'intégrité des données (Server-side validation).
* **Travailler en mode projet :**
  * *Planifier les activités :* Conception itérative ("FirstGame"), avec pour objectif d'obtenir d'abord un prototype de synchronisation fonctionnel avant de développer les graphismes.