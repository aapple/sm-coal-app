import { NgModule } from '@angular/core';
import { CommonModule } from '../common/common.module';

import { AppService } from '../common/services/app.service';
import { HomeService } from './services/home.service';

import { HomePage } from './pages/home';

import {AreaList} from "./pages/area-list";
import {LifestoreDetail} from "./pages/lifestore/lifestore-detail";
import {LifestoreList} from "./pages/lifestore/lifestore-list";
import {NewsDetailPage} from "./pages/news/news-detail";
import {NewsListPage} from "./pages/news/news-list";
import {IonicImageViewerModule} from "ionic-img-viewer";



@NgModule({
  imports: [
    CommonModule,
    IonicImageViewerModule
  ],
  declarations: [
    HomePage,
    LifestoreDetail,
    LifestoreList,
    NewsDetailPage,
    NewsListPage,
    AreaList
  ],
  entryComponents: [
    HomePage,
    LifestoreDetail,
    LifestoreList,
    NewsDetailPage,
    NewsListPage,
    AreaList
  ],
  providers: [
    HomeService,
  ],
  exports: [
  ],
})
export class HomeModule {
  constructor(
    public heyApp: AppService
  ) {

    this.subscribeEvents();
  }

  // Subscribe events
  subscribeEvents() {
  }
}
