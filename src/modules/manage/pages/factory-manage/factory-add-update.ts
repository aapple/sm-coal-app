import { Component } from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {ManageService} from "../../services/manage.service";
import {AppService} from "../../../common/services/app.service";
import {UserSelectPage} from "../user-select/user-select";

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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public manageService: ManageService,
              public modalCtrl: ModalController,
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
    console.log('ionViewDidLoad FactoryAddUpdate');
  }

  onUserSelect(name){
    let modal = this.modalCtrl.create(UserSelectPage)
    modal.present();
    modal.onDidDismiss(data=>{
      if(data){
        this.factory[name] = data;
      }
    });
  }

  onSubmit() {

    if(!this.factory.name){
      this.heyApp.utilityComp.presentToast("厂矿名称必须输入！");
      return;
    }

    if(!this.factory.factoryDescribe){
      this.heyApp.utilityComp.presentToast("描述必须输入！");
      return;
    }

    if(!this.factory.onwerCallPerson && this.factory.factoryType == 1){
      this.heyApp.utilityComp.presentToast("联系人姓名必须输入！");
      return;
    }

    if(!this.factory.onwerCallNumber && this.factory.factoryType == 1){
      this.heyApp.utilityComp.presentToast("联系电话必须输入！");
      return;
    }

    if(!this.factory.salerCallPerson){
      this.heyApp.utilityComp.presentToast("业务专员姓名必须输入！");
      return;
    }

    if(!this.factory.salerCallNumber){
      this.heyApp.utilityComp.presentToast("业务专员电话必须输入！");
      return;
    }

    if(!this.factory.factoryType){
      this.heyApp.utilityComp.presentToast("种类必须选择！");
      return;
    }

    this.manageService.saveOrUpdateFactory(this.factory)
      .then(ret => {
        this.heyApp.utilityComp.presentToast("保存成功");
        this.navCtrl.pop();
      });
  }

  uploadImg(event) {
    this.heyApp.utilityComp.presentLoading();
    let files = event.srcElement.files;

    this.heyApp.fileUploadService.upload(this.heyApp.fileUploadService.imageUploadAPI, files)
      .then(data => {
        this.factory.factoryImage = data;
        this.heyApp.utilityComp.dismissLoading();
      }, () => {
        this.heyApp.utilityComp.dismissLoading();
      });
  }


}
