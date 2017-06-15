import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {InfostoreService} from "../services/infostore.service";
import {LogisticsDetailPage} from "./logistics-detail";

/**
 * Generated class for the Logistics page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-logistics',
  templateUrl: 'logistics.html',
})
export class LogisticsPage {

  departure: string="";
  destination: string="";

  logisticsList: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public infostoreService: InfostoreService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Logistics');

    this.infostoreService.getLogisticsList({})
      .then( ret => {
        this.logisticsList = ret;
      });
  }

  doRefresh(refresher) {

    this.infostoreService.getLogisticsList({})
      .then( ret => {
        this.logisticsList = ret;
        refresher.complete();
      });
  }

  goLogisticsDetail(logistics) {

    this.navCtrl.push(LogisticsDetailPage, logistics)
  }

  doQuery() {

    let data : any = {};
    if(this.departure){
      data.departure = this.departure;
    }
    if(this.destination){
      data.destination = this.destination;
    }

    this.infostoreService.getLogisticsList(data)
      .then( ret => {
        this.logisticsList = ret;
      });
  }

}
