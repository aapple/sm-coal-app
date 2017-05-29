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

  pageIndex: number = 0;
  pageNumber: number = 5;
  slides: any = [];

  selectedIndex: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public coalService: CoalService) {

  }

  onSlideClick(id) {
    this.productType = id;
    this.loadProductPriceList();
  }

  ionViewDidLoad() {

    this.loadProductTypeList();
    //this.loadProductPriceList();
  }

  onProductTypeChange() {

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

    this.loadProductPriceList();
    refresher.complete();
  }

  doQuery(){
    console.log(this.queryText);
  }

  goProductPriceDetail() {
    this.navCtrl.push(CoalPriceDetailPage)
  }

}
