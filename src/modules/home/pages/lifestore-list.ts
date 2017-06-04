import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LifestoreDetail} from "./lifestore-detail";
import {HomeService} from "../services/home.service";

/**
 * Generated class for the LifestoreList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lifestore-list',
  templateUrl: 'lifestore-list.html',
})
export class LifestoreList {

  serviceType: string = "";
  lifestoreList: any = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public homeService: HomeService) {

    this.serviceType = navParams.data;
  }

  ionViewDidLoad() {

    let data = {
      serviceType: this.serviceType
    };
    this.homeService.loadLifestoreList(data)
      .then(ret => {
          this.lifestoreList = ret;
        }
    );
    console.log('ionViewDidLoad LifestoreList');
  }

}
