import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppService } from '../../common/services/app.service';

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

  bure: string = "";
  coalType: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public heyApp: AppService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoalPriceManage');
  }


  onBureChange() {

  }

  onCoalTypeChange() {

  }

  onsubmit() {
    this.heyApp.utilityComp.presentToast("提交成功");
  }

}
