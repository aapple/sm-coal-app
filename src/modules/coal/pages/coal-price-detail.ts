import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-coal-price-detail',
  templateUrl: 'coal-price-detail.html',
})
export class CoalPriceDetailPage {

  productPrice: any = null;
  priceType: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.productPrice = navParams.data;

    if(this.productPrice.priceOwnerType == 1){
      this.priceType = "两票价";
    } else {
      this.priceType = "一票价";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoalPriceDetail');
  }

  gotoBuy(){
    if(this.productPrice.priceOwnerType == 1){
      window.location.href = "tel:" + this.productPrice.factory.onwerCallNumber;
    } else {
      window.location.href = "tel:" + this.productPrice.factory.salerCallNumber;
    }
  }
}
