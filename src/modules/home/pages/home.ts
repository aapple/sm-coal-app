import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild('mySlider') slider:Slides;
  mySlideOptions={
    autoplay:2000,
    initialSlide:0,
    pager:true,
    loop:true,
    speed:300
  };

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

  // ngOnInit(){//页面加载完成后自己调用
  //   setInterval(()=>{
  //     this.slider.slideNext(300,true);
  //   },2000);
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
  }

}

