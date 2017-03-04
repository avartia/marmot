import { Injectable }    from '@angular/core';

import {StringMorph} from './StringMorph'
import {StringMorphConstructor, StringMorphServiceInterface} from './stringmorph.interface'

@Injectable()
export class StringMorphService{

  constructor() {

   }

  create(): StringMorph{
    return this.createStringMorph(StringMorph);
  }

  private createStringMorph(stringMorphConstructor: StringMorphConstructor): StringMorph {
    return new stringMorphConstructor() as StringMorph;
  }

}