import {Component, ViewChild} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, Slides} from 'ionic-angular';
import {LifestoreList} from "./lifestore-list";
import {LifestoreDetail} from "./lifestore-detail";
import {HomeService} from "../services/home.service";
import {AreaList} from "./area-list";
import {AppGlobal} from "../../../app/app.global";
import { Storage } from '@ionic/storage';


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
              public storage: Storage) {

    this.storage.get(AppGlobal.areaName)
      .then(value => {
        if(value){
          this.areaName = value + "";
        }
      });
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
      this.storage.get(AppGlobal.areaName)
        .then(value => {
          if(value){
            this.areaName = value + "";
          }
        });
    });
  }

}

