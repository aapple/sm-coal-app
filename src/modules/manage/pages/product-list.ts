import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ManageService} from "../services/manage.service";
import {CoalPriceManagePage} from "./coal-price-manage";

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public manageService: ManageService) {

    this.factoryType = navParams.data;

  }

  ionViewDidLoad() {
    this.loadProductPriceList();
  }

  loadProductPriceList() {

    let data: Object = {
      productType: {id: this.factoryType}
    };

    this.manageService.loadProductPriceList(data)
      .then(ret => {
        this.productPriceList = ret;
      }, (data) => {

      });
  }

  goProductPriceDetail(productPrice) {

    this.navCtrl.push(CoalPriceManagePage, productPrice)
  }

}
