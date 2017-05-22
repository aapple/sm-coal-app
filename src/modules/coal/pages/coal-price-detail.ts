import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-coal-price-detail',
  templateUrl: 'coal-price-detail.html',
})
export class CoalPriceDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() { 
    console.log('ionViewDidLoad CoalPriceDetail');
  }

}
