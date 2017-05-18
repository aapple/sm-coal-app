import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {CoalPricePage} from "../coal-price-page/coal-price-page";
import {StorageService} from "../../providers/storage-service";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html',
})
export class LoginPage {

  phoneNumber : string;
  validateCode : string;
  canGetCode : boolean;
  canLogin : boolean;
  wait : number = 60;
  codeText : string = "获取验证码";

  constructor(public navCtrl: NavController, public navParams: NavParams
    , private toastCtrl: ToastController, public storageService: StorageService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  changePhoneNumber(event) {

    let reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
    let flag = reg.test(this.phoneNumber); //true
    if(flag){
      this.canGetCode = true;
    } else {
      this.canGetCode = false;
    }
  }

  changeValidateCode(event) {

    let regCode = /^\d{4}$/; //验证规则
    let flagCode = regCode.test(this.validateCode); //true
    let regPhone = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
    let flagPhone = regPhone.test(this.phoneNumber); //true
    if(flagCode && flagPhone){
      this.canLogin = true;
    } else {
      this.canLogin = false;
    }
  }

  login(){
    if(!this.canLogin){
      return;
    }

    let result = false;
    if(result){
      this.storageService.writeLoginFlag(true);
      this.navCtrl.popToRoot();
    } else {
      this.presentToast("验证码错误，请重新输入");
    }

  }

  getvalidateCode() {
    if(!this.canGetCode){
      return;
    }
    this.presentToast("获取短信验证码成功");

    this.time();
  }

  time() {

    let me = this;
    if (this.wait == 0) {
      this.codeText="获取验证码";
      this.wait = 60;
      this.canGetCode = true;
    } else {
      this.wait--;
      this.codeText = this.wait + "秒";
      this.canGetCode = false;
      setTimeout(function() {
        me.time()
        }, 1000)
    }
}

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
