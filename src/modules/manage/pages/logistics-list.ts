import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LogisticsAddUpdate} from "./logistics-add-update";
import {AppService} from "../../common/services/app.service";
import {ManageService} from "../services/manage.service";

/**
 * Generated class for the LogisticsList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-logistics-list',
  templateUrl: 'logistics-list.html',
})
export class LogisticsList {

  logisticsList: any = [];
  logisticsListShow: any = [];
  infostore: any = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public heyApp: AppService,
              public manageService: ManageService) {

    this.infostore = navParams.data;
  }

  ionViewWillEnter() {

    let data = {
      infoDepartment :{id: this.infostore.id}
    };

    this.manageService.getLogisticsList(data)
      .then(ret => {
        this.logisticsList = ret;
        this.logisticsListShow = ret;
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

  gotoUpdatePage(logistics) {
    this.navCtrl.push(LogisticsAddUpdate, logistics);
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.logisticsListShow = this.logisticsList;

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.logisticsListShow = this.logisticsListShow.filter((item) => {
        return (item.departure.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
