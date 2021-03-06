import { Injectable }    from '@angular/core';

import {ColorPickerMorph} from './colorPickerMorph'
import {ColorPickerMorphConstructor, ColorPickerMorphServiceInterface} from './colorpickermorph.interface'

@Injectable()
export class ColorPickerMorphService implements ColorPickerMorphServiceInterface{

  constructor() {

   }

  create(): ColorPickerMorph{
    return this.createColorPickerMorph(ColorPickerMorph);
  }

  private createColorPickerMorph(colorPickerMorphConstructor: ColorPickerMorphConstructor): ColorPickerMorph {
    return new colorPickerMorphConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}