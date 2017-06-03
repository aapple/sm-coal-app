import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppService } from '../../common/services/app.service';
import { ManageService } from '../services/manage.service';

/**
 * Generated class for the CoalPriceManage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-product-price-manage',
  templateUrl: 'product-price-manage.html',
})
export class ProductPriceManagePage {

  factory: string = "";
  productType: string = "";
  factoryList: any = [];
  productTypeList: any = [];
  price: string = "";
  coal_fareliang: string = "";
  coal_quanshuifen: string = "";
  coal_liufen: string = "";
  coal_huifafen: string = "";
  coal_huifen: string = "";
  coal_gudingtan: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public heyApp: AppService,
    public manageService: ManageService) {

  }

  ionViewDidLoad() {
    let data: Object = {
      factoryType: 1,
      onwer: {id: 1}
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
      coal_fareliang: this.coal_fareliang,
      coal_quanshuifen: this.coal_quanshuifen,
      coal_liufen: this.coal_liufen,
      coal_huifafen: this.coal_huifafen,
      coal_huifen: this.coal_huifen,
      coal_gudingtan: this.coal_gudingtan
    };

    this.manageService.saveOrUpdateProductPrice(data)
      .then(ret => {
        this.heyApp.utilityComp.presentToast("提交成功");
        this.factory = "";
        this.productType = "";
        this.price = "";
        this.coal_fareliang= "";
        this.coal_quanshuifen = "";
        this.coal_liufen = "";
        this.coal_huifafen = "";
        this.coal_huifen = "";
        this.coal_gudingtan = "";
      });
  }

}
