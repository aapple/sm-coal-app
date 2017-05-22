import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-infostore-detail',
  templateUrl: 'infostore-detail.html',
})
export class InfostoreDetailPage {

  logisticsList: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.logisticsList = [1,2,3,4];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoalPriceDetail');
  }

}
