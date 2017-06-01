import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppService } from '../../common/services/app.service';
import {LogisticsAddUpdate} from "./logistics-add-update";
import {ManageService} from "../services/manage.service";
import {LogisticsList} from "./logistics-list";

/**
 * Generated class for the CoalPriceManage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-logistics-manage',
  templateUrl: 'logistics-manage.html',
})
export class LogisticsManagePage {

  infostoreList: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public manageService: ManageService,
              public heyApp: AppService) {

  }

  ionViewDidLoad() {
    let data = {
      user :{id: this.heyApp.authService.userInfo.id}
    };
    this.manageService.getInfostoreList(data)
      .then(ret => {
        this.infostoreList = ret;
      });
  }

  gotoInfoStoreDetail(infostore){
    this.navCtrl.push(LogisticsList, infostore);
  }
}
