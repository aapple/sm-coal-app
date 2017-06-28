import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { InfostoreDetailPage } from './infostore-detail';
import { InfostoreService} from '../../services/infostore.service';

@Component({
  selector: 'page-infostore',
  templateUrl: 'infostore.html',
})
export class InfostorePage {

  infostoreList: any = [];

  showCancelButton: boolean=true;
  cancelButtonText: string="搜索";
  queryText: string="";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public infostoreService: InfostoreService) {

  }

  ionViewDidLoad() {
    this.infostoreService.getInfoDepartmentList({})
      .then( ret => {
        this.infostoreList = ret;
      });
  }

  doRefresh(refresher) {

    this.infostoreService.getInfoDepartmentList({})
      .then( ret => {
        this.infostoreList = ret;
        refresher.complete();
      });
  }

  gotoInfoStoreDetail(infostore){
    this.navCtrl.push(InfostoreDetailPage, infostore);
  }

  doQuery(){

    if(!this.queryText){
      this.queryText = null;
    }
    let text = this.queryText;
    let me = this;
    setTimeout(function () {
      me.queryText = text;
    }, 100);

    let data: Object = {
      title: text,
    };

    this.infostoreService.getInfoDepartmentList(data)
      .then( ret => {
        this.infostoreList = ret;
      });

  }

}
