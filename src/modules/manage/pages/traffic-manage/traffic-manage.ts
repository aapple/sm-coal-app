import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {TrafficAddUpdatePage} from "./traffic-add-update";
import {AppService} from "../../../common/services/app.service";
import {ManageService} from "../../services/manage.service";

/**
 * Generated class for the TrafficManage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-traffic-manage',
  templateUrl: 'traffic-manage.html',
})
export class TrafficManagePage {

  trafficList: any = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public heyApp: AppService,
              public manageService: ManageService) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad TrafficManage');
    this.manageService.getFactoryList({})
      .then(ret => {
        this.trafficList = ret.factoryList;
      });
  }

  gotoAddPage() {
    this.navCtrl.push(TrafficAddUpdatePage);
  }

  deleteTraffic(traffic) {
    this.manageService.deleteFactory(traffic)
      .then(ret => {
        this.heyApp.utilityComp.presentToast('删除成功');
        this.ionViewWillEnter();
      });
  }

  gotoUpdatePage(traffic) {
    this.navCtrl.push(TrafficAddUpdatePage, traffic);
  }

}
