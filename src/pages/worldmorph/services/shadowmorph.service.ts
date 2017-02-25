import { Injectable }    from '@angular/core';

import {ShadowMorph} from './ShadowMorph'
import {ShadowMorphConstructor, ShadowMorphInterface} from './shared.interface'

@Injectable()
export class ShadowMorphService{

  constructor() {

   }

  create(): ShadowMorph{
    return this.createShadowMorph(ShadowMorph) as ShadowMorph;
  }

  private createShadowMorph(shadowMorphConstructor: ShadowMorphConstructor): ShadowMorphInterface {
    return new shadowMorphConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}