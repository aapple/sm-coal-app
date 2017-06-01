import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ManageService } from '../services/manage.service';
import {FactoryAddUpdate} from "./factory-add-update";
import {AppService} from "../../common/services/app.service";

/**
 * Generated class for the FactoryManage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-factory-manage',
  templateUrl: 'factory-manage.html',
})
export class FactoryManage {

  factoryList: any = [];
  factoryListShow: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public heyApp: AppService,
              public manageService: ManageService) {
  }

  ionViewWillEnter() {
    this.manageService.getFactoryList({})
      .then(ret => {
        this.factoryList = ret.factoryList;
        this.factoryListShow = ret.factoryList;
      });
  }

  deleteFactory(factory) {
    this.manageService.deleteFactory(factory)
      .then(ret => {
        this.heyApp.utilityComp.presentToast('删除成功');
        this.ionViewWillEnter();
      });
  }

  gotoAddPage() {
    this.navCtrl.push(FactoryAddUpdate);
  }

  gotoUpdatePage(factory) {
    this.navCtrl.push(FactoryAddUpdate, factory);
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.factoryListShow = this.factoryList;

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.factoryListShow = this.factoryListShow.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
