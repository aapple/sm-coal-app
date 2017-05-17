import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {PersonPage} from "../person-page/person-page";
import {CoalPricePage} from "../coal-price-page/coal-price-page";
import {LantanPricePage} from "../lantan-price-page/lantan-price-page";
import {InfoStorePage} from "../info-store-page/info-store-page";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CoalPricePage;
  tab2Root = LantanPricePage;
  tab3Root = InfoStorePage;
  tab4Root = PersonPage;

  constructor() {

  }
}
