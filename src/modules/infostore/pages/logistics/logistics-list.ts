import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {InfostoreService} from "../../services/infostore.service";
import {LogisticsDetailPage} from "./logistics-detail";
import {InfostoreDetailPage} from "../infostore/infostore-detail";

/**
 * Generated class for the Logistics page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-logistics-list',
  templateUrl: 'logistics-list.html',
})
export class LogisticsListPage {

  showCancelButton: boolean=true;
  cancelButtonText: string="搜索";
  queryText: string;
  showType: string = "logistics";

  logisticsList: any = [];
  infostore: any = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public infostoreService: InfostoreService) {

    this.infostore = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Logistics');

    let data = {
      infoDepartment: {id: this.infostore.id},
      state: 1
    }
    this.infostoreService.getLogisticsList(data)
      .then( ret => {
        this.logisticsList = ret;
      });

  }

  doRefresh(refresher) {

    let data = {
      infoDepartment: {id: this.infostore.id},
      state: 1
    }
    this.infostoreService.getLogisticsList(data)
      .then( ret => {
        this.logisticsList = ret;
        refresher.complete();
      });
  }

  goLogisticsDetail(logistics) {
    this.navCtrl.push(LogisticsDetailPage, logistics)
  }

  doQuery(ev) {

    if(!this.queryText){
      this.queryText = null;
    }
    let text = this.queryText;
    let me = this;
    setTimeout(function () {
      me.queryText = text;
    }, 100);


    let data = {
      destination: text,
      infoDepartment: {id: this.infostore.id},
      state: 1
    }

    this.infostoreService.getLogisticsList(data)
      .then( ret => {
        this.logisticsList = ret;
      });
  }

}
