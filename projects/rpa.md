# RPA Dématérialisation RH

Solution d'automatisation robotisée conçue pour transformer la gestion des documents RH (Frais, RCR) avant leur intégration dans un système dématérialisé.

## Spécifications Techniques

### Traitement des Données & Sécurité
* **Parsing Excel** : Extraction et structuration des données conducteurs via `openpyxl` / `pandas`.
* **Sécurité (Cryptography)** : Chiffrement AES des données sensibles avant stockage ou transfert pour garantir la confidentialité RGPD.
* **Gestion de Cache** : Implémentation d'un système de persistance locale pour optimiser les temps de traitement lors de générations massives.

### Moteur de Génération
* **PyWin32 & Ghostscript** : Pilotage des API Windows pour la conversion et la fusion de documents PDF.
* **Intégrité SQL** : Logs de traitement et mise à jour des status en base de données SQL Server pour un suivi en temps réel.

## Fonctionnalités Clés
* Génération automatisée des fiches de frais et RCR pour les chauffeurs.
* Système de "Dry Run" pour valider les données avant la génération finale.