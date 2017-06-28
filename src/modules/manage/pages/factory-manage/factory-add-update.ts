import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {ManageService} from "../../services/manage.service";
import {AppService} from "../../../common/services/app.service";

/**
 * Generated class for the FactoryAddUpdate page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-factory-add-update',
  templateUrl: 'factory-add-update.html',
})
export class FactoryAddUpdate {

  factory: any = {};
  userList: any = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public manageService: ManageService,
              public heyApp: AppService,) {

    this.factory = navParams.data;
    if(this.factory && !this.factory.onwer){
      this.factory.onwer = {};
    }

    if(this.factory && !this.factory.saler){
      this.factory.saler = {};
    }
  }

  ionViewDidLoad() {
    this.loadUserList();
    console.log('ionViewDidLoad FactoryAddUpdate');
  }

  onSubmit() {
    this.manageService.saveOrUpdateFactory(this.factory)
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
