import { NgModule } from '@angular/core';
import { CommonModule } from '../common/common.module';

import { AppService } from '../common/services/app.service';
import { InfostoreService } from './services/infostore.service';

import { InfostorePage } from './pages/infostore';
import { InfostoreDetailPage } from './pages/infostore-detail';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    InfostorePage,
    InfostoreDetailPage
  ],
  entryComponents: [
    InfostorePage,
    InfostoreDetailPage
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
