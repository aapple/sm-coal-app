import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AppService } from '../../common/services/app.service';
import { NoticeService } from '../../notice/services/notice.service';

import { MeProfilePage } from './me-profile';
import { MeNoticePage } from '../../notice/pages/me-notice';
import { MyTimelinePage } from '../../timeline/pages/my-timeline';
import { MeSettingPage } from './me-setting';
import { TimelinePage } from '../../timeline/pages/timeline';
import { CoalPriceManagePage } from '../../manage/pages/coal-price-manage';
import { LantanPriceManagePage } from '../../manage/pages/lantan-price-manage';
import { LogisticsManagePage } from '../../manage/pages/logistics-manage';

@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})
export class MePage {
  MeSettingPage = MeSettingPage;

  constructor(
    public heyApp: AppService,
    public noticeService: NoticeService,
    public navCtrl: NavController
  ) {
  }

  gotoMeProfilePage() {
    if (this.heyApp.authService.authOrLogin()) {
      this.navCtrl.push(MeProfilePage);
    }
  }


  gotoMeNoticePage() {
    if (this.heyApp.authService.authOrLogin()) {
      this.navCtrl.push(MeNoticePage);
    }
  }


  gotoMyTimelinePage() {
    if (this.heyApp.authService.authOrLogin()) {
      this.navCtrl.push(TimelinePage);
    }
  }

  gotoCoalOrignPriceMangePage() {
    if (this.heyApp.authService.authOrLogin()) {
      this.navCtrl.push(CoalPriceManagePage);
    }
  }

  gotoCoalSalePriceManagePage() {
    if (this.heyApp.authService.authOrLogin()) {
      this.navCtrl.push(CoalPriceManagePage);
    }
  }

  gotoLantanPriceManagePage() {
    if (this.heyApp.authService.authOrLogin()) {
      this.navCtrl.push(LantanPriceManagePage);
    }
  }

  gotoLogisticseManagePage() {
    if (this.heyApp.authService.authOrLogin()) {
      this.navCtrl.push(LogisticsManagePage);
    }
  }

}
