import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AppService} from "../../common/services/app.service";
import {ManageService} from "../services/manage.service";

/**
 * Generated class for the ColaSalerPriceManage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-cola-saler-price-manage',
  templateUrl: 'cola-saler-price-manage.html',
})
export class ColaSalerPriceManage {

  factory: string = "";
  productType: string = "";
  factoryList: any = [];
  productTypeList: any = [];
  price: string = "";
  price2: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public heyApp: AppService,
    public manageService: ManageService) {

  }

  ionViewDidLoad() {
    let data: Object = {
      factoryType: 1,
      saler: {id: 1}
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
      price2: this.price2
    };

    this.manageService.saveOrUpdateProductPrice(data)
      .then(ret => {
        this.heyApp.utilityComp.presentToast("提交成功");
        this.factory = "";
        this.productType = "";
        this.price2 = "";
      });
  }
}
