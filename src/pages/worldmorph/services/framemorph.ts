import {FrameMorphInterface} from './framemorph.interface'
import {Morph} from './morph'
import {MorphInterface} from './morph.interface'
import {ScrollFrameMorphInterface} from './scrollframemorph.interface'
import {RectangleInterface} from './rectangle.interface'
import {PointInterface} from './point.interface'

export class FrameMorph extends Morph implements FrameMorphInterface{

  constructor(public scrollFrame:ScrollFrameMorphInterface = null) { 
    super();
  }

  fullBounds():RectangleInterface{
    return;
  }

  // use only for shadows
  fullImage():HTMLCanvasElement{
    return
  }

  fullDrawOn(aCanvas:HTMLCanvasElement,
             aRect:RectangleInterface):void{
    return
  }

  // FrameMorph navigation:
  topMorphAt(point:PointInterface):MorphInterface{
    return
  }

  // FrameMorph scrolling support:
  adjustBounds():void{
    return
  }

  // FrameMorph dragging & dropping of contents:
  reactToDropOf():void{
    return;
  }

  reactToGrabOf():void{
    return;
  }
  

}