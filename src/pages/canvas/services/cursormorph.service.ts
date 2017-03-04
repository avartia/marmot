import { Injectable }    from '@angular/core';

import {CursorMorph} from './CursorMorph'
import {CursorMorphConstructor, CursorMorphServiceInterface} from './cursormorph.interface'

@Injectable()
export class CursorMorphService implements CursorMorphServiceInterface{

  constructor() {

   }

  create(): CursorMorph{
    return this.createCursorMorph(CursorMorph);
  }

  private createCursorMorph(cursorMorphConstructor: CursorMorphConstructor): CursorMorph {
    return new cursorMorphConstructor() as CursorMorph;
  }

}