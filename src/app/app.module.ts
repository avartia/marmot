import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WorldMorphPage } from '../pages/worldmorph/worldmorph';

import { WorldMorphService} from '../pages/worldmorph/services/worldmorph.service'
import { PointService} from '../pages/worldmorph/services/point.service'

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WorldMorphPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WorldMorphPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, 
              WorldMorphService, 
              PointService ]
})
export class AppModule {}
