import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ManageService } from '../../services/manage.service';
import {FactoryAddUpdate} from "../factory-manage/factory-add-update";
import {AppService} from "../../../common/services/app.service";
import {LifestoreAddUpdate} from "./lifestore-add-update";

/**
 * Generated class for the FactoryManage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-lifestore-manage',
  templateUrl: 'lifestore-manage.html',
})
export class LifestoreManage {

  lifestoreList: any = [];
  lifestoreListShow: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public heyApp: AppService,
              public manageService: ManageService) {
  }

  ionViewWillEnter() {
    this.manageService.getLifestoreList({})
      .then(ret => {
        this.lifestoreList = ret;
        this.lifestoreListShow = ret;
      });
  }

  deleteFactory(lifestore) {
    this.manageService.deleteLifestore(lifestore)
      .then(ret => {
        this.heyApp.utilityComp.presentToast('删除成功');
        this.ionViewWillEnter();
      });
  }

  gotoAddPage() {
    this.navCtrl.push(LifestoreAddUpdate);
  }

  gotoUpdatePage(lifestore) {
    this.navCtrl.push(LifestoreAddUpdate, lifestore);
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.lifestoreListShow = this.lifestoreList;

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.lifestoreListShow = this.lifestoreListShow.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
