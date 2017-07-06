import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MeProfilePage } from './me-profile';
import { MeNoticePage } from '../../../notice/pages/me-notice';
import { MeSettingPage } from './me-setting';
import { TimelinePage } from '../../../timeline/pages/timeline';
import { LogisticsManagePage } from '../../../manage/pages/logistics-manage/logistics-manage';
import {FactoryManage} from "../../../manage/pages/factory-manage/factory-manage";
import {InfostoreManage} from "../../../manage/pages/infostore-manage/infostore-manage";
import {LifestoreManage} from "../../../manage/pages/lifestore-manage/lifestore-manage";

import { HCAboutPage } from '../setting/hc-about';
import { HCGuidePage } from '../setting/hc-guide';
import { HCFeedbackPage } from '../setting/hc-feedback';
import {BrowserPage} from "../../../common/pages/browser";
import {ProductListPage} from "../../../manage/pages/price-manage/product-list";
import {AppService} from "../../../common/services/app.service";
import {NoticeService} from "../../../notice/services/notice.service";
import {TrafficManagePage} from "../../../manage/pages/traffic-manage/traffic-manage";
import {NewsManagePage} from "../../../manage/pages/news-manage/news-manage";
import {FactoryListPage} from "../../../manage/pages/price-manage/factory-list";
import {AmapPage} from "../map/ampa";

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
      this.navCtrl.push(FactoryListPage, 1);
    }
  }

  gotoCoalSalePriceManagePage() {
    if (this.heyApp.authService.authOrLogin()) {
      this.navCtrl.push(FactoryListPage, 3);
    }
  }

  gotoLantanPriceManagePage() {
    if (this.heyApp.authService.authOrLogin()) {
      this.navCtrl.push(FactoryListPage, 2);
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

  gotoNewsManagePage() {
    if (this.heyApp.authService.authOrLogin()) {
      this.navCtrl.push(NewsManagePage);
    }
  }

  gotoTrafficManagePage() {
    if (this.heyApp.authService.authOrLogin()) {
      this.navCtrl.push(TrafficManagePage);
    }
  }

  gotoLogisticsPricePage() {
    this.navCtrl.push(BrowserPage, {
      browser: {
        title: '查运价',
        isLogisticsPrice: true,
        url: 'http://shipper.huodada.com/freight/list.shtml?startProvince=%E9%99%95%E8%A5%BF%E7%9C%81&startCity=%E6%A6%86%E6%9E%97%E5%B8%82&startCountry=%E7%A5%9E%E6%9C%A8%E5%8E%BF&endProvince=&endCity=&endCountry='
      }
    });
  }

  gotoTrafficPage() {
    this.navCtrl.push(BrowserPage, {
      browser: {
        title: '路况信息',
        url: 'http://www.meitanjianghu.com/Application/searchInfo?keyWord=%E6%96%B0%E8%B7%AF%E5%86%B5%E5%AE%9E%E6%97%B6%E6%92%AD%E6%8A%A5'
      }
    });
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
    window.location.href = "tel:0912-8313333";
  }

  gotoAmapPage(){
    this.navCtrl.push(AmapPage);
  }

}
