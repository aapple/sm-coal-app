import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ManageService} from "../services/manage.service";
import {AppService} from "../../common/services/app.service";

/**
 * Generated class for the InfostoreAddUpdate page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-infostore-add-update',
  templateUrl: 'infostore-add-update.html',
})
export class InfostoreAddUpdate {

  infostore: any = {};
  userList: any = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public manageService: ManageService,
              public heyApp: AppService,) {

    this.infostore = navParams.data;
    if(this.infostore && !this.infostore.user){
      this.infostore.user = {};
    }
  }

  ionViewDidLoad() {
    this.loadUserList();
    console.log('ionViewDidLoad FactoryAddUpdate');
  }

  onSubmit() {
    this.manageService.saveOrUpdateInfostore(this.infostore)
      .then(ret => {
        this.heyApp.utilityComp.presentToast("保存成功");
        this.navCtrl.pop();
      });
  }


  loadUserList() {
    this.manageService.getUserList()
      .then(ret => {
        this.userList = ret;
      });
  }
}
