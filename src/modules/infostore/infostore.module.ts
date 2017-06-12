import { NgModule } from '@angular/core';
import { CommonModule } from '../common/common.module';

import { AppService } from '../common/services/app.service';
import { InfostoreService } from './services/infostore.service';

import { InfostorePage } from './pages/infostore';
import { InfostoreDetailPage } from './pages/infostore-detail';
import {LogisticsDetailPage} from "./pages/logistics-detail";
import {LogisticsPage} from "./pages/logistics";


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    InfostorePage,
    InfostoreDetailPage,
    LogisticsDetailPage,
    LogisticsPage
  ],
  entryComponents: [
    InfostorePage,
    InfostoreDetailPage,
    LogisticsDetailPage,
    LogisticsPage
  ],
  providers: [
    InfostoreService
  ],
  exports: [
  ],
})
export class InfostoreModule {
  constructor(
    public heyApp: AppService
  ) {

    this.subscribeEvents();
  }

  // Subscribe events
  subscribeEvents() {
  }
}
