import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {ManageService} from "../../services/manage.service";
import {AppService} from "../../../common/services/app.service";
import {AppGlobal} from "../../../../app/app.global";

/**
 * Generated class for the FactoryAddUpdate page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-lifestore-add-update',
  templateUrl: 'lifestore-add-update.html',
})
export class LifestoreAddUpdate {

  lifestore: any = {};
  areaList: any = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public manageService: ManageService,
              public heyApp: AppService,) {

    this.lifestore = navParams.data;
    this.areaList = AppGlobal.areaList;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FactoryAddUpdate');
  }

  onSubmit() {

    if(!this.lifestore.serviceType){
      this.heyApp.utilityComp.presentToast("服务类型必须选择！");
      return;
    }

    if(!this.lifestore.name){
      this.heyApp.utilityComp.presentToast("名称必须输入！");
      return;
    }

    if(!this.lifestore.introduction){
      this.heyApp.utilityComp.presentToast("简介必须输入！");
      return;
    }

    if(!this.lifestore.callPerson){
      this.heyApp.utilityComp.presentToast("联系人姓名输入！");
      return;
    }

    if(!this.lifestore.address){
      this.heyApp.utilityComp.presentToast("联系电话必须输入！");
      return;
    }

    if(!this.lifestore.callPerson){
      this.heyApp.utilityComp.presentToast("详细地址输入！");
      return;
    }

    this.manageService.saveOrUpdateLifestore(this.lifestore)
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
        this.lifestore.photoPath = data;
        this.heyApp.utilityComp.dismissLoading();
      }, () => {
        this.heyApp.utilityComp.dismissLoading();
      });
  }

}
