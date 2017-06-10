import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-coal-price-detail',
  templateUrl: 'coal-price-detail.html',
})
export class CoalPriceDetailPage {

  productPrice: any = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.productPrice = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoalPriceDetail');
  }


  gotoBuy(){
    window.location.href = "tel:" + this.productPrice.factory.saler.phoneNum;
  }
}
