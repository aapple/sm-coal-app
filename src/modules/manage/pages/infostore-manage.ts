import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {InfostoreAddUpdate} from "./infostore-add-update";
import {AppService} from "../../common/services/app.service";
import {ManageService} from "../services/manage.service";

/**
 * Generated class for the InfostoreManage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-infostore-manage',
  templateUrl: 'infostore-manage.html',
})
export class InfostoreManage {

  infostoreList: any = [];
  infostoreListShow: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public heyApp: AppService,
              public manageService: ManageService) {
  }

  ionViewWillEnter() {
    this.manageService.getInfostoreList({})
      .then(ret => {
        this.infostoreList = ret;
        this.infostoreListShow = ret;
      });
  }

    deleteInfostore(infostore) {
    this.manageService.deleteInfostore(infostore)
      .then(ret => {
        this.heyApp.utilityComp.presentToast('删除成功');
        this.ionViewWillEnter();
      });
  }

  gotoAddPage() {
    this.navCtrl.push(InfostoreAddUpdate);
  }

  gotoUpdatePage(infostore) {
    this.navCtrl.push(InfostoreAddUpdate, infostore);
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
