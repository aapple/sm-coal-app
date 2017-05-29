import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MySlide } from './my-slide';

@NgModule({
  declarations: [
    MySlide,
  ],
  imports: [
    IonicPageModule.forChild(MySlide),
  ],
  exports: [
    MySlide
  ]
})
export class MySlideModule {}
