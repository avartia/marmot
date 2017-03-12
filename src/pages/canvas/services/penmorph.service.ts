import { Injectable }    from '@angular/core';

import {PenMorph} from './penmorph'
import {PenMorphServiceInterface} from './penmorph.interface'
import { RectangleService } from './rectangle.service'
import { Color } from "./color";
import { ShadowMorphService } from "./shadowmorph.service";

@Injectable()
export class PenMorphService implements PenMorphServiceInterface{

  constructor(public rectangleService:RectangleService,
              private shadowMorphService:ShadowMorphService) {

   }

  create(): PenMorph{
    let bounds = this.rectangleService.create(0, 0, 60, 60);
    let color = new Color(80, 80, 80);
    return new PenMorph(bounds, color, this.shadowMorphService, this.rectangleService);
  }

}