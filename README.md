# Comment fonctionne le projet ?

Le projet est divisé en 3 parties distinctes

* La page viewer (UserPanel.html)

* La page Streamer (BroadCasterPanel.html)

* Le serveur


## **Installer les dépendances**

Dans le dossier du projet, exécuter la commande suivante dans un terminal.

`yarn`

[Installer yarn](https://classic.yarnpkg.com/en/docs/install)

## **Vérifier que l'application démarre correctement**

Dans un premier temps, nous allons tester que tout démarre correctement, pour le moment l'application ne sera pas connectée à Twitch et certaines fonctionnalités ne seront pas opérationnelles.

Exécuter les commandes:

`yarn start`

puis, dans une autre console en vous rendant dans le dossier "services":

`yarn services`

La première commande démarre le côté front de l'application et la seconde le serveur.

Si les deux commandes fonctionnent, vous devriez pouvoir le voir sur vos consoles et en vous rendant sur l'adresse indiquée dans l'une d'elles, une erreur devrait apparaitre à l'écran.

L'adresse qui apparait dans votre console est normalement 

`http://localhost:1234`

Si vous souhaitez afficher la page "viewer", modifiez votre lien ainsi:

`http://localhost:1234/UserPanel.html`

Et pour la page "streamer"

`http://localhost:1234/BroadCasterPanel.html`.

Si les deux pages s'affichent correctement, vous pouvez configurer votre extension avec Twitch en suivant la documentation suivante.

https://dev.twitch.tv/docs/extensions
