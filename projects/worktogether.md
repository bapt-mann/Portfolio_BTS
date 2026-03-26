# Système d'Information Data Center (WorkTogether)

![Aperçu de WorkTogether](images/worktogether.png)

## Présentation du projet
Dans le cadre de ma formation, j'ai développé le système d'information de l'entreprise fictive *WorkTogether*, spécialisée dans la location d'emplacements de baies en Data Center. Le projet s'articule autour d'une architecture duale pour répondre à tous les besoins métiers : un portail web (client léger) développé sous Symfony pour les clients externes, et une application de bureau (client lourd) pour la gestion interne par les employés.

## Développer la présence en ligne de l'organisation 
J'ai développé le site web vitrine et applicatif servant d'espace client sécurisé. Il permet aux utilisateurs de s'authentifier (avec vérification par email), de configurer la location de leurs emplacements de baies, et de suivre les incidents ou interventions techniques. Ce portail valorise les services de l'entreprise sur internet et modernise sa relation client.

## Gérer le patrimoine informatique 
Pour répondre aux besoins internes de sécurité, j'ai développé l'application de bureau en y intégrant une gestion stricte des habilitations (système de rôles RBAC). J'ai mis en place des vérifications de niveaux d'accès : l'administrateur peut y gérer les utilisateurs et restreindre l'accès aux fonctionnalités selon le poste de l'employé (un technicien aura accès à la gestion des interventions, un comptable à la facturation).

## Travailler en mode projet 
Pour orchestrer la création simultanée du client lourd et du client léger, j'ai planifié les activités via un tableau Kanban (GitHub Projects). Chaque fonctionnalité (authentification, gestion des baies, etc.) a été traduite en *Issue* technique, ce qui m'a permis de structurer le développement étape par étape, d'analyser les écarts, et de garder une trace rigoureuse des évolutions.

## Mettre à disposition et déployer un service 
J'ai pris en charge le déploiement du client web Symfony sur une infrastructure Linux. J'ai dû configurer un serveur virtuel Debian de zéro en y installant et paramétrant une stack LEMP (NGINX, MySQL, PHP). Ce déploiement a permis de rendre l'application totalement accessible et fonctionnelle depuis le réseau local de l'établissement.