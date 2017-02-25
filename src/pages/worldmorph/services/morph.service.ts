import { Injectable }    from '@angular/core';

import {Morph} from './morph'
import {MorphConstructor, MorphInterface} from './shared.interface'

@Injectable()
export class MorphService{

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