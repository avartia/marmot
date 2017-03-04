import { Injectable }    from '@angular/core';

import {StringMorph} from './stringmorph'
import {StringMorphConstructor, StringMorphServiceInterface} from './stringmorph.interface'

@Injectable()
export class StringMorphService implements StringMorphServiceInterface{

  constructor() {

   }

  create(): StringMorph{
    return this.createStringMorph(StringMorph);
  }

  private createStringMorph(stringMorphConstructor: StringMorphConstructor): StringMorph {
    return new stringMorphConstructor();
  }

}