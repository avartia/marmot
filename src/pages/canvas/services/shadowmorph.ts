import { ShadowMorphInterface } from './shadowmorph.interface'
import { Morph } from './morph'
import { Color } from "./color";
import { Rectangle } from "./rectangle";
export class ShadowMorph extends Morph implements ShadowMorphInterface {


  constructor(color:Color, bounds:Rectangle) { 
    super(color, bounds, true);

  }

  topMorphAt(): Morph {
      return null;
  }

  

}