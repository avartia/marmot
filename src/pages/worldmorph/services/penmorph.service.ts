import { Injectable }    from '@angular/core';

import {PenMorph} from './PenMorph'
import {PenMorphConstructor, PenMorphServiceInterface} from './penmorph.interface'

@Injectable()
export class PenMorphService implements PenMorphServiceInterface{

  constructor() {

   }

  create(): PenMorph{
    return this.createPenMorph(PenMorph);
  }

  private createPenMorph(penMorphConstructor: PenMorphConstructor): PenMorph {
    return new penMorphConstructor() as PenMorph;
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}