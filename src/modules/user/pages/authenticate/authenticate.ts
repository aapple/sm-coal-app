import { Component } from '@angular/core';
import {ViewController, NavController} from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';

import { AppService } from '../../../common/services/app.service';
import { UserService} from '../../services/user.service';
import {BrowserPage} from "../../../common/pages/browser";


@Component({
  selector: 'page-authenticate',
  templateUrl: 'authenticate.html'
})
export class AuthenticatePage {

  signUpModel: {phone?: number, verificationCode?: number} = {};

  getVerificationCodeBtnText: string;
  getVerificationCodeBtnDisabled: boolean = false;

  constructor(
    public heyApp: AppService,
    public userService: UserService,
    public viewCtrl: ViewController,
    public navCtrl: NavController
  ) {

  }

  // cancel modal
  cancelModal() {
    this.viewCtrl.dismiss();
  }


  //
  // sign up handler
  signUpHandler(ngForm) {
    let data: Object = {
      phoneNum: this.signUpModel.phone,
      verifyCode: this.signUpModel.verificationCode
    };

    if (ngForm.valid) {
      this.heyApp.utilityComp.presentLoading();

      this.userService.signUp(data)
      .then(ret => {
        this.heyApp.authService.logIn(ret);
        this.viewCtrl.dismiss().then(() => {
          this.heyApp.utilityComp.dismissLoading();
          this.heyApp.utilityComp.presentToast('验证成功, 欢迎你： ' + ret.nickname);
        });
      }, (data) => {
        this.heyApp.utilityComp.dismissLoading().then(() => {
          this.heyApp.utilityComp.presentToast(data._body);
        });
      });
    }
  }


  // get verification code
  getVerificationCode() {
    this.userService.getVerificationCode({phoneNum: this.signUpModel.phone}).then((res) => {
      this.getVerificationCodeBtnText = '60s';
      this.getVerificationCodeBtnDisabled = true;

      this.heyApp.utilityComp.presentToast('验证码： ' + res.data);

      let verificationCodeInterval = setInterval(() => {
        let t = this.getVerificationCodeBtnText.substr(0, this.getVerificationCodeBtnText.indexOf('s'));

        if (parseInt(t) > 1) {
          this.getVerificationCodeBtnText = parseInt(t) - 1 + 's';
        } else {
          clearInterval(verificationCodeInterval);
          this.getVerificationCodeBtnDisabled = false;
        }
      }, 1000);
    }, (res) => {
      this.heyApp.utilityComp.presentAlter({title: '提示', subTitle: res._body});
    });
  }

  // open terms page
  openTermsPage() {

    this.navCtrl.push(BrowserPage, {
      browser: {
        title: '用户协议',
        url: 'http://119.29.250.146:8900/docs/terms.html'
      }
    });
  }
}
