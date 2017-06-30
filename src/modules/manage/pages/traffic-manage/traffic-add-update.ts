import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AppService} from "../../../common/services/app.service";
import {ManageService} from "../../services/manage.service";

/**
 * Generated class for the TrafficAddUpdate page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-traffic-add-update',
  templateUrl: 'traffic-add-update.html',
})
export class TrafficAddUpdatePage {

  traffic: any = null;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public manageService: ManageService,
              public heyApp: AppService,) {

    this.traffic = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrafficAddUpdate');
  }

  onSubmit() {
    this.manageService.saveOrUpdateFactory(this.traffic)
      .then(ret => {
        this.heyApp.utilityComp.presentToast("保存成功");
        this.navCtrl.pop();
      });
  }

}
