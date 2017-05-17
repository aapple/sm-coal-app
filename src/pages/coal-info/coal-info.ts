import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Coal} from "../../providers/coal";
import {LoginPage} from "../login-page/login-page";

/**
 * Generated class for the CoalInfo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-coal-info',
  templateUrl: 'coal-info.html',
})
export class CoalInfo {

  username: string;
  test : string;
  posts : any = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public coal: Coal) {
    this.test = "YAO";
    this.coal.loadTop().then((data) =>{
      this.posts = data;
    });
  }

  openModal(){
    this.navCtrl.push(LoginPage, {
      name:"tom",
      job:"IT"
    })
  }

  login() {
    alert(this.username);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoalInfo');
  }

}
