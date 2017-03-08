import { Injectable }    from '@angular/core';

import {ScrollFrameMorph} from './scrollframemorph'
import {ScrollFrameMorphServiceInterface} from './scrollframemorph.interface'

@Injectable()
export class ScrollFrameMorphService implements ScrollFrameMorphServiceInterface{

  constructor() {

   }

  create(): ScrollFrameMorph{
    return new ScrollFrameMorph();
  }



}