import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { CommonModule } from '../modules/common/common.module';
import { UserModule } from '../modules/user/user.module';
import { NoticeModule } from '../modules/notice/notice.module';
import { TimelineModule } from '../modules/timeline/timeline.module';
import { TopicModule } from '../modules/topic/topic.module';


import {LocalStorageService} from "../providers/local-storage-service";
import {SessionStorageService} from "../providers/session-storage-service";
import {StorageService} from "../providers/storage-service";

import { InfostoreModule } from '../modules/infostore/infostore.module';
import { CoalModule } from '../modules/coal/coal.module';
import { ManageModule } from '../modules/manage/manage.module';
import {HomeModule} from "../modules/home/home.module";
import {MyErrorHandler} from "../modules/common/services/my-error-handler";


@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true,
      backButtonText: '',
      mode: 'ios',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition'
    }),
    CommonModule,
    UserModule,
    NoticeModule,
    TimelineModule,
    HomeModule,
    InfostoreModule,
    ManageModule,
    CoalModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalStorageService,
    SessionStorageService,
    StorageService,
    {provide: ErrorHandler, useClass: MyErrorHandler}
  ]
})
export class AppModule {}
