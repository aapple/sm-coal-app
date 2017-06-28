import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LifestoreDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-lifestore-detail',
  templateUrl: 'lifestore-detail.html',
})
export class LifestoreDetail {

  lifestore: any = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lifestore = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LifestoreDetail');
  }

  gotoBuy(){
    window.location.href = "tel:" + this.lifestore.callNumber;
  }

}
