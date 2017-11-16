import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,
         ActionSheetController, ToastController, 
         Platform, LoadingController, Loading  } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

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
  private imageSrc: string;
  public base64Image: string;
  lastImage=null;
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
              private openGallery (): void {
                let cameraOptions = {
                  sourceType:  this.camera.PictureSourceType.PHOTOLIBRARY,
                  destinationType:  this.camera.DestinationType.FILE_URI,      
                  quality: 100,
                  targetWidth: 1000,
                  targetHeight: 1000,
                  encodingType:  this.camera.EncodingType.JPEG,      
                  correctOrientation: true
                }
              
                this.camera.getPicture(cameraOptions)
                  .then(file_uri => this.imageSrc = file_uri, 
                  err => console.log(err));   
              }
              public takePicture2(){
                this.camera.getPicture({
                    destinationType: this.camera.DestinationType.DATA_URL,
                    targetWidth: 100,
                    targetHeight: 100
                }).then((imageData) => {
                  // imageData is a base64 encoded string
                    this.base64Image = "data:image/jpeg;base64," + imageData;
                }, (err) => {
                    console.log(err);
                });
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
  public takePicture(sourceType) {
    // Create options for the Camera Dialog
    let options = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY      
    }
   
    // Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {
      this.lastImage= 'data:image/jpeg;base64,' +imagePath;
     
    }, (err) => {
      this.presentToast('Error while selecting image.');
    });
  }
  // Create a new name for the image
private createFileName() {
  var d = new Date(),
  n = d.getTime(),
  newFileName =  n + ".jpg";
  return newFileName;
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
