import { ScrollFrameMorphInterface } from './scrollframemorph.interface'
import { FrameMorph } from './framemorph'
import { Color } from "./color";
import { Rectangle } from "./rectangle";
export class ScrollFrameMorph extends FrameMorph implements ScrollFrameMorphInterface{

  constructor(color:Color,
              bounds:Rectangle) { 
    super(color, bounds);
  }


  

}