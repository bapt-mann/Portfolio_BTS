# Simulation Algorithmique et Physique (Python)

![Aperçu de la simulation](images/simulation_1.png)

## Présentation du projet
Ce projet est une simulation technique d'interactions entre des entités autonomes développée en Python (Pygame). L'objectif était de concevoir un écosystème fermé régi par des règles de type "Pierre-Feuille-Ciseaux" (Rouge > Vert > Bleu), auquel s'ajoute une mécanique de contamination par un virus. La simulation intègre un moteur physique gérant des forces vectorielles et la résolution des collisions.

## Organiser son développement professionnel 
Pour modéliser des comportements physiques réalistes, j'ai dû mettre en œuvre des stratégies de veille très spécifiques. Je me suis documenté sur la méthode de Baumgarte (stabilisation des collisions) et le calcul du *Delta Time* (indépendance du mouvement par rapport au framerate). N'ayant pas un niveau mathématique avancé, j'ai activement utilisé des IA (LLMs) comme assistants de recherche pour comprendre et transposer ces concepts théoriques en classes orientées objet (POO) dans mon code Python.

## Travailler en mode projet 
La complexité algorithmique du projet (calcul de collisions croisées entre des centaines d'entités) a provoqué d'importantes chutes de performances. Pour résoudre ce problème, j'ai dû analyser mon code et planifier une phase d'optimisation majeure : j'ai implémenté le concept de *Spatial Partitioning* (découpage de la carte en sous-zones ou *chunks* de 80px), divisant drastiquement le nombre de calculs par cycle d'horloge et sauvant la fluidité de la simulation.