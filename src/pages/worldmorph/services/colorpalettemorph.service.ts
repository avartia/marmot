import { Injectable }    from '@angular/core';

import {ColorPaletteMorph} from './ColorPaletteMorph'
import {ColorPaletteMorphConstructor, ColorPaletteMorphServiceInterface} from './colorpalettemorph.interface'

@Injectable()
export class ColorPaletteMorphService implements ColorPaletteMorphServiceInterface{

  constructor() {

   }

  create(): ColorPaletteMorph{
    return this.createColorPaletteMorph(ColorPaletteMorph) as ColorPaletteMorph;
  }

  private createColorPaletteMorph(colorPaletteMorphConstructor: ColorPaletteMorphConstructor): ColorPaletteMorph {
    return new colorPaletteMorphConstructor() as ColorPaletteMorph;
  }

}