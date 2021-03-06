import { Injectable }    from '@angular/core';

import {StringFieldMorph} from './stringfieldmorph'
import {StringFieldMorphConstructor, StringFieldMorphServiceInterface} from './stringfieldmorph.interface'

@Injectable()
export class StringFieldMorphService implements StringFieldMorphServiceInterface{

  constructor() {

   }

  create(): StringFieldMorph{
    return this.createStringFieldMorph(StringFieldMorph);
  }

  private createStringFieldMorph(stringFieldMorphConstructor: StringFieldMorphConstructor): StringFieldMorph {
    return new stringFieldMorphConstructor();
  }

}