import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-coal-price-detail',
  templateUrl: 'coal-price-detail.html',
})
export class CoalPriceDetailPage {

  productPrice: any = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.productPrice = navParams.data;
    if(this.productPrice.factory.factoryType == 2){
      this.productPrice.priceOwnerType = 1;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoalPriceDetail');
  }


  gotoBuy(){
    if(this.productPrice.priceOwnerType == 1){
      window.location.href = "tel:" + this.productPrice.factory.onwer.phoneNum;
    } else {
      window.location.href = "tel:" + this.productPrice.factory.saler.phoneNum;
    }
  }
}
