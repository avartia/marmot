import { Injectable }    from '@angular/core';

import {PenMorph} from './penmorph'
import {PenMorphConstructor, PenMorphServiceInterface} from './penmorph.interface'
import { RectangleService } from './rectangle.service'

@Injectable()
export class PenMorphService implements PenMorphServiceInterface{

  constructor( private rectangleService:RectangleService) {

   }

  create(): PenMorph{
    return this.createPenMorph(PenMorph, this.rectangleService);
  }

  private createPenMorph(penMorphConstructor: PenMorphConstructor,
                         rectangleService:RectangleService): PenMorph {
    return new penMorphConstructor(rectangleService);
  }

}