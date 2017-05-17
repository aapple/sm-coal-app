import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoalPricePage } from './coal-price-page';

@NgModule({
  declarations: [
    CoalPricePage,
  ],
  imports: [
    IonicPageModule.forChild(CoalPricePage),
  ],
  exports: [
    CoalPricePage
  ]
})
export class CoalPricePageModule {}
