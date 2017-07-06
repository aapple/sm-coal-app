import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ManageService } from '../../services/manage.service';
import {FactoryAddUpdate} from "./factory-add-update";
import {AppService} from "../../../common/services/app.service";
import {ProductListPage} from "./product-list";

/**
 * Generated class for the FactoryManage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-factory-list',
  templateUrl: 'factory-list.html',
})
export class FactoryListPage {

  factoryList: any = [];
  factoryType: string = "";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public heyApp: AppService,
              public manageService: ManageService) {

    this.factoryType = navParams.data;
  }

  ionViewDidLoad() {

    let data = {};

    if(this.factoryType == 1+''){
      data['onwer'] = {id: this.heyApp.authService.userInfo.id};
      data['factoryType'] = 1;
    } else if(this.factoryType == 2+''){
      data['onwer'] = {id: this.heyApp.authService.userInfo.id};
      data['factoryType'] = 2;
    } else if(this.factoryType == 3+''){
      data['saler'] = {id: this.heyApp.authService.userInfo.id};
      data['factoryType'] = 1;
    }
    this.manageService.getFactoryList(data)
      .then(ret => {
        this.factoryList = ret.factoryList;
      });
  }

  gotoProductPage(factory) {

    factory.manageType = this.factoryType;
    this.navCtrl.push(ProductListPage, factory);
  }

}
