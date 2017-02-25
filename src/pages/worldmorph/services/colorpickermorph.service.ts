import { Injectable }    from '@angular/core';

import {ColorPickerMorph} from './ColorPickerMorph'
import {ColorPickerMorphConstructor, ColorPickerMorphInterface} from './shared.interface'

@Injectable()
export class ColorPickerMorphService{

  constructor() {

   }

  create(): ColorPickerMorph{
    return this.createColorPickerMorph(ColorPickerMorph) as ColorPickerMorph;
  }

  private createColorPickerMorph(colorPickerMorphConstructor: ColorPickerMorphConstructor): ColorPickerMorphInterface {
    return new colorPickerMorphConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}