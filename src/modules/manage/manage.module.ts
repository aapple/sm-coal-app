import { NgModule } from '@angular/core';
import { CommonModule } from '../common/common.module';

import { AppService } from '../common/services/app.service';
import { ManageService } from './services/manage.service';

import { CoalPriceManagePage } from './pages/coal-price-manage';
import { LantanPriceManagePage } from './pages/lantan-price-manage';
import { LogisticsManagePage } from './pages/logistics-manage';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CoalPriceManagePage,
    LantanPriceManagePage,
    LogisticsManagePage
  ],
  entryComponents: [
    CoalPriceManagePage,
    LantanPriceManagePage,
    LogisticsManagePage
  ],
  providers: [
    ManageService,
  ],
  exports: [
  ],
})
export class ManageModule {
  constructor(
    public heyApp: AppService
  ) {

    this.subscribeEvents();
  }

  // Subscribe events
  subscribeEvents() {
  }
}
