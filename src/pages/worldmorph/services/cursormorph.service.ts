import { Injectable }    from '@angular/core';

import {CursorMorph} from './CursorMorph'
import {CursorMorphConstructor, CursorMorphInterface} from './shared.interface'

@Injectable()
export class CursorMorphService{

  constructor() {

   }

  create(): CursorMorph{
    return this.createCursorMorph(CursorMorph) as CursorMorph;
  }

  private createCursorMorph(cursorMorphConstructor: CursorMorphConstructor): CursorMorphInterface {
    return new cursorMorphConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}