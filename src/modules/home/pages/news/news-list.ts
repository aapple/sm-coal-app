import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {BrowserPage} from "../../../common/pages/browser";
import {HomeService} from "../../services/home.service";

/**
 * Generated class for the NewsList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-news-list',
  templateUrl: 'news-list.html',
})
export class NewsListPage {

  lifestoreList: any = [];

  constructor(public navCtrl: NavController,
              public homeService: HomeService,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.homeService.loadLifestoreList({})
      .then(ret => {
          this.lifestoreList = ret;
        }
      );
    console.log('ionViewDidLoad NewsList');
  }

  gotoNewsDetail(news){
    this.navCtrl.push(BrowserPage, {
      browser: {
        title: '热点资讯',
        // isWechatPage: true,
        url: "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAwNzM3NzU4OQ==&scene=124&#wechat_redirect",
      }
    });
  }
}
