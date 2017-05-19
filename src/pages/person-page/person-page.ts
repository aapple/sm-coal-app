import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {LoginPage} from "../login-page/login-page";
import { HCAboutPage } from '../../modules/user/pages/hc-about';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonPage');
  }

  gotoLogin(){
    this.navCtrl.push(LoginPage, {
      name:"tom",
      job:"IT"
    })
  }

  gotoAbout(){
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

}
