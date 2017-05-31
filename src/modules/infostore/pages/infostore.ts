import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InfostoreDetailPage } from './infostore-detail';
import { InfostoreService} from '../services/infostore.service';

@Component({
  selector: 'page-infostore',
  templateUrl: 'infostore.html',
})
export class InfostorePage {

  infostoreList: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public infostoreService: InfostoreService) {

  }

  ionViewDidLoad() {
    this.infostoreService.getInfoDepartmentList()
      .then( ret => {
        this.infostoreList = ret;
      });
  }

  doRefresh(refresher) {

    this.infostoreService.getInfoDepartmentList()
      .then( ret => {
        this.infostoreList = ret;
        refresher.complete();
      });
  }

  gotoInfoStoreDetail(){
    this.navCtrl.push(InfostoreDetailPage);
  }

}
