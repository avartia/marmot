import { Injectable }    from '@angular/core';

import {BoxMorph} from './boxMorph'
import {BoxMorphConstructor, BoxMorphServiceInterface} from './boxmorph.interface'

@Injectable()
export class BoxMorphService implements BoxMorphServiceInterface{

  constructor() {

   }

  create(): BoxMorph{
    return this.createBoxMorph(BoxMorph) as BoxMorph;
  }

  private createBoxMorph(boxMorphConstructor: BoxMorphConstructor): BoxMorph {
    return new boxMorphConstructor() as BoxMorph;
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}