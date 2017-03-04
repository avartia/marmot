import { Injectable }    from '@angular/core';

import { CursorMorph } from './CursorMorph'
import { CursorMorphConstructor, CursorMorphServiceInterface } from './cursormorph.interface'
import { TextMorph } from './textmorph'

@Injectable()
export class CursorMorphService implements CursorMorphServiceInterface{

  constructor() {

   }

  create(aStringOrTextMorph:string|TextMorph): CursorMorph{
    return this.createCursorMorph(CursorMorph, aStringOrTextMorph);
  }

  private createCursorMorph(cursorMorphConstructor: CursorMorphConstructor,
                            aStringOrTextMorph:string|TextMorph): CursorMorph {
    return new cursorMorphConstructor(aStringOrTextMorph) as CursorMorph;
  }

}