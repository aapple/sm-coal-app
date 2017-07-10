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

  productPriceList: any = [];
  queryText: string;
  pageTitle: string = "";
  priceOwnerType: string = "1";

  pageIndex: number = 0;
  pageNumber: number = 6;
  slides: any = [];

  selectedIndex: number = 0;

  showCancelButton: boolean=true;
  cancelButtonText: string="搜索";

  productType: number = -1;
  coalWashing: number = -1;
  graded: number = -1;

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
    let params = this.getQueryParams();
    this.loadProductPriceList(params);
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
        // if(this.factoryType == 1+''){
        //   this.productTypeList = ret.slice(0, 5);
        //   this.productTypeList2 = ret.slice(5);
        // } else {
        //   this.productTypeList = ret;
        // }


        //this.productType = this.productTypeList[0].id;
        let params = this.getQueryParams();

        if(this.factoryType == 2+''){
          this.productType = this.productTypeList[0].id;
          params.productType = {id: this.productType};
        }
        this.loadProductPriceList(params);
      });
  }

  onParamsChange(e){

    let params = this.getQueryParams();
    this.loadProductPriceList(params);
  }

  loadProductPriceList(params) {

    this.coalService.loadProductPriceList(params)
    .then(ret => {
      this.productPriceList = ret;
    }, (data) => {

    });
  }

  doRefresh(refresher) {

    let params = this.getQueryParams();
    this.coalService.loadProductPriceList(params)
      .then(ret => {
        this.productPriceList = ret;
        refresher.complete();
      }, (data) => {

      });

  }

  onSegmentClick(){

    let params = this.getQueryParams();
    this.loadProductPriceList(params);
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

    let params = this.getQueryParams();
    params.factory = {name: text};

    this.loadProductPriceList(params);

  }

  getQueryParams(){

    let params : any = {
      productType: this.productType != -1?{id: this.productType}: null,
      coalWashing: this.coalWashing != -1?this.coalWashing: null,
      graded: this.graded != -1?this.graded: null,
      factory: {factoryType: this.factoryType}
    };

    if(this.factoryType == 1 + ""){
      params.priceOwnerType = this.priceOwnerType;
    }

    return params;

  }

  goProductPriceDetail(productPrice) {

    this.navCtrl.push(CoalPriceDetailPage, productPrice)
  }

}
