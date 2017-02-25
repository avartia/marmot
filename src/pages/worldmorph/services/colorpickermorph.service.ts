import { Injectable }    from '@angular/core';

import {ColorPickerMorph} from './ColorPickerMorph'
import {ColorPickerMorphConstructor, ColorPickerMorphServiceInterface} from './colorpickermorph.interface'

@Injectable()
export class ColorPickerMorphService implements ColorPickerMorphServiceInterface{

  constructor() {

   }

  create(): ColorPickerMorph{
    return this.createColorPickerMorph(ColorPickerMorph);
  }

  private createColorPickerMorph(colorPickerMorphConstructor: ColorPickerMorphConstructor): ColorPickerMorph {
    return new colorPickerMorphConstructor() as ColorPickerMorph;
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}