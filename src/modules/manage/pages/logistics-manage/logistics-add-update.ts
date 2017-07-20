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
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public manageService: ManageService,
              public heyApp: AppService,) {

    this.logistics = navParams.data;

    if(this.logistics.state == undefined){
      this.logistics.state = 1;
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FactoryAddUpdate');
  }

  onSubmit() {

    if(!this.logistics.departure){
      this.heyApp.utilityComp.presentToast("出发地必须输入！");
      return;
    }

    if(!this.logistics.destination){
      this.heyApp.utilityComp.presentToast("目的地必须输入！");
      return;
    }

    if(!this.logistics.productType){
      this.heyApp.utilityComp.presentToast("货物类型必须输入！");
      return;
    }

    if(!this.logistics.totalQty){
      this.heyApp.utilityComp.presentToast("用车数量必须输入！");
      return;
    }

    if(!this.logistics.freightCharge){
      this.heyApp.utilityComp.presentToast("运费必须输入！");
      return;
    }

    this.manageService.saveOrUpdateLogistics(this.logistics)
      .then(ret => {
        this.heyApp.utilityComp.presentToast("保存成功");
        this.navCtrl.pop();
      });
  }

  onDelete() {

    this.logistics.state = 0;
    this.manageService.saveOrUpdateLogistics(this.logistics)
      .then(ret => {
        this.heyApp.utilityComp.presentToast("删除成功");
        this.navCtrl.pop();
      });
  }

}
