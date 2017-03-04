import { Injectable }    from '@angular/core';

import {BlinkerMorph} from './blinkermorph'
import {BlinkerMorphConstructor, BlinkerMorphServiceInterface} from './blinkerMorph.interface'

@Injectable()
export class BlinkerMorphService implements BlinkerMorphServiceInterface{

  constructor() {

   }

  create(rate?:number): BlinkerMorph{
    return this.createBlinkerMorph(BlinkerMorph,rate);
  }

  private createBlinkerMorph(blinkerMorphConstructor: BlinkerMorphConstructor,rate:number): BlinkerMorph {
    return new blinkerMorphConstructor(rate) as BlinkerMorph;
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}