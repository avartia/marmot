import { Injectable }    from '@angular/core';

import {StringFieldMorph} from './StringFieldMorph'
import {StringFieldMorphConstructor, StringFieldMorphInterface} from './shared.interface'

@Injectable()
export class StringFieldMorphService{

  constructor() {

   }

  create(): StringFieldMorph{
    return this.createStringFieldMorph(StringFieldMorph) as StringFieldMorph;
  }

  private createStringFieldMorph(stringFieldMorphConstructor: StringFieldMorphConstructor): StringFieldMorphInterface {
    return new stringFieldMorphConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}