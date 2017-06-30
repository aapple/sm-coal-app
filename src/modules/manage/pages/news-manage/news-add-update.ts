import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {ManageService} from "../../services/manage.service";
import {AppService} from "../../../common/services/app.service";

/**
 * Generated class for the NewsAddUpdate page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-news-add-update',
  templateUrl: 'news-add-update.html',
})
export class NewsAddUpdatePage {

  news: any = null;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public manageService: ManageService,
              public heyApp: AppService,) {

    this.news = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrafficAddUpdate');
  }

  onSubmit() {
    this.manageService.saveOrUpdateFactory(this.news)
      .then(ret => {
        this.heyApp.utilityComp.presentToast("保存成功");
        this.navCtrl.pop();
      });
  }

  uploadImg(event) {
    this.heyApp.utilityComp.presentLoading();
    let files = event.srcElement.files;

    this.heyApp.fileUploadService.upload(this.heyApp.fileUploadService.imageUploadAPI, files)
      .then(data => {
        this.news.picture = data;
        this.heyApp.utilityComp.dismissLoading();
      }, () => {
        this.heyApp.utilityComp.dismissLoading();
      });
  }

}
