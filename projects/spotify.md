# Dashboard API Spotify

Application Web interactive permettant l'analyse de données musicales et l'automatisation de la gestion de playlists via les services officiels de Spotify.

## Spécifications Techniques

### Intégration API & Auth
* **OAuth 2.0** : Implémentation du flux d'authentification sécurisé (Authorization Code Flow) pour l'accès aux données privées des utilisateurs.
* **Node.js Backend** : Serveur intermédiaire gérant les appels API REST et le rafraîchissement des tokens d'accès.

### Frontend & Data
* **Consommation REST** : Récupération asynchrone des métadonnées (Artistes, Tracks, Audio Features).
* **Traitement JSON** : Formatage dynamique des données pour un affichage fluide côté client.

## Fonctionnalités Clés
* Visualisation des statistiques d'écoute personnelles.
* Outil de création de playlists basées sur des critères spécifiques (tempo, genre).