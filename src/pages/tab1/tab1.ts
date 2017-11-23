declare var cv:any;

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,
         ActionSheetController, ToastController, 
         Platform, LoadingController, Loading  } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { Input } from '@angular/core/src/metadata/directives';
import { DEFAULT_INTERPOLATION_CONFIG } from '@angular/compiler/src/ml_parser/interpolation_config';

declare var cordova;
/*
table a partir de laquelle l user va selectionner une photo depuis sa galerie
*/

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {
  
  lastImage: string ="/assets/imgs/logo.png";
  isHidden: boolean= true;
  /* injection de dependance de fonc native */
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public camera: Camera, 
             
              public transfer: Transfer, 
              public file: File, 
              public filePath: FilePath, 
              public actionSheetCtrl: ActionSheetController, 
              public toastCtrl: ToastController, 
              public platform: Platform, 
              public loadingCtrl: LoadingController) 
              {}
              
             
public presentActionSheet() {
  let actionSheet = this.actionSheetCtrl.create({
  title: 'Select Image Source',
  buttons: 
  [{
    text: 'Load from Library',
    handler: () => {
    this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
      
    }
  },
  {
    text: 'Use Camera',
    handler: () => {
      this.takePicture(this.camera.PictureSourceType.CAMERA);
    }
  },
  {
    text: 'Cancel',
    role: 'cancel'
  }]
  });
    actionSheet.present();
  }
  /*
  prend une image soit a partir de la camera , soit depuis la galerie
  */
  public takePicture(sourceType) {
    // Create options for the Camera Dialog
    let options = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: sourceType  
    }
   
    // Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {
      this.lastImage= 'data:image/jpeg;base64,' +imagePath;
     
    }, (err) => {
      this.presentToast('Error while selecting image.');
    });
  }
  
   openCVRead(event) : void {
  
    var idAttr = event.srcElement.attributes.id;
    let src = cv.imread(idAttr.nodeValue);
    console.log(src.size());
    //
    let dst = cv.Mat.zeros(src.cols, src.rows, cv.CV_8UC3);
   cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
    //cv.threshold(src, src, 120, 200, cv.THRESH_BINARY);
    let contours = new cv.MatVector();
    let hierarchy = new cv.Mat();
    // You can try more different parameters
    cv.findContours(src, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
    // draw contours with random Scalar
    for (let i = 0; i < contours.size(); ++i) {
        let color = new cv.Scalar(111, 246, 184) ;
        cv.drawContours(dst, contours, i, color, 1, cv.LINE_8, hierarchy, 100);
    }
  
   
    this.isHidden= false;
    cv.imshow('lastImageProcessed', dst);
    src.delete(); dst.delete(); contours.delete(); hierarchy.delete();
  
  }

 
private presentToast(text) {
  let toast = this.toastCtrl.create({
    message: text,
    duration: 3000,
    position: 'top'
  });
  toast.present();
}
 


  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
  }

}