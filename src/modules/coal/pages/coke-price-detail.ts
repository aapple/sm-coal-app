import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-coke-price-detail',
  templateUrl: 'coke-price-detail.html',
})
export class CokePriceDetailPage {

  productPrice: any = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.productPrice = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoalPriceDetail');
  }

}
