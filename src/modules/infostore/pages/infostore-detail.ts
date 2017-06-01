import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {InfostoreService} from "../services/infostore.service";


@Component({
  selector: 'page-infostore-detail',
  templateUrl: 'infostore-detail.html',
})
export class InfostoreDetailPage {

  logisticsList: any = [];
  infostore: any = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public infostoreService: InfostoreService) {

    this.infostore = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoalPriceDetail');

    let data = {
      infoDepartment: {id : this.infostore.id}
    }

    this.infostoreService.getLogisticsList(data)
      .then( ret => {
        this.logisticsList = ret;
      });
  }

}
