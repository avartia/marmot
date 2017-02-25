import { Injectable }    from '@angular/core';

import {CircleBoxMorph} from './CircleBoxMorph'
import {CircleBoxMorphConstructor, CircleBoxMorphServiceInterface} from './circleboxmorph.interface'

@Injectable()
export class CircleBoxMorphService implements CircleBoxMorphServiceInterface{

  constructor() {

   }

  create(): CircleBoxMorph{
    return this.createCircleBoxMorph(CircleBoxMorph);
  }

  private createCircleBoxMorph(circleBoxMorphConstructor: CircleBoxMorphConstructor): CircleBoxMorph {
    return new circleBoxMorphConstructor() as CircleBoxMorph;
  }

}