import { NgModule } from '@angular/core';
import { CommonModule } from '../common/common.module';

import { AppService } from '../common/services/app.service';
import { InfostoreService } from './services/infostore.service';

import { InfostorePage } from './pages/infostore/infostore';
import { InfostoreDetailPage } from './pages/infostore/infostore-detail';
import {LogisticsDetailPage} from "./pages/logistics/logistics-detail";
import {LogisticsPage} from "./pages/logistics/logistics";
import {LogisticsListPage} from "./pages/logistics/logistics-list";


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    InfostorePage,
    InfostoreDetailPage,
    LogisticsDetailPage,
    LogisticsPage,
    LogisticsListPage
  ],
  entryComponents: [
    InfostorePage,
    InfostoreDetailPage,
    LogisticsDetailPage,
    LogisticsPage,
    LogisticsListPage
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
