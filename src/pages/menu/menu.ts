import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

import { PageInterface } from '../PageInterface';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage= 'TabsPage';
  @ViewChild(Nav) nav: Nav ;
  pages: PageInterface[]= [
    {title:'Title 1' ,  pageName: 'TabsPage',tabComponent:'Tab1Page',index: 0, icon:'home'},
    {title:'Title 2' ,  pageName: 'TabsPage',tabComponent:'Tab2Page',index: 1, icon:'contacts'}
  ]


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  // methodes appellees dans le template menu.html:
  openPage (p: PageInterface){
  }
  isActive (p: PageInterface){
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
