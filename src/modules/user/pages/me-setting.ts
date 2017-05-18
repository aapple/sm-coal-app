import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { AppService } from '../../common/services/app.service';
import { UserService } from '../services/user.service';
import { TimelineService } from '../../timeline/services/timeline.service';

import { HCAboutPage } from './hc-about';
import { HCGuidePage } from './hc-guide';
import { HCFeedbackPage } from './hc-feedback';

@Component({
  selector: 'page-setting',
  templateUrl: 'me-setting.html'
})
export class MeSettingPage {
  HCAboutPage = HCAboutPage;
  HCGuidePage = HCGuidePage;
  HCFeedbackPage = HCFeedbackPage;


  //
  // constructor
  constructor(
    public heyApp: AppService,
    public timelineService: TimelineService,
    public navCtrl: NavController,
    public userService: UserService,
  ) {
  }


  //
  // goto log out
  gotoLogOut() {
    this.heyApp.utilityComp.presentLoading();

    this.userService.logOut()
    .then(ret => {
      this.heyApp.utilityComp.dismissLoading();
      this.heyApp.authService.logOut();
      this.navCtrl.pop();
    });
  }


  //
  // clear cache
  clearCacheHandler() {
    this.timelineService.timelines = [];
    this.timelineService.clearCache();
    this.heyApp.utilityComp.presentToast('user.Clear the cache success');
  }


  //
  // open terms page
  openTermsPage() {
    let url = (<any> window).API_DOMAIN + '/docs/terms.html';
    if (this.heyApp.platform.is('cordova')) {
      //let browser = new InAppBrowser(url, '_system');
      //browser.show();
    } else {
      (<any> window).open(url, '_blank');
    }
  }
}
