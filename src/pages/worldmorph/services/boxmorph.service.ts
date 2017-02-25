import { Injectable }    from '@angular/core';

import {BoxMorph} from './BoxMorph'
import {BoxMorphConstructor, BoxMorphInterface} from './shared.interface'

@Injectable()
export class BoxMorphService{

  constructor() {

   }

  create(): BoxMorph{
    return this.createBoxMorph(BoxMorph) as BoxMorph;
  }

  private createBoxMorph(boxMorphConstructor: BoxMorphConstructor): BoxMorphInterface {
    return new boxMorphConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}