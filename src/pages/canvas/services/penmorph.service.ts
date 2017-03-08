import { Injectable }    from '@angular/core';

import {PenMorph} from './penmorph'
import {PenMorphServiceInterface} from './penmorph.interface'
import { RectangleService } from './rectangle.service'

@Injectable()
export class PenMorphService implements PenMorphServiceInterface{

  constructor(private rectangleService:RectangleService) {

   }

  create(): PenMorph{
    return new PenMorph(this.rectangleService);
  }

}