import { Injectable }    from '@angular/core';
import { RectangleService } from './rectangle.service'
import { Morph } from './morph'
import { MorphServiceInterface } from './morph.interface'
import { Color } from "./color";
import { ShadowMorphService } from './shadowmorph.service';

@Injectable()
export class MorphService implements MorphServiceInterface{

  constructor(private rectangleService:RectangleService,
              private shadowMorphService:ShadowMorphService) {

   }

  create(): Morph{
    let bounds = this.rectangleService.create(0, 0, 50, 40);
    let color = new Color(80, 80, 80);
    return new Morph(color, bounds, true, this.shadowMorphService);
  }


}