# CRM Contact Manager - Ambroise Bouvier Transports (ABT)

**Contexte :** Pour centraliser et gérer l'annuaire des contacts professionnels des différentes agences de l'entreprise, j'ai conçu et développé de A à Z une solution applicative complète. L'objectif était de remplacer les fichiers éparpillés par un outil unique, sécurisé, et directement relié au système de téléphonie de l'entreprise (3CX).

*[📸 INSÉRER ICI : Une belle capture d'écran de l'interface WPF du CRM (de préférence sur la page de recherche des contacts ou le tableau de bord)]*

## Stack Technique & Architecture
Ce projet repose sur une **Architecture N-Tier** pour séparer la logique d'affichage, la logique métier et l'accès aux données :
* **Frontend (Client Lourd) :** C# WPF (Pattern MVVM)
* **Backend (API) :** ASP.NET Core RESTful
* **Base de données :** MySQL via Entity Framework Core (Code-First)
* **Déploiement :** Velopack & Serveur web IIS

---

## Fonctionnalités & Choix Techniques

### 1. Architecture Sécurisée et Habilitations (RBAC)
L'application intègre un contrôle d'accès poussé basé sur les rôles (Role-Based Access Control). L'API sert de passerelle de sécurité et filtre les droits des utilisateurs selon 4 niveaux :
* *Lecture Seule* (Consultation).
* *Créateur* (Gestion de ses propres contacts).
* *Admin d'Agence* (Gestion à l'échelle d'un site physique).
* *Super Admin* (Contrôle total via un panneau d'administration dédié).

*[📸 INSÉRER ICI : Un schéma simple de l'architecture (WPF <-> API <-> BDD) OU une capture d'écran de l'interface d'administration des rôles]*

### 2. Intégration Système (Téléphonie 3CX)
Pour répondre à un besoin métier fort (gain de temps pour les exploitants), j'ai interconnecté le CRM avec le système téléphonique 3CX de l'entreprise. J'ai configuré l'enregistrement d'un protocole URI système personnalisé (`crm-abt://`) sous Windows, permettant de lancer des appels en un clic directement depuis la fiche d'un contact dans le CRM.

### 3. Mise à disposition et Déploiement Continu (CI/CD)
Pour faciliter le déploiement sur les nombreux postes de l'entreprise sans intervention manuelle de la DSI :
* L'API backend est hébergée et sécurisée via le gestionnaire **IIS** de Windows Server.
* Le client lourd WPF intègre **Velopack**. À chaque lancement, l'application interroge le serveur et télécharge de manière transparente et silencieuse les nouvelles mises à jour ("Over-The-Air").

*[📸 INSÉRER ICI : Une capture de ton terminal montrant la compilation de la release Velopack (vpk pack) OU une capture du dossier sur ton serveur IIS]*

---

## Compétences E5 Validées

* **Gérer le patrimoine informatique :**
  * *Exploiter des référentiels, normes et standards :* Mise en place d'une architecture N-Tier (API RESTful, Pattern MVVM) et utilisation d'un ORM (Entity Framework).
  * *Mettre en place et vérifier les niveaux d’habilitation :* Conception du système de rôles (RBAC) pour restreindre l'accès aux données sensibles.
* **Mettre à disposition des utilisateurs un service informatique :**
  * *Déployer un service :* Configuration du serveur IIS et automatisation des mises à jour du client via Velopack.
* **Répondre aux incidents et aux demandes d'assistance :**
  * *Traiter des demandes concernant les applications :* Développement de la fonctionnalité de clic-to-call (URI 3CX) suite à la demande des utilisateurs finaux.