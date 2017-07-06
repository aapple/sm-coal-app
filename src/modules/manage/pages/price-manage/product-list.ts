import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {ManageService} from "../../services/manage.service";
import {CoalPriceManagePage} from "./coal-price-manage";
import {AppService} from "../../../common/services/app.service";

/**
 * Generated class for the ProductList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {

  factoryType: string = "";
  productPriceList: any = [];
  factory: any = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public heyApp: AppService,
    public manageService: ManageService) {

    this.factory = navParams.data;
    this.factoryType = navParams.data.manageType;

  }

  ionViewWillEnter() {

    let data = {
      factory : this.factory
    };
    if(this.factory.manageType == 1+''){
      data['priceOwnerType'] = 1;
    } else if(this.factory.manageType == 3+''){
      data['priceOwnerType'] = 2;
    }
    this.loadProductPriceList(data);
  }

  loadProductPriceList(data) {

    this.manageService.loadProductPriceList(data)
      .then(ret => {
        this.productPriceList = ret;
      }, (data) => {

      });
  }

  goProductPriceDetail(productPrice) {

    if(!productPrice){
      productPrice = {
        factory: this.factory,
        currentProductList: this.productPriceList,
        productType: {}
      }

      if(this.factoryType == 1+'' || this.factoryType == 2+''){
        productPrice['priceOwnerType'] = 1;
      } else if(this.factoryType == 3+''){
        productPrice['priceOwnerType'] = 2;
      }
    }

    this.navCtrl.push(CoalPriceManagePage, productPrice)
  }

}
