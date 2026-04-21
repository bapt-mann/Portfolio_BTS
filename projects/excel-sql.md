# Générateur de Rapports Sécurisé (SQL vers Excel)

## Présentation du projet
Les utilisateurs métiers de l'entreprise ont régulièrement besoin d'extraire des données brutes depuis la base de données vers des tableurs Excel pour réaliser leurs reportings. Pour automatiser cette tâche sans mobiliser un développeur à chaque requête, j'ai conçu un utilitaire (RPA) en Python. Ce script interroge la base SQL Server et génère dynamiquement des fichiers Excel formatés, rendant les collaborateurs totalement autonomes.

## Répondre aux incidents et demandes d'assistance 
Ce projet est né directement de la collecte et de l'analyse d'une demande récurrente d'assistance des utilisateurs, qui perdaient un temps précieux à manipuler des exports bruts. J'ai traité cette demande en créant un outil sur-mesure qui externalise la requête SQL dans un fichier texte (`commande.cfg`), permettant de modifier l'extraction à la volée si le besoin métier évolue, sans avoir à recompiler le code Python.

## Gérer le patrimoine informatique 
Afin de ne jamais exposer les mots de passe de la base de données en clair dans les scripts distribués, j'ai sécurisé l'accès aux ressources. Le script lit les identifiants depuis un fichier de configuration chiffré, déchiffré à la volée grâce à une clé générée via la librairie `cryptography.fernet` (chiffrement symétrique). Cela garantit le respect strict des règles de sécurité du patrimoine.

## Mettre à disposition un service informatique 
Pour accompagner les utilisateurs non-développeurs, j'ai rendu l'outil intelligent. Le script lit un fichier `modele.xlsx` : s'il détecte un modèle Excel pré-formaté (avec les logos de l'entreprise et des en-têtes stylisés), il injecte les données SQL à partir de la ligne 2. Les rapports générés respectent ainsi automatiquement la charte graphique, facilitant l'acceptation du service par les équipes.