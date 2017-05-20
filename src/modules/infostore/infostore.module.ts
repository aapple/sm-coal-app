import { NgModule } from '@angular/core';
import { CommonModule } from '../common/common.module';

import { AppService } from '../common/services/app.service';
import { InfostoreService } from './services/infostore.service';

import { InfostorePage } from './pages/infostore';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    InfostorePage
  ],
  entryComponents: [
    InfostorePage
  ],
  providers: [
    InfostorePage,
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
