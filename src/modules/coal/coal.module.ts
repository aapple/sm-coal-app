import { NgModule } from '@angular/core';
import { CommonModule } from '../common/common.module';

import { AppService } from '../common/services/app.service';
import { CoalService } from './services/coal.service';

import { CoalPage } from './pages/coal';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CoalPage
  ],
  entryComponents: [
    CoalPage
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

    //coalService.getIndex();

    // setInterval(() => {
    //   coalService.testCokkie();
    // }, 5000);

    this.subscribeEvents();
  }

  // Subscribe events
  subscribeEvents() {
  }
}
