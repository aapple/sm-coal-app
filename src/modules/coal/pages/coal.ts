import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CoalPriceDetailPage } from './coal-price-detail';
import { CoalService} from '../services/coal.service';


@Component({
  selector: 'page-coal',
  templateUrl: 'coal.html',
})
export class CoalPage {

  coalType: string = "mm";
  coalList: any = [];
  priceType: string = "coal";
  queryText: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public coalService: CoalService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoalPricePage');

    this.loadProdcutList();
  }

  onCoalTypeChange() {
    this.loadProdcutList();
  }

  changePriceType() {

  }

  loadProdcutList() {

    let data: Object = {
      productType: 1,
      productCode: this.coalType
    };

    this.coalService.getProductList(data)
    .then(ret => {
      this.coalList = ret;
    }, (data) => {

    });
  }

  doRefresh(refresher) {

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 4000);
  }

  doQuery(){
    console.log(this.queryText);
  }

  goCoalPriceDetail() {
    this.navCtrl.push(CoalPriceDetailPage)
  }

}
