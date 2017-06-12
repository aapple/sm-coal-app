import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CoalPriceDetailPage } from './coal-price-detail';
import { CoalService} from '../services/coal.service';
import {CokePriceDetailPage} from "./coke-price-detail";

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
  pageTitle: string = "";

  pageIndex: number = 0;
  pageNumber: number = 5;
  slides: any = [];

  selectedIndex: number = 0;

  showCancelButton: boolean=true;
  cancelButtonText: string="搜索";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public coalService: CoalService) {

    this.factoryType = navParams.data;

    if(this.factoryType == 1+''){
      this.pageTitle = "煤价";
    } else {
      this.pageTitle = "兰炭价";
    }
  }

  onSlideClick(id) {
    this.productType = id;
    this.loadProductPriceList();
  }

  ionViewDidLoad() {

    this.loadProductTypeList();
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

  doQuery(ev){

    if(!this.queryText){
      this.queryText = null;
    }
    let text = this.queryText;
    let me = this;
    setTimeout(function () {
      me.queryText = text;
    }, 100);

    let data: Object = {
      productType: {id: this.productType},
      factory:{name: text}
    };

    this.coalService.loadProductPriceList(data)
      .then(ret => {
        this.productPriceList = ret;
      }, (data) => {

      });

  }

  goProductPriceDetail(productPrice) {

    if(productPrice.factory.factoryType == 1){
      this.navCtrl.push(CoalPriceDetailPage, productPrice)
    } else {
      this.navCtrl.push(CoalPriceDetailPage, productPrice)
      //this.navCtrl.push(CokePriceDetailPage, productPrice)
    }
  }

}
