import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {ManageService} from "../../services/manage.service";
import {AppService} from "../../../common/services/app.service";

/**
 * Generated class for the LogisticsAddUpdate page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-logistics-add-update',
  templateUrl: 'logistics-add-update.html',
})
export class LogisticsAddUpdate {

  logistics: any = {};
  infostore: any = {};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public manageService: ManageService,
              public heyApp: AppService,) {

    this.infostore = navParams.data;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FactoryAddUpdate');
  }

  onSubmit() {

    this.logistics.infoDepartment = this.infostore;
    this.manageService.saveOrUpdateLogistics(this.logistics)
      .then(ret => {
        this.heyApp.utilityComp.presentToast("保存成功");
        this.navCtrl.pop();
      });
  }

}
