import { Injectable }    from '@angular/core';

import {BlinkerMorph} from './BlinkerMorph'
import {BlinkerMorphConstructor, BlinkerMorphInterface} from './shared.interface'

@Injectable()
export class BlinkerMorphService{

  constructor() {

   }

  create(): BlinkerMorph{
    return this.createBlinkerMorph(BlinkerMorph) as BlinkerMorph;
  }

  private createBlinkerMorph(blinkerMorphConstructor: BlinkerMorphConstructor): BlinkerMorphInterface {
    return new blinkerMorphConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}