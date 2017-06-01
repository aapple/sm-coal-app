import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AppService} from "../../common/services/app.service";
import {ManageService} from "../services/manage.service";

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
  infostoreList: any = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public manageService: ManageService,
              public heyApp: AppService,) {

    this.logistics = navParams.data;
    if(this.logistics && !this.logistics.infoDepartment){
      this.logistics.infoDepartment = {};
    }
  }

  ionViewDidLoad() {
    this.loadInfostoreList();
    console.log('ionViewDidLoad FactoryAddUpdate');
  }

  onSubmit() {
    this.manageService.saveOrUpdateLogistics(this.logistics)
      .then(ret => {
        this.heyApp.utilityComp.presentToast("保存成功");
        this.navCtrl.pop();
      });
  }


  loadInfostoreList() {

    let data = {
      user :{id: this.heyApp.authService.userInfo.id}
    };
    this.manageService.getInfostoreList(data)
      .then(ret => {
        this.infostoreList = ret;
      });
  }

}
