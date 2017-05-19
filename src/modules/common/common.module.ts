import { NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { IonicModule, Events } from 'ionic-angular';

import { MomentPipe, TimeagoPipe } from './pipes/moment.pipe';
import { Nl2brPipe } from './pipes/nl2br.pipe';

import { AppService } from './services/app.service';
import { Helper } from './services/helper.service';
import { AuthService } from './services/auth.service';
import { MenuService } from './services/menu.service';
import { SystemService } from './services/system.service';
import { FileUploadService } from './services/fileUpload.service';

import { UtilityComponent } from './pages/utilityComponent';


@NgModule({
  imports: [
    IonicModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [
    MomentPipe,
    TimeagoPipe,
    Nl2brPipe,
    UtilityComponent,
  ],
  entryComponents: [
  ],
  providers: [
    Storage,
    Helper,
    AppService,
    AuthService,
    MenuService,
    SystemService,
    FileUploadService,
    UtilityComponent,
  ],
  exports: [
    IonicModule,
    MomentPipe,
    TimeagoPipe,
    Nl2brPipe,
  ],
})
export class CommonModule {
  constructor(
    public heyApp: AppService,
    public events: Events,
    public utilityComp: UtilityComponent
  ) {
    // // subscribe events
    // this.subscribeEvents();
    //
    // // get auth
    // this.heyApp.authService.getIsAuth();
    //
    // // utilityComp register events
    // this.utilityComp.registerEvents();
  }


  //
  // Subscribe events
  subscribeEvents() {
    // subscribe auth logIn
    this.events.subscribe('auth:logIn', (userInfo) => {
      this.heyApp.authService.logIn(userInfo);
    });


    // subscribe auth logOut
    this.events.subscribe('auth:logOut', () => {
      this.heyApp.authService.logOut();
    });
  }
}
