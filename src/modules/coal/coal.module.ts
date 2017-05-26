import { NgModule } from '@angular/core';
import { CommonModule } from '../common/common.module';

import { AppService } from '../common/services/app.service';
import { CoalService } from './services/coal.service';

import { CoalPriceDetailPage } from './pages/coal-price-detail';
import { CoalPage } from './pages/coal';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CoalPage,
    CoalPriceDetailPage
  ],
  entryComponents: [
    CoalPage,
    CoalPriceDetailPage
  ],
  providers: [
    CoalService,
  ],
  exports: [
  ],
})
export class CoalModule {
  constructor(
    public heyApp: AppService,
    public coalService: CoalService
  ) {

    this.subscribeEvents();
  }

  // Subscribe events
  subscribeEvents() {
  }
}
