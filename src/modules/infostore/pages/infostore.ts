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
  infostoreListShow: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public infostoreService: InfostoreService) {

  }

  ionViewDidLoad() {
    this.infostoreService.getInfoDepartmentList()
      .then( ret => {
        this.infostoreList = ret;
        this.infostoreListShow = ret;
      });
  }

  doRefresh(refresher) {

    this.infostoreService.getInfoDepartmentList()
      .then( ret => {
        this.infostoreList = ret;
        this.infostoreListShow = ret;
        refresher.complete();
      });
  }

  gotoInfoStoreDetail(infostore){
    this.navCtrl.push(InfostoreDetailPage, infostore);
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.infostoreListShow = this.infostoreList;

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.infostoreListShow = this.infostoreListShow.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
