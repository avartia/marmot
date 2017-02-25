import { Injectable }    from '@angular/core';

import {TextMorph} from './TextMorph'
import {TextMorphConstructor, TextMorphInterface} from './textmorph.interface'

@Injectable()
export class TextMorphService{

  constructor() {

   }

  create(): TextMorph{
    return this.createTextMorph(TextMorph);
  }

  private createTextMorph(textMorphConstructor: TextMorphConstructor): TextMorph {
    return new textMorphConstructor() as TextMorph;
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}