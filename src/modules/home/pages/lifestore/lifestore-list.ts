import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {LifestoreDetail} from "./lifestore-detail";
import {AppGlobal} from "../../../../app/app.global";
import {HomeService} from "../../services/home.service";
import {LocalStorageService} from "../../../common/services/localStorage.service";

/**
 * Generated class for the LifestoreList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-lifestore-list',
  templateUrl: 'lifestore-list.html',
})
export class LifestoreList {

  serviceType: string = "";
  lifestoreList: any = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public homeService: HomeService,
              public localStorageService: LocalStorageService) {

    this.serviceType = navParams.data;
  }

  ionViewDidLoad() {

    let data = {
      serviceType: null
    };

    if(this.serviceType){
      data.serviceType = this.serviceType;
    }

    this.homeService.loadLifestoreList(data)
      .then(ret => {
          this.lifestoreList = ret;
        }
    );
    console.log('ionViewDidLoad LifestoreList');
  }

  gotoDetail(data){
   this.navCtrl.push(LifestoreDetail, data);
  }

}
