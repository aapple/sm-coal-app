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
  coke_hantan: string = "";
  coke_hanliu: string = "";
  coke_shuifen: string = "";
  coke_huifafen: string = "";
  coke_huifen: string = "";

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
      coke_hantan: this.coke_hantan,
      coke_hanliu: this.coke_hanliu,
      coke_shuifen: this.coke_shuifen,
      coke_huifafen: this.coke_huifafen,
      coke_huifen: this.coke_huifen
    };

    this.manageService.saveOrUpdateProductPrice(data)
      .then(ret => {
        this.heyApp.utilityComp.presentToast("提交成功");
        this.factory = "";
        this.productType = "";
        this.price = "";
        this.coke_hantan = "";
        this.coke_hanliu = "";
        this.coke_shuifen = "";
        this.coke_huifafen = "";
        this.coke_huifen = "";
      });
  }

}
