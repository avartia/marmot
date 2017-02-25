import { Injectable }    from '@angular/core';

import {FrameMorph} from './FrameMorph'
import {FrameMorphConstructor, FrameMorphInterface} from './shared.interface'

@Injectable()
export class FrameMorphService{

  constructor() {

   }

  create(): FrameMorph{
    return this.createFrameMorph(FrameMorph) as FrameMorph;
  }

  private createFrameMorph(frameMorphConstructor: FrameMorphConstructor): FrameMorphInterface {
    return new frameMorphConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}