import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

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
  productTypeList2: any = [];
  productType: string;
  productPriceList: any = [];
  queryText: string;
  pageTitle: string = "";
  priceType: string = "coal";

  pageIndex: number = 0;
  pageNumber: number = 6;
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
      this.pageNumber = 5;
    } else {
      this.pageTitle = "兰炭价";
      this.pageNumber = 6;
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

        if(this.factoryType == 1+''){
          this.productTypeList = ret.slice(0, 5);
          this.productTypeList2 = ret.slice(5);
        } else {
          this.productTypeList = ret;
        }


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

    let data: Object = {
      productType: {id: this.productType}
    };

    this.coalService.loadProductPriceList(data)
      .then(ret => {
        this.productPriceList = ret;
        refresher.complete();
      }, (data) => {

      });

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
