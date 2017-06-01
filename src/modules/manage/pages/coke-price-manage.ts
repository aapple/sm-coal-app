import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ManageService} from "../services/manage.service";
import {AppService} from "../../common/services/app.service";

/**
 * Generated class for the CokePriceManage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-coke-price-manage',
  templateUrl: 'coke-price-manage.html',
})
export class CokePriceManage {

  factory: string = "";
  productType: string = "";
  factoryList: any = [];
  productTypeList: any = [];
  price: string = "";
  heatQuantity: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public heyApp: AppService,
    public manageService: ManageService) {

  }

  ionViewDidLoad() {
    let data: Object = {
      factoryType: 2
    };

    this.manageService.getFactoryList(data)
      .then(ret => {
        this.factoryList = ret.factoryList;
        this.productTypeList = ret.productTypeList;
      });
  }

  onFactoryChange() {

  }

  onProductTypeChange() {

  }

  onSubmit() {
    let data: Object = {
      factory: {id: this.factory},
      productType: {id: this.productType},
      price: this.price,
      heatQuantity: this.heatQuantity
    };

    this.manageService.saveOrUpdateProductPrice(data)
      .then(ret => {
        this.heyApp.utilityComp.presentToast("提交成功");
        this.factory = "";
        this.productType = "";
        this.price = "";
        this.heatQuantity = "";
      });
  }

}
