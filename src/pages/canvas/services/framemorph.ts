import {FrameMorphInterface} from './framemorph.interface'
import {Morph} from './morph'
import {ScrollFrameMorph} from './scrollframemorph'
import {Rectangle} from './rectangle'
import {Point} from './point'
import {Color} from './color'

export class FrameMorph extends Morph implements FrameMorphInterface{
  public scrollFrame:ScrollFrameMorph;

  constructor(color:Color,
              bounds:Rectangle) { 
    super(color, bounds);
    this.scrollFrame=null;
    this.color=color;
    this.drawNew();
    this.acceptsDrops=true;

 
  }
  setScrollFrame(aScrollFrame:ScrollFrameMorph):void{
    this.scrollFrame=aScrollFrame;
    this.isDraggable = false;
    this.noticesTransparentClick = false;
    this.alpha = 0;
  }
  fullBounds():Rectangle{
    var shadow = this.getShadow();
    if (shadow !== null) {
        return this.bounds.merge(shadow.bounds);
    }
    return this.bounds;
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