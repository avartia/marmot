import { Injectable }    from '@angular/core';

import {Color} from './color'
import {ColorConstructor, ColorInterface} from './shared.interface'

@Injectable()
export class ColorService{

  constructor() {

   }

  create(): Color{
    return this.createColor(Color) as Color;
  }

  private createColor(colorConstructor: ColorConstructor): ColorInterface {
    return new colorConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}