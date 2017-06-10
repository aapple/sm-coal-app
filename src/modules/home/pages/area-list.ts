import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {AppGlobal} from "../../../app/app.global";
import {LocalStorageService} from "../../common/services/localStorage.service";

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
    public localStorageService: LocalStorageService) {

    this.items = AppGlobal.areaList;
  }

  ionViewDidLoad() {
    this.currentArea = this.localStorageService.get(AppGlobal.areaName);
    console.log('ionViewDidLoad AreaList');
  }

  itemSelected(item) {
    this.localStorageService.set(AppGlobal.areaName, item);
    this.viewCtrl.dismiss();
  }

  cancelModal() {
    this.viewCtrl.dismiss();
  }

}
