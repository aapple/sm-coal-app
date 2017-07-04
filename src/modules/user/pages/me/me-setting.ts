import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';

import { AppService } from '../../../common/services/app.service';
import { UserService } from '../../services/user.service';
import { TimelineService } from '../../../timeline/services/timeline.service';

import { HCAboutPage } from '../setting/hc-about';
import { HCGuidePage } from '../setting/hc-guide';
import { HCFeedbackPage } from '../setting/hc-feedback';

@Component({
  selector: 'page-setting',
  templateUrl: 'me-setting.html'
})
export class MeSettingPage {
  HCAboutPage = HCAboutPage;
  HCGuidePage = HCGuidePage;
  HCFeedbackPage = HCFeedbackPage;
  appVersion = (window as any).APP_VERSION;


  //
  // constructor
  constructor(
    public heyApp: AppService,
    public timelineService: TimelineService,
    public navCtrl: NavController,
    public userService: UserService
  ) {
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
    this.heyApp.utilityComp.presentToast('清空缓存成功');
  }

  updateApp(){
    this.heyApp.utilityComp.presentToast('您的软件已是最新版本！');
  }

}
