import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {InfostoreService} from "../services/infostore.service";


@Component({
  selector: 'page-infostore-detail',
  templateUrl: 'infostore-detail.html',
})
export class InfostoreDetailPage {

  infostore: any = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public infostoreService: InfostoreService) {

    this.infostore = navParams.data;
  }

  ionViewDidLoad() {

  }

  gotoBuy(){
    window.location.href = "tel:" + this.infostore.callNumber;
  }

}
