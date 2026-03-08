# Moniteur FTP Automatisé

Service de surveillance active et de transfert de fichiers conçu pour automatiser les échanges inter-serveurs en temps réel.

## Spécifications Techniques

### Surveillance & Asynchronisme
* **Watchdog API** : Utilisation des événements natifs du système de fichiers pour détecter instantanément toute création ou modification de fichier.
* **Threading** : Gestion multi-threadée pour permettre la surveillance continue tout en effectuant plusieurs transferts FTP simultanés sans bloquer l'UI.

### Interface & Configuration
* **TKinter UI** : Dashboard de monitoring permettant de paramétrer les extensions de fichiers surveillées et les destinations distantes.
* **Log System** : Système de journalisation robuste pour tracer chaque transfert (succès, échec, retry).

## Fonctionnalités Clés
* Transfert automatique de fichiers spécifiques vers des serveurs distants.
* Alertes visuelles en cas d'interruption du service FTP.