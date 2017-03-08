import { Injectable }    from '@angular/core';
import {RectangleService} from './rectangle.service'
import {Morph} from './morph'
import {MorphInterface, MorphServiceInterface} from './morph.interface'

@Injectable()
export class MorphService implements MorphServiceInterface{

  constructor(private rectangleService:RectangleService) {

   }

  create(): Morph{
    return new Morph(this.rectangleService);
  }


}