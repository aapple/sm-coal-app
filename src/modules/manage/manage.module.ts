import { NgModule } from '@angular/core';
import { CommonModule } from '../common/common.module';

import { AppService } from '../common/services/app.service';
import { ManageService } from './services/manage.service';

import { ProductPriceManagePage } from './pages/product-price-manage';
import { LogisticsManagePage } from './pages/logistics-manage';
import {FactoryManage} from "./pages/factory-manage";
import {InfostoreManage} from "./pages/infostore-manage";
import {FactoryAddUpdate} from "./pages/factory-add-update";
import {InfostoreAddUpdate} from "./pages/infostore-add-update";
import {LogisticsAddUpdate} from "./pages/logistics-add-update";
import {ColaSalerPriceManage} from "./pages/cola-saler-price-manage";
import {LogisticsList} from "./pages/logistics-list";
import {CokePriceManage} from "./pages/coke-price-manage";
import {LifestoreAddUpdate} from "./pages/lifestore-add-update";
import {LifestoreManage} from "./pages/lifestore-manage";


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ProductPriceManagePage,
    FactoryManage,
    InfostoreManage,
    FactoryAddUpdate,
    InfostoreAddUpdate,
    LogisticsList,
    CokePriceManage,
    ColaSalerPriceManage,
    LogisticsAddUpdate,
    LogisticsManagePage,
    LifestoreManage,
    LifestoreAddUpdate
  ],
  entryComponents: [
    ProductPriceManagePage,
    FactoryManage,
    InfostoreManage,
    FactoryAddUpdate,
    InfostoreAddUpdate,
    LogisticsList,
    CokePriceManage,
    ColaSalerPriceManage,
    LogisticsAddUpdate,
    LogisticsManagePage,
    LifestoreManage,
    LifestoreAddUpdate
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
