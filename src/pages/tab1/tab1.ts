import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,
         ActionSheetController, ToastController, 
         Platform, LoadingController, Loading  } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import {  Camera } from '@ionic-native/camera';



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
 
  lastImage: string =null;
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
              {
                
              }
              
             
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
    /*
    this.camera.getPicture(options).then((imagePath) => {
      this.lastImage= 'data:image/jpeg;base64,' +imagePath;
      cv.readImage(imagePath, function(err, im){
        if (err) {
          return console.error(err);
        } else {
          console.log( "ok ca marche")
        }
        
      })
     
    }, (err) => {
      this.presentToast('Error while selecting image.');
    });
    */
   
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
    //console.dir(tracking);
  
  }

}
