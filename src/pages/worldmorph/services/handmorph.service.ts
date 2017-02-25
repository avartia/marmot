import { Injectable }    from '@angular/core';

import {HandMorph} from './HandMorph'
import {HandMorphConstructor, HandMorphServiceInterface} from './handmorph.interface'

@Injectable()
export class HandMorphService implements HandMorphServiceInterface{

  constructor() {

   }

  create(): HandMorph{
    return this.createHandMorph(HandMorph);
  }

  private createHandMorph(handMorphConstructor: HandMorphConstructor): HandMorph {
    return new handMorphConstructor() as HandMorph;
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}