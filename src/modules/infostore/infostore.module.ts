import { NgModule } from '@angular/core';
import { CommonModule } from '../common/common.module';

import { AppService } from '../common/services/app.service';
import { InfostoreService } from './services/infostore.service';

import { InfostorePage } from './pages/infostore';
import { InfostoreDetailPage } from './pages/infostore-detail';
import {LogisticsDetailPage} from "./pages/logistics-detail";
import {LogisticsPage} from "./pages/logistics";
import {LogisticsListPage} from "./pages/logistics-list";


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
