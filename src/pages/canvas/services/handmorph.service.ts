import { Injectable }    from '@angular/core';

import { HandMorph } from './handmorph'
import { HandMorphServiceInterface } from './handmorph.interface'
import { RectangleService } from "./rectangle.service";
import { Color } from "./color";

@Injectable()
export class HandMorphService implements HandMorphServiceInterface{

  constructor(private rectangleService:RectangleService) {

   }

  create(): HandMorph{
      let bounds = this.rectangleService.create(0, 0, 0, 0);
      let color = new Color(80, 80, 80);
      return new HandMorph(color, bounds);
  }

}