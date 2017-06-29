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
        this.factory.picture = data;
        this.heyApp.utilityComp.dismissLoading();
      }, () => {
        this.heyApp.utilityComp.dismissLoading();
      });
  }


}
