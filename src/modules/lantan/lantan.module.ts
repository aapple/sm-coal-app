import { NgModule } from '@angular/core';
import { CommonModule } from '../common/common.module';

import { AppService } from '../common/services/app.service';
import { LantanService } from './services/lantan.service';

import { LantanPage } from './pages/lantan';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LantanPage
  ],
  entryComponents: [
    LantanPage
  ],
  providers: [
    LantanService,
  ],
  exports: [
  ],
})
export class LantanModule {
  constructor(
    public heyApp: AppService
  ) {

    this.subscribeEvents();
  }

  // Subscribe events
  subscribeEvents() {
  }
}
