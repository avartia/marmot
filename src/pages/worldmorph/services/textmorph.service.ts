import { Injectable }    from '@angular/core';

import {TextMorph} from './TextMorph'
import {TextMorphConstructor, TextMorphInterface} from './shared.interface'

@Injectable()
export class TextMorphService{

  constructor() {

   }

  create(): TextMorph{
    return this.createTextMorph(TextMorph) as TextMorph;
  }

  private createTextMorph(textMorphConstructor: TextMorphConstructor): TextMorphInterface {
    return new textMorphConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}