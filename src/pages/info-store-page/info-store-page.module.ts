import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoStorePage } from './info-store-page';

@NgModule({
  declarations: [
    InfoStorePage,
  ],
  imports: [
    IonicPageModule.forChild(InfoStorePage),
  ],
  exports: [
    InfoStorePage
  ]
})
export class InfoStorePageModule {}
