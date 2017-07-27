import { NgModule } from '@angular/core';
import {Platform, Events, ModalController, AlertController} from 'ionic-angular';
import { CommonModule } from '../common/common.module';

import { AppService } from '../common/services/app.service';
import { UserService } from './services/user.service';

import { MePage } from './pages/me/me';
import { MeProfilePage } from './pages/me/me-profile';
import { MeProfileUpdatePage } from './pages/me/me-profileUpdate';

import { MeSettingPage } from './pages/me/me-setting';

import { HCAboutPage } from './pages/setting/hc-about';
import { HCGuidePage } from './pages/setting/hc-guide';
import { HCFeedbackPage } from './pages/setting/hc-feedback';
import { HCDebugPage } from './pages/setting/hc-debug';

import { AuthenticatePage } from './pages/authenticate/authenticate';
import {RoleSelectPage} from "./pages/authenticate/role-select";
import {UtilService} from "../common/services/util.service";
import {LocalStorageService} from "../common/services/localStorage.service";
import {AppGlobal} from "../../app/app.global";
import {AmapPage} from "./pages/map/ampa";
import {MeSharePage} from "./pages/me/me-share";



@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    MePage,
    MeProfilePage,
    MeProfileUpdatePage,
    MeSettingPage,
    HCAboutPage,
    HCGuidePage,
    HCFeedbackPage,
    HCDebugPage,
    AuthenticatePage,
    RoleSelectPage,
    AmapPage,
    MeSharePage
  ],
  entryComponents: [
    MePage,
    MeProfilePage,
    MeProfileUpdatePage,
    MeSettingPage,
    HCAboutPage,
    HCGuidePage,
    HCFeedbackPage,
    HCDebugPage,
    AuthenticatePage,
    RoleSelectPage,
    AmapPage,
    MeSharePage
  ],
  providers: [
    UserService,
  ],
  exports: [
  ],
})
export class UserModule {
  constructor(
    public platform: Platform,
    public events: Events,
    public heyApp: AppService,
    public userService: UserService,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public utilService: UtilService,
    public localStorageService: LocalStorageService
  ) {

    // subcribe events
    this.subscribeEvents();

    // platform ready
    this.platform.ready().then(() => {
      // get user
      this.getUser();

      //启动时自动检查更新
      this.updateApp();
    });
  }

  updateApp(){

    if(this.utilService.isAndroid() || this.utilService.isIos()){

      this.utilService.getVersionNumber().then(ret => {

        let params = {
          versionNum : ret,
          systemType: 'android'
        }

        this.userService.checkUpdate(params).then(data => {

          if(data.isNeedUpdate){

            //检查当前版本是否要弹出提示
            let cancelVersion = this.localStorageService.get(AppGlobal.CANCEL_VERSION);
            if(cancelVersion == data.versionNum){
              return;
            }

            this.alertCtrl.create({
              title: '升级',
              subTitle: '发现新版本,是否立即升级？',
              buttons: [
                {
                  text: '取消',
                  handler: () => {
                    this.localStorageService.set(AppGlobal.CANCEL_VERSION, data.versionNum);
                  }
                },
                {
                  text: '确定',
                  handler: () => {
                    this.utilService.downloadApp(data.versionAddr);
                  }
                }
              ]
            }).present();
          }
        });
      });
    }

  }


  //
  // get user
  getUser() {
    setTimeout(() => {
      this.userService.getUser().then((userInfo) => {
        this.events.publish('auth:logIn', userInfo);
      }, () => {
        this.events.publish('auth:logOut');
      });
    }, 5000);
  }


  //
  // Subscribe events
  subscribeEvents() {
    //
    // subscribe app goto login
    this.events.subscribe('app:gotoLogin', (params) => {
      // this.heyApp.utilityComp.presentModal(AuthenticatePage);
      let modal = this.modalCtrl.create(AuthenticatePage)
      modal.present();
      console.log('present login page');
    });
  }
}
