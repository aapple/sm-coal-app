import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-coal',
  templateUrl: 'coal.html',
})
export class CoalPage {

  coalType: string = "mm";
  coalList: any = [];
  priceType: string = "coal";
  queryText: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    let coal = {
      store : "海湾煤矿",
      hot: "5600",
      coalPrice : "200",
      salePrice : "500",
      salerName : "张小花",
      salerPhone : "13366633333"
    }
    this.coalList = [coal, coal, coal];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoalPricePage');
  }

  onCoalTypeChange() {
    console.log(this.coalType);
  }

  changePriceType() {

  }

  doRefresh(refresher) {

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 4000);
  }

  doQuery(){
    console.log(this.queryText);
  }

}
