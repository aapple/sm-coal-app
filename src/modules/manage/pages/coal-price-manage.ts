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
  selector: 'page-coal-price-manage',
  templateUrl: 'coal-price-manage.html',
})
export class CoalPriceManagePage {

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
      factoryType: 1
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
      factoryId: this.factory,
      factoryType: 1,
      productTypeId: this.productType.split("_")[0],
      productTypeName: this.productType.split("_")[1],
      price: this.price,
      heatQuantity: this.heatQuantity
    };

    this.manageService.saveOrUpdateProductPrice(data)
      .then(ret => {
        this.heyApp.utilityComp.presentToast("提交成功");
      });
  }

}
