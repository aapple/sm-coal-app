import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CoalPriceDetailPage } from './coal-price-detail';
import { CoalService} from '../services/coal.service';

@Component({
  selector: 'page-coal',
  templateUrl: 'coal.html',

})
export class CoalPage {

  factoryType: string = "";
  productTypeList: any = [];
  productType: string;
  productPriceList: any = [];
  priceType: string = "coal";
  queryText: string;

  pageIndex: number = 0;
  pageNumber: number = 5;
  slides: any = [];

  selectedIndex: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public coalService: CoalService) {

    this.factoryType = navParams.data;
  }

  onSlideClick(id) {
    this.productType = id;
    this.loadProductPriceList();
  }

  ionViewDidLoad() {

    this.loadProductTypeList();
  }

  onProductTypeChange() {

  }

  changePriceType() {

  }

  loadProductTypeList() {
    let data: Object = {
      factoryType: this.factoryType
    };

    this.coalService.getProductTypeList(data)
      .then(ret => {
        this.productTypeList = ret;

        this.productType = this.productTypeList[0].id;
        this.loadProductPriceList();
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

    this.loadProductPriceList();
    refresher.complete();
  }

  doQuery(){
    console.log(this.queryText);
  }

  goProductPriceDetail(productPrice) {
    this.navCtrl.push(CoalPriceDetailPage, productPrice)
  }

}
