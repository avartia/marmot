import { Injectable }    from '@angular/core';

import {GrayPaletteMorph} from './GrayPaletteMorph'
import {GrayPaletteMorphConstructor, GrayPaletteMorphInterface} from './shared.interface'

@Injectable()
export class GrayPaletteMorphService{

  constructor() {

   }

  create(): GrayPaletteMorph{
    return this.createGrayPaletteMorph(GrayPaletteMorph) as GrayPaletteMorph;
  }

  private createGrayPaletteMorph(grayPaletteMorphConstructor: GrayPaletteMorphConstructor): GrayPaletteMorphInterface {
    return new grayPaletteMorphConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}