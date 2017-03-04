import { Injectable }    from '@angular/core';

import {TextMorph} from './TextMorph'
import {TextMorphConstructor, TextMorphServiceInterface} from './textmorph.interface'

@Injectable()
export class TextMorphService implements TextMorphServiceInterface{

  constructor() {

   }

  create(): TextMorph{
    return this.createTextMorph(TextMorph);
  }

  private createTextMorph(textMorphConstructor: TextMorphConstructor): TextMorph {
    return new textMorphConstructor();
  }

}