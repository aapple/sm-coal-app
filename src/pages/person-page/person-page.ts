import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';
import {LoginPage} from "../login-page/login-page";
import { HCAboutPage } from '../../modules/user/pages/hc-about';
import {StorageService} from "../../providers/storage-service";

/**
 * Generated class for the PersonPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-person-page',
  templateUrl: 'person-page.html',
})
export class PersonPage {

  isLogin : boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              public events: Events,
              public storageService: StorageService) {

    this.subscribeEvents();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonPage');
  }

  gotoLogin() {
    this.navCtrl.push(LoginPage, {
      name:"tom",
      job:"IT"
    })
  }

  gotoAbout() {
    this.navCtrl.push(HCAboutPage)
  }

  logout() {
    let alert = this.alertCtrl.create({
      title: '温馨提示',
      message: '你确定退出吗',
      buttons: [
        {
          text: '确定',
          handler: () => {
            console.log('退出成功！');
          }
        },
        {
          text: '再看看',
          role: 'cancel'
        }
      ]
    });
    alert.present();
  }

  subscribeEvents() {
    //
    // subscribe app goto login
    this.events.subscribe('app:gotoLogin', (params) => {
      // this.heyApp.utilityComp.presentModal(AuthenticatePage);
      //let modal = this.modalCtrl.create(AuthenticatePage)
      //modal.present();
      console.log('present login page');
    });
  }

}
