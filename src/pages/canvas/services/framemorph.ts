import {FrameMorphInterface} from './framemorph.interface'
import {Morph} from './morph'
import {ScrollFrameMorph} from './scrollframemorph'
import {Rectangle} from './rectangle'
import {Point} from './point'

export class FrameMorph extends Morph implements FrameMorphInterface{

  constructor(public scrollFrame:ScrollFrameMorph = null) { 
    super();
  }

  fullBounds():Rectangle{
    return;
  }

  // use only for shadows
  fullImage():HTMLCanvasElement{
    return
  }

  fullDrawOn(aCanvas:HTMLCanvasElement,
             aRect:Rectangle):void{
  }

  // FrameMorph navigation:
  topMorphAt(point:Point):Morph{
    return
  }

  // FrameMorph scrolling support:
  adjustBounds():void{
  }

  // FrameMorph dragging & dropping of contents:
  reactToDropOf():void{
  }

  reactToGrabOf():void{
  }
  

}