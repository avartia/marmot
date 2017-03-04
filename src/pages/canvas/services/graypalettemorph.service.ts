import { Injectable }    from '@angular/core';

import {GrayPaletteMorph} from './grayPaletteMorph'
import {GrayPaletteMorphConstructor, GrayPaletteMorphServiceInterface} from './graypalettemorph.interface'

@Injectable()
export class GrayPaletteMorphService implements GrayPaletteMorphServiceInterface{

  constructor() {

   }

  create(): GrayPaletteMorph{
    return this.createGrayPaletteMorph(GrayPaletteMorph);
  }

  private createGrayPaletteMorph(grayPaletteMorphConstructor: GrayPaletteMorphConstructor): GrayPaletteMorph {
    return new grayPaletteMorphConstructor();
  }
}