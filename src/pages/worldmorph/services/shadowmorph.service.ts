import { Injectable }    from '@angular/core';

import {ShadowMorph} from './ShadowMorph'
import {ShadowMorphConstructor, ShadowMorphServiceInterface} from './shadowmorph.interface'

@Injectable()
export class ShadowMorphService implements ShadowMorphServiceInterface{

  constructor() {

   }

  create(): ShadowMorph{
    return this.createShadowMorph(ShadowMorph);
  }

  private createShadowMorph(shadowMorphConstructor: ShadowMorphConstructor): ShadowMorph {
    return new shadowMorphConstructor() as ShadowMorph; 
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}