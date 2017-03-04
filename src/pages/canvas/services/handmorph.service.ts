import { Injectable }    from '@angular/core';

import {HandMorph} from './HandMorph'
import {HandMorphConstructor, HandMorphServiceInterface} from './handmorph.interface'
import {WorldMorph} from './worldmorph'

@Injectable()
export class HandMorphService implements HandMorphServiceInterface{

  constructor() {

   }

  create(aWorld:WorldMorph): HandMorph{
    return  this.createHandMorph(HandMorph, aWorld);
  }

  private createHandMorph(handMorphConstructor: HandMorphConstructor,
                          aWorld:WorldMorph): HandMorph {
    return new handMorphConstructor(aWorld) as HandMorph;
  }

}