## Creation de pages avec ionic 3+:

`> ng g page login`

la page de demarrage sera celle specifiee ici:
`rootPage:any = 'LoginPage';`


N'oubliez pas `templateUrl: 'app.html'` et non  `template`

## Implementation de certaines fonctionnalites natives avec cordova:

* File upload en utilisant soit la galerie soit la camera.

## Deploiement pour acceder aux fonctionnalites natives (cable connecte au telephone):

* Prerequis necessaire: JDK 1.8 (pas plus)

* run `ionic cordova run android` (voir documentation [ici](https://ionicframework.com/docs/intro/deploying/) et pour changer le path [ici](https://www.mkyong.com/java/how-to-set-java_home-on-windows-10/) )

## integration d'opencv sur ionic:

* Installer [Emscripten](https://github.com/kripken/emscripten) , conseillé avec un OS linux

* cloner le dernier [opencv](https://github.com/opencv/opencv) puis suivre les instructions de compilation en js [ici](https://docs.opencv.org/3.3.1/d0/d84/tutorial_js_usage.html).