import { Injectable }    from '@angular/core';

import {ShadowMorph} from './shadowmorph'
import { ShadowMorphServiceInterface} from './shadowmorph.interface'

@Injectable()
export class ShadowMorphService implements ShadowMorphServiceInterface{

  constructor() {

   }

  create(): ShadowMorph{
    return new ShadowMorph();
  }


}