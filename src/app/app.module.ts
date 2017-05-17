import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {PersonPage} from "../pages/person-page/person-page";
import {LantanPricePage} from "../pages/lantan-price-page/lantan-price-page";
import {CoalPricePage} from "../pages/coal-price-page/coal-price-page";
import {LoginPage} from "../pages/login-page/login-page";
import {InfoStorePage} from "../pages/info-store-page/info-store-page";
import {LocalStorageService} from "../providers/local-storage-service";
import {SessionStorageService} from "../providers/session-storage-service";
import {StorageService} from "../providers/storage-service";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PersonPage,
    LantanPricePage,
    CoalPricePage,
    LoginPage,
    InfoStorePage,
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
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PersonPage,
    LantanPricePage,
    CoalPricePage,
    LoginPage,
    InfoStorePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalStorageService,
    SessionStorageService,
    StorageService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
