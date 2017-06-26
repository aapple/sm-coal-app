import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AppService } from '../../common/services/app.service';
import { NoticeService } from '../../notice/services/notice.service';

import { MeProfilePage } from './me-profile';
import { MeNoticePage } from '../../notice/pages/me-notice';
import { MyTimelinePage } from '../../timeline/pages/my-timeline';
import { MeSettingPage } from './me-setting';
import { TimelinePage } from '../../timeline/pages/timeline';
import { ProductPriceManagePage } from '../../manage/pages/product-price-manage';
import { LogisticsManagePage } from '../../manage/pages/logistics-manage';
import {FactoryManage} from "../../manage/pages/factory-manage";
import {InfostoreManage} from "../../manage/pages/infostore-manage";
import {CokePriceManage} from "../../manage/pages/coke-price-manage";
import {ColaSalerPriceManage} from "../../manage/pages/cola-saler-price-manage";
import {LifestoreAddUpdate} from "../../manage/pages/lifestore-add-update";
import {LifestoreManage} from "../../manage/pages/lifestore-manage";

import { HCAboutPage } from './hc-about';
import { HCGuidePage } from './hc-guide';
import { HCFeedbackPage } from './hc-feedback';
import {BrowserPage} from "../../common/pages/browser";

@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})
export class MePage {

  MeSettingPage = MeSettingPage;
  HCAboutPage = HCAboutPage;
  HCGuidePage = HCGuidePage;
  HCFeedbackPage = HCFeedbackPage;

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
      this.navCtrl.push(ProductPriceManagePage);
    }
  }

  gotoCoalSalePriceManagePage() {
    if (this.heyApp.authService.authOrLogin()) {
      this.navCtrl.push(ColaSalerPriceManage);
    }
  }

  gotoLantanPriceManagePage() {
    if (this.heyApp.authService.authOrLogin()) {
      this.navCtrl.push(CokePriceManage);
    }
  }

  gotoLogisticseManagePage() {
    if (this.heyApp.authService.authOrLogin()) {
      this.navCtrl.push(LogisticsManagePage);
    }
  }

  gotoFactoryManagePage() {
    if (this.heyApp.authService.authOrLogin()) {
      this.navCtrl.push(FactoryManage);
    }
  }

  gotoInfoStoreManagePage() {
    if (this.heyApp.authService.authOrLogin()) {
      this.navCtrl.push(InfostoreManage);
    }
  }

  gotoLifeStoreManagePage() {
    if (this.heyApp.authService.authOrLogin()) {
      this.navCtrl.push(LifestoreManage);
    }
  }

  doRefresh(refresher) {

    setTimeout(function(){
      refresher.complete();
    }, 1000)
  }

  //
  // open terms page
  openTermsPage() {

    this.navCtrl.push(BrowserPage, {
      browser: {
        title: '用户协议',
        url: 'http://119.29.250.146:8900/docs/terms.html'
      }
    });
  }

  gotoContact(){
    window.location.href = "tel:0912-8888888";
  }

}
