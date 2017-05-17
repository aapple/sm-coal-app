import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoalInfo } from './coal-info';

@NgModule({
  declarations: [
    CoalInfo,
  ],
  imports: [
    IonicPageModule.forChild(CoalInfo),
  ],
  exports: [
    CoalInfo
  ]
})
export class CoalInfoModule {}
