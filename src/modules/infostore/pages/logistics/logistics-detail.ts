import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {LogisticsListPage} from "./logistics-list";

/**
 * Generated class for the LogisticsDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-logistics-detail',
  templateUrl: 'logistics-detail.html',
})
export class LogisticsDetailPage {

  logistics: any = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.logistics = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogisticsDetail');
  }

  gotoBuy(){
    window.location.href = "tel:" + this.logistics.infoDepartment.callNumber;
  }

  gotoInfoStore(){
    this.navCtrl.push(LogisticsListPage, this.logistics.infoDepartment);
  }
}
