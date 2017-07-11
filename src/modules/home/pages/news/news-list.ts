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
  pageNumber: number = 0;
  isInfiniteEnabled: boolean = true;

  constructor(public navCtrl: NavController,
              public homeService: HomeService,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.loadNewsList();
    console.log('ionViewDidLoad NewsList');
  }

  loadNewsList(){

    this.pageNumber = 0;
    let data = {pageNumber: this.pageNumber};
    this.homeService.loadNewsList(data)
      .then(ret => {
          this.newsList = ret.content;
        }
      );
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

  doRefresh(refresher) {

    this.loadNewsList();
    setTimeout(function(){
      refresher.complete();
    }, 1000)
    this.isInfiniteEnabled = true;
  }

  doInfinite(infiniteScroll) {

    let pageNumber = ++this.pageNumber;
    let data = {pageNumber: pageNumber};

    this.homeService.loadNewsList(data)
      .then(ret => {
         this.newsList = this.newsList.concat(ret.content);
         infiniteScroll.complete();
         this.isInfiniteEnabled = !ret.last;
        }
      );

  }
}
