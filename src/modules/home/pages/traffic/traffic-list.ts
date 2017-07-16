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
  selector: 'page-traffic-list',
  templateUrl: 'traffic-list.html',
})
export class TrafficListPage {

  trafficList: any = [];
  pageNumber: number = 0;
  isInfiniteEnabled: boolean = true;

  constructor(public navCtrl: NavController,
              public homeService: HomeService,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.loadList();
  }

  loadList(){

    this.pageNumber = 0;
    let data = {pageNumber: this.pageNumber};
    this.homeService.loadTrafficList(data)
      .then(ret => {
          this.trafficList = ret.content;
        }
      );
  }

  doRefresh(refresher) {

    this.loadList();
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
         this.trafficList = this.trafficList.concat(ret.content);
         infiniteScroll.complete();
         this.isInfiniteEnabled = !ret.last;
        }
      );

  }
}
