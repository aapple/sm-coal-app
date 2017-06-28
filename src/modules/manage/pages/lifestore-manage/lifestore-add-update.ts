import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {ManageService} from "../../services/manage.service";
import {AppService} from "../../../common/services/app.service";
import {AppGlobal} from "../../../../app/app.global";

/**
 * Generated class for the FactoryAddUpdate page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-lifestore-add-update',
  templateUrl: 'lifestore-add-update.html',
})
export class LifestoreAddUpdate {

  lifestore: any = {};
  areaList: any = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public manageService: ManageService,
              public heyApp: AppService,) {

    this.lifestore = navParams.data;
    this.areaList = AppGlobal.areaList;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FactoryAddUpdate');
  }

  onSubmit() {
    this.manageService.saveOrUpdateLifestore(this.lifestore)
      .then(ret => {
        this.heyApp.utilityComp.presentToast("保存成功");
        this.navCtrl.pop();
      });
  }

}
