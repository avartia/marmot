import { Injectable }    from '@angular/core';

import {HandMorph} from './HandMorph'
import {HandMorphConstructor, HandMorphInterface} from './shared.interface'

@Injectable()
export class HandMorphService{

  constructor() {

   }

  create(): HandMorph{
    return this.createHandMorph(HandMorph) as HandMorph;
  }

  private createHandMorph(handMorphConstructor: HandMorphConstructor): HandMorphInterface {
    return new handMorphConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}