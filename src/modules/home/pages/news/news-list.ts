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

  newsList: any = [];

  constructor(public navCtrl: NavController,
              public homeService: HomeService,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let data = {pageNumber: 0};
    this.homeService.loadNewsList(data)
      .then(ret => {
        this.newsList = ret.content;
        }
      );
    console.log('ionViewDidLoad NewsList');
  }

  gotoNewsDetail(news){
    this.navCtrl.push(BrowserPage, {
      browser: {
        title: '热点资讯',
        isWechatPage: true,
        url: news.content
      }
    });
  }
}
