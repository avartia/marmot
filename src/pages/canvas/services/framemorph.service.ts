import { Injectable }    from '@angular/core';

import {FrameMorph} from './framemorph'
import {FrameMorphConstructor, FrameMorphServiceInterface} from './framemorph.interface'
import {ScrollFrameMorph} from './scrollframemorph'

@Injectable()
export class FrameMorphService implements FrameMorphServiceInterface{

  constructor() {

   }

  create(aScrollFrame?:ScrollFrameMorph): FrameMorph{
    return this.createFrameMorph(FrameMorph, aScrollFrame);
  }

  private createFrameMorph(frameMorphConstructor: FrameMorphConstructor,
                           aScrollFrame:ScrollFrameMorph): FrameMorph {
    return new frameMorphConstructor(aScrollFrame);
  }

}