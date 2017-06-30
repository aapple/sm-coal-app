import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NewsAddUpdatePage} from "./news-add-update";
import {AppService} from "../../../common/services/app.service";
import {ManageService} from "../../services/manage.service";

/**
 * Generated class for the NewsManage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-news-manage',
  templateUrl: 'news-manage.html',
})
export class NewsManagePage {

  newsList: any = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public heyApp: AppService,
              public manageService: ManageService) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad TrafficManage');
    this.manageService.getFactoryList({})
      .then(ret => {
        this.newsList = ret.factoryList;
      });
  }

  gotoAddPage() {
    this.navCtrl.push(NewsAddUpdatePage);
  }

  deleteNews(news) {
    this.manageService.deleteFactory(news)
      .then(ret => {
        this.heyApp.utilityComp.presentToast('删除成功');
        this.ionViewWillEnter();
      });
  }

  gotoUpdatePage(news) {
    this.navCtrl.push(NewsAddUpdatePage, news);
  }
}
