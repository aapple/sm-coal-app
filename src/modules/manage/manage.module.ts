import { NgModule } from '@angular/core';
import { CommonModule } from '../common/common.module';

import { AppService } from '../common/services/app.service';
import { ManageService } from './services/manage.service';

import { LogisticsManagePage } from './pages/logistics-manage/logistics-manage';
import {FactoryManage} from "./pages/factory-manage/factory-manage";
import {InfostoreManage} from "./pages/infostore-manage/infostore-manage";
import {FactoryAddUpdate} from "./pages/factory-manage/factory-add-update";
import {InfostoreAddUpdate} from "./pages/infostore-manage/infostore-add-update";
import {LogisticsAddUpdate} from "./pages/logistics-manage/logistics-add-update";
import {CoalPriceManagePage} from "./pages/price-manage/coal-price-manage";
import {LogisticsList} from "./pages/logistics-manage/logistics-list";
import {CokePriceManage} from "./pages/price-manage/coke-price-manage";
import {LifestoreAddUpdate} from "./pages/lifestore-manage/lifestore-add-update";
import {LifestoreManage} from "./pages/lifestore-manage/lifestore-manage";
import {ProductListPage} from "./pages/price-manage/product-list";
import {UserSelectPage} from "./pages/user-select/user-select";
import {TrafficManagePage} from "./pages/traffic-manage/traffic-manage";
import {TrafficAddUpdatePage} from "./pages/traffic-manage/traffic-add-update";
import {NewsManagePage} from "./pages/news-manage/news-manage";
import {NewsAddUpdatePage} from "./pages/news-manage/news-add-update";
import {IonicImageViewerModule} from "ionic-img-viewer";


@NgModule({
  imports: [
    CommonModule,
    IonicImageViewerModule
  ],
  declarations: [
    FactoryManage,
    InfostoreManage,
    FactoryAddUpdate,
    InfostoreAddUpdate,
    LogisticsList,
    CokePriceManage,
    CoalPriceManagePage,
    LogisticsAddUpdate,
    LogisticsManagePage,
    LifestoreManage,
    LifestoreAddUpdate,
    ProductListPage,
    UserSelectPage,
    TrafficManagePage,
    TrafficAddUpdatePage,
    NewsManagePage,
    NewsAddUpdatePage
  ],
  entryComponents: [
    FactoryManage,
    InfostoreManage,
    FactoryAddUpdate,
    InfostoreAddUpdate,
    LogisticsList,
    CokePriceManage,
    CoalPriceManagePage,
    LogisticsAddUpdate,
    LogisticsManagePage,
    LifestoreManage,
    LifestoreAddUpdate,
    ProductListPage,
    UserSelectPage,
    TrafficManagePage,
    TrafficAddUpdatePage,
    NewsManagePage,
    NewsAddUpdatePage
  ],
  providers: [
    ManageService,
  ],
  exports: [
  ],
})
export class ManageModule {
  constructor(
    public heyApp: AppService
  ) {

    this.subscribeEvents();
  }

  // Subscribe events
  subscribeEvents() {
  }
}
