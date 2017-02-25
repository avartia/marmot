import { Injectable }    from '@angular/core';

import {ScrollFrameMorph} from './ScrollFrameMorph'
import {ScrollFrameMorphConstructor, ScrollFrameMorphInterface} from './shared.interface'

@Injectable()
export class ScrollFrameMorphService{

  constructor() {

   }

  create(): ScrollFrameMorph{
    return this.createScrollFrameMorph(ScrollFrameMorph) as ScrollFrameMorph;
  }

  private createScrollFrameMorph(scrollFrameMorphConstructor: ScrollFrameMorphConstructor): ScrollFrameMorphInterface {
    return new scrollFrameMorphConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}