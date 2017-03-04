import { Injectable }    from '@angular/core';

import {BlinkerMorph} from './BlinkerMorph'
import {BlinkerMorphConstructor, BlinkerMorphServiceInterface} from './blinkermorph.interface'

@Injectable()
export class BlinkerMorphService implements BlinkerMorphServiceInterface{

  constructor() {

   }

  create(): BlinkerMorph{
    return this.createBlinkerMorph(BlinkerMorph);
  }

  private createBlinkerMorph(blinkerMorphConstructor: BlinkerMorphConstructor): BlinkerMorph {
    return new blinkerMorphConstructor() as BlinkerMorph;
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}