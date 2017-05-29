import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild('mySlider') slider:Slides;

  ionViewWillEnter(){
    console.log('ionViewWillEnter Home');
    this.slider.startAutoplay();
  }
  ionViewWillLeave(){
    console.log('ionViewWillLeave Home');
    this.slider.stopAutoplay();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ngOnInit(){//页面加载完成后自己调用
    this.slider.pager = true;
    this.slider.loop = true;
    this.slider.autoplay = 2000;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
  }

}

