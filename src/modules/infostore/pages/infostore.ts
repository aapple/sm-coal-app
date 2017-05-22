import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InfostoreDetailPage } from './infostore-detail'

@Component({
  selector: 'page-infostore',
  templateUrl: 'infostore.html',
})
export class InfostorePage {

  infostoreList: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.infostoreList = [1, 1, 1,1,1,1,1,1,1];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Infostore');
  }

  gotoInfoStoreDetail(){
    this.navCtrl.push(InfostoreDetailPage);
  }

}
