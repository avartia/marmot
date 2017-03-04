import { Injectable }    from '@angular/core';

import {Color} from './color'
import {ColorConstructor, ColorServiceInterface} from './color.interface'

@Injectable()
export class ColorService implements ColorServiceInterface{

  constructor() {

   }

  create(r:number,
         g:number,
         b:number,
         a?:number): Color{
    return this.createColor(Color, r, g, b, a);
  }

  private createColor(colorConstructor: ColorConstructor,
                      r:number,
                      g:number,
                      b:number,
                      a:number): Color{
    return new colorConstructor(r, g, b, a);
  }

}