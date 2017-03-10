import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CanvasPage } from '../pages/canvas/canvas';

import { WorldMorphService } from '../pages/canvas/services/worldmorph.service'
import { FrameMorphService } from '../pages/canvas/services/framemorph.service'
import { HandMorphService } from '../pages/canvas/services/handmorph.service'
import { MorphService } from '../pages/canvas/services/morph.service'
import { PenMorphService } from '../pages/canvas/services/penmorph.service'
import { RectangleService } from '../pages/canvas/services/rectangle.service'

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CanvasPage
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
    CanvasPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, 
              WorldMorphService, 
              FrameMorphService,
              HandMorphService,
              MorphService,
              PenMorphService,
              RectangleService]
})
export class AppModule {}
