# Simulation d'Agents Autonomes (Pygame)

Ce projet est une simulation technique d'interactions entre entités autonomes utilisant des règles de type "Pierre-Feuille-Ciseaux" et une logique de contamination virale.

## Spécifications Techniques

### Système de Mouvement (Steering Behaviors)

Les déplacements des blocs ne sont pas aléatoires mais basés sur des forces vectorielles :

* **Seek & Flee** : Calcul de forces pour rejoindre ou fuir une cible selon le type d'élément.
* **Arrive** : Ralentissement progressif à l'approche d'une zone cible pour éviter les oscillations.
* **Wander** : Force de déplacement erratique appliquée en l'absence de cible.
* **Meute (Zone)** : Les blocs secondaires suivent un leader tout en maintenant une distance de séparation pour former un groupe circulaire.

### Moteur Physique

* **Collisions Élastiques** : Résolution des impacts via vecteurs normaux et conservation de la vélocité.
* **Stabilisation (Baumgarte)** : Correction de la position par facteur de relaxation (0.4) pour réduire les tremblements lors des empilements.
* **Sub-stepping** : Exécution de 3 itérations de résolution de collision par cycle d'horloge pour stabiliser les interactions complexes.
* **Delta Time** : Calcul des mouvements basé sur le temps écoulé pour assurer une vitesse constante quel que soit le framerate.

### Optimisation

* **Spatial Partitioning** : Utilisation d'une grille spatiale (chunks de 80px) pour limiter les calculs de collision aux blocs adjacents.

### Rendu Graphique

* **Rotation** : Orientation des sprites en fonction du vecteur de vélocité.
* **Motion Trails** : Historique des positions rendu avec un dégradé de transparence et d'épaisseur.
* **Dégradés** : Fond généré par interpolation bilinéaire via `smoothscale` pour éviter l'effet de banding.

## Logique de Simulation

* **Interactions** : Rouge > Vert > Bleu > Rouge.
* **Virus (Noir)** : Contamine tout type de bloc par contact ou via une onde de choc.
* **Limite** : Le nombre de blocs noirs est limité à 20 ; l'ajout d'un nouveau bloc entraîne la destruction de celui-ci.

