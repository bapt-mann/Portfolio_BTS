# CRM Contact Manager - Ambroise Bouvier Transports (ABT)

![Aperçu de l'application](images/crm_1.png)

## Présentation du projet
Pour centraliser l'annuaire des contacts professionnels de l'entreprise, j'ai développé une solution applicative complète (CRM). L'objectif était de remplacer les fichiers Excel éparpillés par un outil unique et hautement sécurisé. Ce projet repose sur une architecture N-Tier : un client lourd C# WPF pour l'interface, une API backend ASP.NET Core RESTful pour la logique, et une base de données MySQL gérée via Entity Framework Core. 

## Gérer le patrimoine informatique  
J'ai conçu l'application en respectant les standards d'architecture (Pattern MVVM, N-Tier) pour faciliter sa maintenabilité. J'ai surtout mis en place un contrôle d'accès strict basé sur les rôles (RBAC). L'API filtre les droits des utilisateurs selon quatre niveaux d'habilitation (de la Lecture Seule au Super Administrateur), garantissant que chaque collaborateur n'a accès qu'aux données de son agence, protégeant ainsi les informations sensibles de l'entreprise.

## Mettre à disposition et déployer un service  
Pour faciliter le déploiement sur la centaine de postes de l'entreprise, j'ai configuré le serveur web IIS (Windows Server) pour héberger l'API. Côté utilisateur, j'ai automatisé les mises à jour en intégrant la solution Velopack au client lourd WPF. À chaque lancement, l'application interroge le serveur IIS et télécharge silencieusement les nouvelles versions, garantissant que tous les collaborateurs disposent d'un outil à jour sans intervention manuelle.

## Répondre aux demandes d'évolution  
Suite à une demande des utilisateurs, j'ai fait évoluer l'application pour l'interconnecter avec le système téléphonique 3CX. J'ai développé une fonctionnalité "Click-to-Call" via un protocole URI système personnalisé (`crm-abt://`), permettant aux exploitants de lancer des appels en un clic depuis le CRM.