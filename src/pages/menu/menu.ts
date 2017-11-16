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
    {title:'Tab 1' ,  pageName: 'TabsPage',tabComponent:'Tab1Page',index: 0, icon:'home'},
    {title:'Tab 2' ,  pageName: 'TabsPage',tabComponent:'Tab2Page',index: 1, icon:'contacts'}
  ]


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  // methodes appellees dans le template menu.html:
  openPage (p: PageInterface): void {
    let params = { };
    if (p.index) { 
      params = { tabIndex : p.index};

    }
    if (this.nav.getActiveChildNav() && p.index !==undefined){ 
      this.nav.getActiveChildNav().select(p.index);
    } else  { 
      this.nav.setRoot(p.pageName,params);
    };
  }
  isActive (p: PageInterface): string {
    let childnav = this.nav.getActiveChildNav();
    if (childnav) 
    {
      if (childnav.getSelected() && childnav.getSelected().root === p.tabComponent){
        return 'primary';
       }
       return ;
    }
    if (this.nav.getActive() && this.nav.getActive().name === p.pageName){
      return 'primary';
     }
   
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
