import { Injectable }    from '@angular/core';

import {ColorPaletteMorph} from './ColorPaletteMorph'
import {ColorPaletteMorphConstructor, ColorPaletteMorphInterface} from './shared.interface'

@Injectable()
export class ColorPaletteMorphService{

  constructor() {

   }

  create(): ColorPaletteMorph{
    return this.createColorPaletteMorph(ColorPaletteMorph) as ColorPaletteMorph;
  }

  private createColorPaletteMorph(colorPaletteMorphConstructor: ColorPaletteMorphConstructor): ColorPaletteMorphInterface {
    return new colorPaletteMorphConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}