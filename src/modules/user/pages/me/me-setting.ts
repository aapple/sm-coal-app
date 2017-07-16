import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';

import { AppService } from '../../../common/services/app.service';
import { UserService } from '../../services/user.service';
import { TimelineService } from '../../../timeline/services/timeline.service';

import { HCAboutPage } from '../setting/hc-about';
import { HCGuidePage } from '../setting/hc-guide';
import { HCFeedbackPage } from '../setting/hc-feedback';
import {UtilService} from "../../../common/services/util.service";
import {version} from "moment";

@Component({
  selector: 'page-setting',
  templateUrl: 'me-setting.html'
})
export class MeSettingPage {

  HCAboutPage = HCAboutPage;
  HCGuidePage = HCGuidePage;
  HCFeedbackPage = HCFeedbackPage;
  appVersion = "";
  hasNewVersion: boolean = false;

  //
  // constructor
  constructor(
    public heyApp: AppService,
    public timelineService: TimelineService,
    public navCtrl: NavController,
    public userService: UserService,
    public alertCtrl: AlertController,
    public utilService: UtilService
  ) {

    if(this.utilService.isAndroid() || this.utilService.isIos()){

      this.utilService.getVersionNumber().then(ret => {

        this.appVersion = ret;
        let params = null;
        if(this.utilService.isAndroid()){
          params = {
            versionNum : ret,
            systemType: 'android'
          }
        } else if(this.utilService.isIos()){
          params = {
            versionNum : ret,
            systemType: 'ios'
          }
        }

        this.userService.checkUpdate(params).then(data => {

          this.hasNewVersion = data.isNeedUpdate;
        });
      });
    }

  }


  //
  // goto log out
  gotoLogOut() {

    this.heyApp.authService.logOut();
    this.navCtrl.pop();
  }


  //
  // clear cache
  clearCacheHandler() {
    this.timelineService.timelines = [];
    this.timelineService.clearCache();
    this.heyApp.utilityComp.presentToast('清空缓存成功！');
  }

  updateApp(){

    this.utilService.getVersionNumber().then(ret => {

      let params = {
        versionNum : ret,
        systemType: 'android'
      }

      this.userService.checkUpdate(params).then(data => {

        if(data.isNeedUpdate){
          this.alertCtrl.create({
            title: '升级',
            subTitle: '发现新版本,是否立即升级？',
            buttons: [{text: '取消'},
              {
                text: '确定',
                handler: () => {
                  this.utilService.downloadApp(data.versionAddr);
                }
              }
            ]
          }).present();

        } else {
          this.heyApp.utilityComp.presentToast('当前已经是最新版本！');
        }
      });
    });

  }


}
