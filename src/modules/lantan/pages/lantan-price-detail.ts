import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-lantan-price-detail',
  templateUrl: 'lantan-price-detail.html',
})
export class LantanPriceDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoalPriceDetail');
  }

}
