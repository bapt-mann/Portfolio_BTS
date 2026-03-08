# Générateur Excel SQL (Data Exporter)

Outil d'extraction de données sécurisé permettant aux collaborateurs métier d'exporter des jeux de données complexes sans posséder de droits d'accès directs ou de connaissances en langage SQL.

## Spécifications Techniques

### Sécurisation des Accès (Abstraction BDD)
* **Isolation des Privilèges** : L'application agit comme une passerelle (middleware). L'utilisateur n'a jamais connaissance des chaînes de connexion ni des identifiants de la base de données.
* **Requêtage Paramétré** : Utilisation de procédures stockées ou de requêtes préparées pour prévenir les risques d'injection SQL lors de l'application de filtres.
* **Lecture Seule (Read-Only)** : Configuration stricte du driver SQL pour garantir l'impossibilité de modification ou de suppression de données (RGPD/Intégrité).

### Moteur d'Exportation
* **Interfaçage Python-SQL** : Utilisation de `pyodbc` pour une communication haute performance avec SQL Server.
* **Formatage Excel Dynamique** : Génération de fichiers `.xlsx` structurés via `pandas` ou `openpyxl`, incluant le formatage automatique des colonnes (dates, monétaire) pour une exploitation immédiate par les services comptables ou logistiques.

## Fonctionnalités Clés
* Interface simplifiée pour l'exécution de rapports prédéfinis.
* Exportation instantanée de volumes de données importants vers Excel.
* Réduction des tickets de support informatique liés aux demandes d'extractions manuelles.