import { Injectable }    from '@angular/core';

import { ScrollFrameMorph } from './scrollframemorph'
import { ScrollFrameMorphServiceInterface } from './scrollframemorph.interface'
import { Color } from "./color";
import { RectangleService } from "./rectangle.service";

@Injectable()
export class ScrollFrameMorphService implements ScrollFrameMorphServiceInterface{

  constructor(private rectangleService:RectangleService) {

   }

  create(): ScrollFrameMorph{
      let bounds = this.rectangleService.create(0, 0, 50, 40);
      let color = new Color(255, 250, 245);
      return new ScrollFrameMorph(color, bounds);
  }



}