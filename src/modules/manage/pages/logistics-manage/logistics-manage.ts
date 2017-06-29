import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AppService } from '../../../common/services/app.service';
import {LogisticsAddUpdate} from "./logistics-add-update";
import {ManageService} from "../../services/manage.service";
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

  logisticsList: any = [];
  infostore: any = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public manageService: ManageService,
              public heyApp: AppService) {

  }

  ionViewWillEnter() {

    let data = {
      user :{id: this.heyApp.authService.userInfo.id}
    };
    this.manageService.getInfostoreList(data)
    .then(ret => {

      let data = {
        infoDepartment : ret[0]
      };

      this.manageService.getLogisticsList(data)
        .then(ret => {
          this.logisticsList = ret;
        });
    });

  }

  deleteLogistics(logistics) {
    this.manageService.deleteLogistics(logistics)
      .then(ret => {
        this.heyApp.utilityComp.presentToast('删除成功');
        this.ionViewWillEnter();
      });
  }

  gotoAddPage() {
    this.navCtrl.push(LogisticsAddUpdate, this.infostore);
  }

  goLogisticsDetail(logistics) {
    this.navCtrl.push(LogisticsAddUpdate, logistics);
  }
}
