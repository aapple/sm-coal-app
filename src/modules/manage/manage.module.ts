import { NgModule } from '@angular/core';
import { CommonModule } from '../common/common.module';

import { AppService } from '../common/services/app.service';
import { ManageService } from './services/manage.service';

import { CoalPriceManagePage } from './pages/coal-price-manage';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CoalPriceManagePage
  ],
  entryComponents: [
    CoalPriceManagePage
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
