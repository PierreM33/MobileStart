# Description de l'Application

Ce README fournit une description détaillée des fonctionnalités et des composants de l'application développée en React Native.

## Fonctionnalités Principales

1. Référence

    * Description : Il s'agit du starter Pack de l'application.
    * Contenu :
      - Nom de l'application utilisé sur les différents fichiers:
      >NameApp

2. WELCOME

    * Description : Page d'accueil de l'application.
    * Contenu :
      - Boutons : Login et Register.

3. LOGIN

    * Description : Page de connexion.
    * Contenu :
      - Système de connexion avec email et password et secondPassword.
      - API login_check.
      - Fonctionnalité de validation fictive de la connexion.
    

3. REGISTER

   * Description : Page de connexion.
   * Contenu :
      - Système de connexion avec email et password et secondPassword.
      - API login_check.
      - Fonctionnalité de validation fictive de la connexion.

3. DISCONNECT

   * Description : Bouton de déconnexion.
   * Contenu :
      - Bouton de déconnexion remove le token et renvoie sur la welcomeScreen.

4. SMS_CODE

    * Description : Page de saisie du code SMS.
    * Contenu :
      - Champ pour saisir le code à 6 chiffres.
      - Réception du code à 6 chiffres par SMS.
      - Bouton de re-envoie du code sans fonction.
      - Bouton de validation du code.

5. REDUX

    * Description : Gestionnaire d'état de l'application.
    * Contenu :
      - initialStateLogger avec les données utilisateur, le token et le refreshToken.


6. NAVIGATION

    * Description : Système de navigation.
    * Contenu :
      - Deux types de navigation : externe et interne.

7. BOTTOM_BAR

    * Description : Barre de navigation inférieure.
    * Contenu :
      - Utilisé pour la navigation interne de l'application.


8. COMPONENTS

    * Description : Composants réutilisables.
    * Contenu :
      - Bouton avec différentes configurations.
      - Champ de saisie avec différentes propriétés.
9. API

    * Description : API de connexion.
    * Contenu :
      - API de connexion fictive.
      - API de vérification de connexion fictive.


## Structure du Code
Le code est structuré selon les principes de React Native. Voici un aperçu de l'organisation des composants :

 1. App.js : Point d'entrée de l'application.
 2. Screens : Composants de vue.
 3. navigation : Interne et externe avec BottomBar.


## Installation
1. Pour exécuter cette application sur votre propre environnement, suivez ces étapes :
    - Clonez le dépôt.
    - Exécutez `expo run:android` dans le dossier parent.
