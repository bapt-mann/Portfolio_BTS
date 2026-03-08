# Synchro TMS (VRM Link)

Application de synchronisation critique assurant l'intégrité des données entre les bases de données de la télématique (Vehco) et l'ERP de l'entreprise (Road Manager).

## Spécifications Techniques

### Architecture & Backend
* **Client Lourd (WPF)** : Interface utilisateur développée sous le pattern MVVM pour une séparation claire entre la logique métier et l'affichage.
* **Entity Framework Core** : Utilisation de l'ORM pour sécuriser les accès aux bases SQL Server et faciliter la maintenance du schéma.
* **Validation de Données** : Algorithme de vérification de cohérence pour empêcher les doublons et les erreurs de saisie manuelles entre les deux ERP.

### Flux de Données
* **Transactionnalité** : Implémentation de transactions SQL pour garantir qu'aucune donnée ne soit corrompue en cas de coupure réseau durant la synchro.

## Fonctionnalités Clés
* Centralisation de la saisie chauffeur (Saisie unique).
* Rapport d'erreurs détaillé en cas de non-conformité des données sources.