import { Injectable }    from '@angular/core';

import {ShadowMorph} from './ShadowMorph'
import {ShadowMorphConstructor, ShadowMorphServiceInterface} from './ShadowMorph.interface'

@Injectable()
export class ShadowMorphService implements ShadowMorphServiceInterface{

  constructor() {

   }

  create(): ShadowMorph{
    return this.createShadowMorph(ShadowMorph);
  }

  private createShadowMorph(ShadowMorphConstructor: ShadowMorphConstructor): ShadowMorph {
    return new ShadowMorphConstructor() as ShadowMorph;
  }


}