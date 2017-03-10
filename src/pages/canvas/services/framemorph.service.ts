import { Injectable }    from '@angular/core';

import {FrameMorph} from './framemorph'
import {FrameMorphServiceInterface} from './framemorph.interface'
//import {ScrollFrameMorphService} from './scrollframemorph.service'
// import { ScrollFrameMorph } from './scrollframemorph'
import { RectangleService } from "./rectangle.service";
import { Color } from "./color";

@Injectable()
export class FrameMorphService implements FrameMorphServiceInterface {

  constructor(private rectangleService:RectangleService) {

   }

  create(): FrameMorph{
        let bounds = this.rectangleService.create(0, 0, 50, 40);
        let color = new Color(255, 250, 245);
    return new FrameMorph(color, bounds);
  }

}



