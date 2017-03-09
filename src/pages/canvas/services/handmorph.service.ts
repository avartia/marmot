import { Injectable }    from '@angular/core';

import { HandMorph } from './handmorph'
import { HandMorphServiceInterface } from './handmorph.interface'

@Injectable()
export class HandMorphService implements HandMorphServiceInterface{

  constructor() {

   }

  create(): HandMorph{
    return new HandMorph();
  }

}