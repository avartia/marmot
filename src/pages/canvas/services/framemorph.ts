import {FrameMorphInterface} from './framemorph.interface'
import {Morph} from './morph'
import {ScrollFrameMorph} from './scrollframemorph'
import {Rectangle} from './rectangle'
import {Point} from './point'
import {Color} from './color'

export class FrameMorph extends Morph implements FrameMorphInterface{
  public scrollFrame:ScrollFrameMorph;

  constructor() { 
    super();
    this.scrollFrame=null;
    this.color=new Color(255,250,245);
    this.drawNew();
    this.acceptsDrops=true;

    if (this.scrollFrame) {
        this.isDraggable = false;
        this.noticesTransparentClick = false;
        this.alpha = 0;
    }
  }
  setScrollFrame(aScrollFrame:ScrollFrameMorph):void{
    this.scrollFrame=aScrollFrame;
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