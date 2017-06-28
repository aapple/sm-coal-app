import {Component, ViewChild} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, Slides} from 'ionic-angular';
import {LifestoreList} from "./lifestore-list";
import {LifestoreDetail} from "./lifestore-detail";
import {HomeService} from "../services/home.service";
import {AreaList} from "./area-list";
import {AppGlobal} from "../../../app/app.global";
import { Storage } from '@ionic/storage';
import {CoalPage} from "../../coal/pages/coal";
import {TimelinePage} from "../../timeline/pages/timeline";
import {InfostorePage} from "../../infostore/pages/infostore";
import {LocalStorageService} from "../../common/services/localStorage.service";
import {ShareModel} from "../../common/models/ShareModel";
import {BrowserPage} from "../../common/pages/browser";
import {HCAboutPage} from "../../user/pages/hc-about";
import {NewsDetailPage} from "./news-detail";
import {NewsListPage} from "./news-list";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild('mySlider') slider:Slides;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public homeService: HomeService,
              public modalCtrl: ModalController,
              public localStorageService: LocalStorageService) {

    let areaNameStr = this.localStorageService.get(AppGlobal.areaName)
    if(areaNameStr){
      this.areaName = areaNameStr;
    }
  }

  lifestoreList: any = [];
  areaName: string = "地区";

  ionViewWillEnter(){
    console.log('ionViewWillEnter Home');
    this.slider.startAutoplay();

    this.loadLifestoreList();

  }
  ionViewWillLeave(){
    console.log('ionViewWillLeave Home');
    this.slider.stopAutoplay();
  }

  loadLifestoreList() {

    this.homeService.loadLifestoreList({})
      .then(ret => {
          this.lifestoreList = ret;
        }
      );
  }

  ngOnInit(){//页面加载完成后自己调用
    this.slider.pager = true;
    this.slider.loop = true;
    this.slider.autoplay = 2000;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
  }

  gotoLifeStore(data) {
    this.navCtrl.push(LifestoreList, data)
  }

  gotoDetail(data){
    this.navCtrl.push(LifestoreDetail, data);
  }

  gotoAreaList() {
    let modal = this.modalCtrl.create(AreaList)
    modal.present();
    modal.onDidDismiss(data=>{
      let areaNameStr = this.localStorageService.get(AppGlobal.areaName)
      if(areaNameStr){
        this.areaName = areaNameStr;
      }
    });
  }

  gotoCoalPrice(data){

    this.navCtrl.push(BrowserPage, {
      browser: {
        title: '微信小程序',
        // isWechatPage: true,
        // url: "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAwNzM3NzU4OQ==&scene=124&#wechat_redirect",
        url: 'http://shipper.huodada.com/freight/list.shtml?startProvince=%E9%99%95%E8%A5%BF%E7%9C%81&startCity=%E6%A6%86%E6%9E%97%E5%B8%82&startCountry=%E7%A5%9E%E6%9C%A8%E5%8E%BF&endProvince=&endCity=&endCountry=',
        // url: 'https://mp.weixin.qq.com/s?__biz=MjM5MzEyODcyNw==&mid=2660774308&idx=4&sn=f042b9f8e553d286e9fcc7d913bff9a5&chksm=bdf759dc8a80d0ca0d71c9f1f0e56c26844bc19485ea92c57391115dfe2007b10ace62e585d9&scene=0&key=89dde3aab298770ee7fd14d2d86fd7dd3d56044a05d277da1a0fd8349671c13d78268bb9c08960dba779496722b1b301f123c6ba90631c0f182bd3ff811b77786ef015af6e04346a437e304013d64f95&ascene=0&uin=NTEwMTgyNjU%3D&devicetype=iMac+MacBookAir7%2C2+OSX+OSX+10.12.5+build(16F73)&version=12020810&nettype=WIFI&fontScale=100&pass_ticket=W79Hm0f2%2FCWveW98MXgAN7SLYbk0rcgJ%2BatQzL0JzEk%3D',
      }
    });
    //this.navCtrl.parent.select(1);
  }

  gotoCokePrice(data){
    this.navCtrl.parent.select(2);
  }


  gotoInfoStore(data){
    this.navCtrl.parent.select(3);
  }

  gotoTimeline(data){
    this.navCtrl.push(TimelinePage);
  }

  doRefresh(refresher) {

    setTimeout(function(){
      refresher.complete();
    }, 1000)
  }

  gotoBannerDetail(){
    this.navCtrl.push(HCAboutPage);
  }

  gotoNewsList(){
    this.navCtrl.push(NewsListPage);
  }

  gotoNewsDetail(news){
    this.navCtrl.push(NewsDetailPage, news);
  }

}

