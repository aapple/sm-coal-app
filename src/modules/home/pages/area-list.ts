import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {AppGlobal} from "../../../app/app.global";

/**
 * Generated class for the AreaList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-area-list',
  templateUrl: 'area-list.html',
})
export class AreaList {

  currentArea: string = "";
  items: any = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public storage: Storage) {

    this.items = AppGlobal.areaList;
  }

  ionViewDidLoad() {
    this.storage.get(AppGlobal.areaName)
      .then(value => {
        if(value){
          this.currentArea = value + "";
        }
      });
    console.log('ionViewDidLoad AreaList');
  }

  itemSelected(item) {
    this.storage.set(AppGlobal.areaName, item);
    this.viewCtrl.dismiss();
  }

  cancelModal() {
    this.viewCtrl.dismiss();
  }

}
