import { Injectable }    from '@angular/core';

import {FrameMorph} from './FrameMorph'
import {FrameMorphConstructor, FrameMorphServiceInterface} from './framemorph.interface'

@Injectable()
export class FrameMorphService implements FrameMorphServiceInterface{

  constructor() {

   }

  create(): FrameMorph{
    return this.createFrameMorph(FrameMorph);
  }

  private createFrameMorph(frameMorphConstructor: FrameMorphConstructor): FrameMorph {
    return new frameMorphConstructor() as FrameMorph;
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}