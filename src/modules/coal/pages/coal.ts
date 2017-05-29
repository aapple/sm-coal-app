import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CoalPriceDetailPage } from './coal-price-detail';
import { CoalService} from '../services/coal.service';


@Component({
  selector: 'page-coal',
  templateUrl: 'coal.html',
})
export class CoalPage {

  productTypeList: any = [];
  productType: string;
  productPriceList: any = [];
  priceType: string = "coal";
  queryText: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public coalService: CoalService) {

  }

  ionViewDidLoad() {

    this.loadProductTypeList();
    //this.loadProductPriceList();
  }

  onProductTypeChange() {
    this.loadProductPriceList();
  }

  changePriceType() {

  }

  loadProductTypeList() {
    let data: Object = {
      factoryType: 1
    };

    this.coalService.getProductTypeList(data)
      .then(ret => {
        this.productTypeList = ret;
      });
  }

  loadProductPriceList() {

    let data: Object = {
      productType: {id: this.productType}
    };

    this.coalService.loadProductPriceList(data)
    .then(ret => {
      this.productPriceList = ret;
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

  goProductPriceDetail() {
    this.navCtrl.push(CoalPriceDetailPage)
  }

}
