import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardInfo } from './card-info';

@NgModule({
  declarations: [
    CardInfo,
  ],
  imports: [
    IonicPageModule.forChild(CardInfo),
  ],
  exports: [
    CardInfo
  ]
})
export class CardInfoModule {}
