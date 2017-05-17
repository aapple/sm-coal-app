import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LantanPricePage } from './lantan-price-page';

@NgModule({
  declarations: [
    LantanPricePage,
  ],
  imports: [
    IonicPageModule.forChild(LantanPricePage),
  ],
  exports: [
    LantanPricePage
  ]
})
export class LantanPricePageModule {}
