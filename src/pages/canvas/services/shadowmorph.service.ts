import { Injectable }    from '@angular/core';

import {ShadowMorph} from './shadowmorph'
import { ShadowMorphServiceInterface} from './shadowmorph.interface'
import { RectangleService } from './rectangle.service'
import { Color } from "./color";

@Injectable()
export class ShadowMorphService implements ShadowMorphServiceInterface{

  constructor(private rectangleService:RectangleService) {

   }

  create(): ShadowMorph{
      let bounds = this.rectangleService.create(0, 0, 50, 40);
      let color = new Color(80, 80, 80);
    return new ShadowMorph(color, bounds);
  }


}