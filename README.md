# Creation de page avec ionic 3+:

`ng g page login`

`rootPage:any = 'LoginPage';`


N'oubliez pas `templateUrl: 'app.html'` et non  `template`

# Implementation de certains fonctionnalites natives avec cordova:

* File upload en utilisant soit la galerie soit la camera.

# Deploiement pour acceder aux fonctionnalites natives:

* Prerequis: JDK 1.8

* run `ionic cordova run android` (voir documentation [ici](https://ionicframework.com/docs/intro/deploying/) et pour changer le path [ici](https://www.mkyong.com/java/how-to-set-java_home-on-windows-10/) )