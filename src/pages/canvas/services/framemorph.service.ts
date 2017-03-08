import { Injectable }    from '@angular/core';

import {FrameMorph} from './framemorph'
import {FrameMorphServiceInterface} from './framemorph.interface'
//import {ScrollFrameMorphService} from './scrollframemorph.service'
import {ScrollFrameMorph} from './scrollframemorph'

@Injectable()
export class FrameMorphService implements FrameMorphServiceInterface{

  constructor() {

   }

  create(): FrameMorph{
    return new FrameMorph();
  }

}


