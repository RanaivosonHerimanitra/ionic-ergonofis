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

## integration avec opencv sur node(windows):

* Telecharger puis installer [opencv2.4xx](https://sourceforge.net/projects/opencvlibrary/files/opencv-win/2.4.13/opencv-2.4.13.4-vc14.exe/download)

* Suivre les [instructions](http://peterbraden.github.io/node-opencv/) et installer  [VS Express 2013](https://github.com/EQEmu/Server/wiki/Visual-Studio-Express-2013-for-Windows-Desktop)

* Telecharger [Cmake](https://cmake.org/download/) et suivre les [instructions](https://perso.uclouvain.be/allan.barrea/opencv/cmake_config.html)

* Suivre les instructions de [node-gyp](https://github.com/nodejs/node-gyp) 
