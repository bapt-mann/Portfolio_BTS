# Générateur de Rapports Sécurisé (SQL vers Excel)

**Contexte :** En entreprise, les utilisateurs ont régulièrement besoin d'extraire des données de la base de données vers des tableurs pour faire du reporting. Pour répondre à cette demande récurrente sans mobiliser un développeur à chaque fois, j'ai conçu un outil d'automatisation en Python.



## Stack Technique
* **Langage :** Python
* **Base de données :** SQL Server (via `pyodbc`)
* **Manipulation de fichiers :** `openpyxl` (Génération Excel)
* **Sécurité :** `cryptography` (Chiffrement des identifiants)

---

## Fonctionnalités & Choix Techniques

### 1. Sécurité (Chiffrement)
Afin de ne jamais laisser de mots de passe en clair dans les scripts, j'ai mis en place un système de sécurité strict. Le script `main.py` ne contient aucune information sensible. Il lit les identifiants depuis un fichier `connectionSettings.enc.json` qui est déchiffré à la volée grâce à une clé `secret.key` générée via la librairie `cryptography.fernet`.

### 2. Flexibilité et Accompagnement Utilisateur
Pour rendre l'outil utilisable par des non-développeurs, j'ai totalement externalisé la configuration :
* **Requêtes dynamiques :** La requête SQL n'est pas codée en dur. L'outil lit un fichier texte `commande.cfg`. Si le besoin métier change, il suffit de modifier ce fichier texte sans toucher au code Python.
* **Génération via Modèle :** Le script lit un fichier `modele.cfg`. S'il détecte un modèle Excel pré-formaté (avec les logos de l'entreprise et des en-têtes stylisés), il injecte intelligemment les données SQL à partir de la ligne 2, préservant ainsi la charte graphique.

---

## Compétences E5 Validées

* **Répondre aux incidents et aux demandes d'assistance :**
  * *Collecter, suivre et orienter des demandes :* Analyse du besoin récurrent d'extraction de données par les utilisateurs métiers.
* **Mettre à disposition un service informatique :**
  * *Accompagner les utilisateurs :* Fourniture d'un outil simple (fichiers `.cfg`) ne nécessitant pas de compétences en programmation pour être mis à jour.
* **Gérer le patrimoine informatique :**
  * *Vérifier le respect des règles d’utilisation des ressources :* Sécurisation stricte des accès à la base de données SQL Server via chiffrement asymétrique.