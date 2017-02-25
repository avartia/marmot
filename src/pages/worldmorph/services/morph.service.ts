import { Injectable }    from '@angular/core';

import {Morph} from './morph'
import {MorphConstructor, MorphInterface, MorphServiceInterface} from './morph.interface'

@Injectable()
export class MorphService implements MorphServiceInterface{

  constructor() {

   }

  create(): Morph{
    return this.createMorph(Morph) as Morph;
  }

  private createMorph(morphConstructor: MorphConstructor): MorphInterface {
    return new morphConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}