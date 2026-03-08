# CRM Contact Manager (Multi-Filiales)

Solution de gestion centralisée des contacts d'entreprise conçue pour unifier les répertoires de plusieurs filiales et préparer la transition vers la téléphonie IP (VoIP).

## Spécifications Techniques

### Architecture Client-Serveur (API REST)
* **Backend C# (ASP.NET Core)** : Développement d'une API REST dédiée servant de passerelle entre la base de données et les clients lourds, garantissant une meilleure sécurité et scalabilité.
* **Client Lourd WPF** : Interface utilisateur riche développée en C# (WPF), offrant une expérience fluide et réactive pour les gestionnaires de données.
* **Modélisation de Données** : Conception d'une classe de modèle de base de données (POCO) pour assurer une correspondance parfaite entre les objets métier et le stockage SQL via un ORM.

### Gestion des Droits & Intégrité
* **Système RBAC (Role-Based Access Control)** : Implémentation d'une gestion fine des permissions permettant d'attribuer des droits de lecture/écriture spécifiques par utilisateur ou par filiale.
* **Centralisation de Données** : Fusion des répertoires isolés en une base de données unique pour éliminer les doublons et les silos d'informations entre les différentes entités de l'entreprise.

## Fonctionnalités Clés & Interopérabilité
* **Compatibilité 3CX** : Préparation des données pour une synchronisation native avec le système de téléphonie IP 3CX, permettant la remontée de fiche lors d'appels entrants.
* **Transition Téléphonie IP** : Standardisation des formats de numérotation pour assurer la compatibilité future avec les protocoles de téléphonie moderne.


![alt text](images/image.png)