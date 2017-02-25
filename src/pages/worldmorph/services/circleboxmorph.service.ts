import { Injectable }    from '@angular/core';

import {CircleBoxMorph} from './CircleBoxMorph'
import {CircleBoxMorphConstructor, CircleBoxMorphInterface} from './shared.interface'

@Injectable()
export class CircleBoxMorphService{

  constructor() {

   }

  create(): CircleBoxMorph{
    return this.createCircleBoxMorph(CircleBoxMorph) as CircleBoxMorph;
  }

  private createCircleBoxMorph(circleBoxMorphConstructor: CircleBoxMorphConstructor): CircleBoxMorphInterface {
    return new circleBoxMorphConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}