import { Component } from '@angular/core';
import {  NavController, NavParams, ModalController } from 'ionic-angular';
import {ManageService} from "../../services/manage.service";
import {AppService} from "../../../common/services/app.service";
import {UserSelectPage} from "../user-select/user-select";

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
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public manageService: ManageService,
              public modalCtrl: ModalController,
              public heyApp: AppService,) {

    this.infostore = navParams.data;
    if(this.infostore && !this.infostore.user){
      this.infostore.user = {};
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
        this.infostore[name] = data;
      }
    });
  }


  onSubmit() {

    if(!this.infostore.title){
      this.heyApp.utilityComp.presentToast("名称必须输入！");
      return;
    }

    if(!this.infostore.introduction){
      this.heyApp.utilityComp.presentToast("简介必须输入！");
      return;
    }

    if(!this.infostore.callPerson){
      this.heyApp.utilityComp.presentToast("联系人姓名必须输入！");
      return;
    }

    if(!this.infostore.callNumber){
      this.heyApp.utilityComp.presentToast("联系电话必须输入！");
      return;
    }

    if(!this.infostore.address){
      this.heyApp.utilityComp.presentToast("详细地址必须输入！");
      return;
    }


    this.manageService.saveOrUpdateInfostore(this.infostore)
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
        this.infostore.photoPath = data;
        this.heyApp.utilityComp.dismissLoading();
      }, () => {
        this.heyApp.utilityComp.dismissLoading();
      });
  }

}
