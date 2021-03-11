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

Si les deux pages s'affichent correctement, vous pouvez configurer votre extension avec Twitch.

# Configuration avec Twitch
Dans un premier temps il faut
[se rendre sur Twitch developers](https://dev.twitch.tv/).

Connectez-vous simplement avec votre compte Twitch

![twitch main page](https://zupimages.net/up/21/10/xxgm.png)

En cliquant sur "Log in with Twitch" en haut à droite de l'écran

Une fois connecté, vous allez être redirigé sur cette même page mais en haut à droite, un bouton "Your console" est apparu.

Cliquez dessus, vous êtes redirigé vers votre console de développement.
Vous devriez avoir une interface qui ressemble plus ou moins à ceci


![dev interface](https://i.ibb.co/Y8TcvRt/1.png)




Dans la section "Extensions", cliquez sur le bouton "Créer une extension"

![focus ext button](https://i.ibb.co/5BdsSvs/2.png)


Vous pouvez désormais attribuer un nom avec votre extension.
Puis cliquez sur Continer...

Pour le moment, l'extension est développée sous forme de Panneau.
Cochez donc dans la section "Type d'extension", "Panneau".

![ext type](https://i.ibb.co/GRFz1YX/3.png)

Plus bas, vous avez la possibilité de renseigner des options facultatives pour tester l'application en Local.

Une fois que vous avez rempli cette page comme il vous convient, cliquez sur "Créer une version de l'extension" en bas de la page.

Vous arrivez sur la page de gestion de votre extension, plus précisément sur l'onglet "Status"

Sur cet onglet, [téléchargez le kit de développeur](https://developer-rig.twitchcdn.net/Twitch+Developer+Rig+Setup.exe) en cliquant sur ce même bouton.


Votre navigateur va probablement vous avertir que ce lien est suspect, mais vous pouvez continuer sans inquiétudes.

Avant de continuer sur notre onglet "Status", installez l'application "Twitch developer rig" et lancez la.

Identifiez-vous à nouveau avec vos identifiants Twitch en utilisant le bouton en haut et au centre de l'application.

Quand vous serez à nouveau redirigé sur cette même page, cliquez sur ce même bouton qui est désormais devenu "Create your First Project"

![create project](https://i.ibb.co/hgW0CKD/4.png)

Vous pouvez très facilement sélectionner votre projet crée auparavant sur la console de twitch.

Appuyez ensuite sur **"Next"**.

Sélectionnez le dossier principal du projet.

Et dans **"Add Code to tour Project"**, sélectionnez **"None - I'll use my own code"**.

Une fenêtre s'affiche pour vous confirmer que votre extension est créée.

Appuyez sur **"Get Started"**.

Désormais, il vous est demandé de renseigner plusieurs champs de texte.

Rendez-vous directement à la section **"How to run your Extension in the Developer Rig"**.

Dans le champ **"Host your front-end files"**, sélectionnez votre dossier principal, car les fichiez principaux en **.html** s'y situe.

Dans le champ juste dessous intitulé **"Front-end Host Command"**, entrez la commande ``yarn start``.

Votre extension sait désormais comment servir votre Front-end.


Rendez-vous désormais au champ **"Back-end Files Location"**, indiquez ici le dossier **"services"**.

Pour le champ **"Run your back-end service locally with the Developer Rig"**, entrez la commande ``node ./services/bridge.js``

Votre extension est désormais capable de lancer votre Back-end..


A gauche de votre écran, rendez-vous désormais dans l'onglet **"Extension Views"**.

Rendez-vous à nouveau sur votre console web de Twitch et sur l'onglet **"Status"**.

Descendez au plus bas de cette même page dans la section **"Prochaines étapes"**

![next steps](https://i.ibb.co/yPwmsns/5.png)

Cliquez sur **"Se rendre sur l'hébergement des éléments"**.

Dans le champ **"URI de test de base"**, remplacez "https://localhost:8080/" par "http://localhost:1234/".

Dans "Type d'extension", sélectionnez à nouveau "Panneau".

Dans le champ **"Chemin d’accès panneau spectateurs"**, entrez le nom du fichier html correspondant, c'est-à-dire, **"UserPanel.html"**.

Dans le champ **"Hauteur du panneau"**, définissez celle-ci à 400.

Pour le **"Chemin de configuration"**, précisez le fichier **"BroadCasterPanel.html"**

Faites de même pour le **"Chemin de configuration live"**...

Enregistrez ensuite les modifications.


Rendez-vous encore une fois sur l'onglet **"Status"**, puis à nouveau dans l'onglet **"Prochaines étapes"** et cette fois cliquez sur **"Voir sur twitch et installer"**.

Vous êtes redirigé sur la page d'ajout de votre extension, cliquez sur **"Installer"**, puis sur **"Configurer"**.

Pour le moment rien ne s'affiche et c'est normal, rendez-vous sur le **"Twitch developer rig"**

Rendez-vous dans l'onglet **"Project Details"** et cliquez en haut à droite sur **"Refresh Manifest"** pour que Twitch developer rig récupère les dernières modifications sur l'interface web.


Rendez-vous dans l'onglet **"Extension Views"**, puis sur **"Create New View"** et enfin sélectionnez **"Dashboard"** puis **"Save"**.

Cliquez sur les deux boutons **"Run Front End"** et **"Run Back End"** pour lancer votre extension.

Vous voyez normalement désormais l'interface de configuration, mais si vous regardez la console, celle-ci vous affiche une erreur.

Celle-ci est due au fait que la clé privée de votre extension n'a pas été renseignée et est donc "Undefined".


Pour la définir, rendez-vous dans l'interface web et par exemple, sur l'onglet **"Status"**, en haut à droite, cliquez sur le bouton **"Paramètres d'extension"**.


![private key](https://i.ibb.co/zxkMmr2/6.png)



Dans la section **"Configuration du client de l’extension"**, copiez la clé qui vous est donnée.

Puis dans le dossier principal du projet de l'extension créez un fichier .env, ajoutez une ligne ``TWITCH_KEY = YOURKEY``

Et à la place de "YOURKEY", insérez la clé que vous venez de copier.

Retournez sur le developer rig, sur l'onglet **"Extension Views"** et relancez le back-end avec le bouton associé, votre back-end à normalement démarré correctement.

Vous pouvez le confirmer si dans la console il apparaît **"Broadcaster user is logged"**

Dans **"Create New View"**, vous pouvez désormais rajouter une interface Viewer en cliquant sur **"Panel"**, puis **"Save"**.

Vous pouvez désormais tester l'extension depuis le développeur rig ou Twitch.