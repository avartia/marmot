import { Injectable }    from '@angular/core';

import {PenMorph} from './PenMorph'
import {PenMorphConstructor, PenMorphInterface} from './shared.interface'

@Injectable()
export class PenMorphService{

  constructor() {

   }

  create(): PenMorph{
    return this.createPenMorph(PenMorph) as PenMorph;
  }

  private createPenMorph(penMorphConstructor: PenMorphConstructor): PenMorphInterface {
    return new penMorphConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}