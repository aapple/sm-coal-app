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
  priceOwnerType: string = "2";

  pageIndex: number = 0;
  pageNumber: number = 6;
  subPageNumber: number = 0;
  showSubPage: boolean = false;
  side1: number = 0;
  side2: number = 0;

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
      this.pageNumber = 6;
    } else {
      this.pageTitle = "兰炭价";
      this.pageNumber = 4;
    }
  }

  onSlideClick(side, isSub) {

    if(side.subList){
      this.subPageNumber = side.subList.length;
      this.productTypeList2 = side.subList;
      this.productType = side.subList[0].id;
      this.side1 = side.id;
      this.side2 = side.subList[0].id;
      this.showSubPage = true;
    } else if(isSub){
      this.productType = side.id;
      this.side2 = side.id;
    } else {
      this.productType = side.id;
      this.side1 = side.id;
      this.showSubPage = false;
    }

    let params = this.getQueryParams();
    this.loadProductPriceList(params);
  }

  ionViewDidLoad() {

    this.loadProductTypeList();
  }

  loadProductTypeList() {

    let data: any = {
      factoryType: this.factoryType
    };

    if(this.factoryType == 1+""){
      data.name = "tab";
    }

    this.coalService.getProductTypeList(data)
      .then(ret => {

        this.productTypeList = ret;
        this.productTypeList = ret;

        this.productType = this.productTypeList[0].id;
        this.side1 = this.productTypeList[0].id;
        let params = this.getQueryParams();

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
