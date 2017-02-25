import { Injectable }    from '@angular/core';

import {StringMorph} from './StringMorph'
import {StringMorphConstructor, StringMorphInterface} from './shared.interface'

@Injectable()
export class StringMorphService{

  constructor() {

   }

  create(): StringMorph{
    return this.createStringMorph(StringMorph) as StringMorph;
  }

  private createStringMorph(stringMorphConstructor: StringMorphConstructor): StringMorphInterface {
    return new stringMorphConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}