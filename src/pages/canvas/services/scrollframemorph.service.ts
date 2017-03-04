import { Injectable }    from '@angular/core';

import {ScrollFrameMorph} from './ScrollFrameMorph'
import {ScrollFrameMorphConstructor, ScrollFrameMorphServiceInterface} from './scrollframemorph.interface'

@Injectable()
export class ScrollFrameMorphService implements ScrollFrameMorphServiceInterface{

  constructor() {

   }

  create(): ScrollFrameMorph{
    return this.createScrollFrameMorph(ScrollFrameMorph);
  }

  private createScrollFrameMorph(scrollFrameMorphConstructor: ScrollFrameMorphConstructor): ScrollFrameMorph {
    return new scrollFrameMorphConstructor() as ScrollFrameMorph;
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}