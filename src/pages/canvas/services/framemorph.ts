import {FrameMorphInterface} from './framemorph.interface'
import {Morph} from './morph'
import {Rectangle} from './rectangle'
import {Point} from './point'
import { Color } from './color'
import { ShadowMorph } from "./shadowmorph";
import { ScrollFrameMorphInterface } from "./scrollframemorph.interface";

export class FrameMorph extends Morph implements FrameMorphInterface{
  public scrollFrame:ScrollFrameMorphInterface;

  constructor(color:Color,
              bounds:Rectangle) { 
        super(color, bounds);
        this.scrollFrame=null;
        this.color=color;
        this.drawNew();
        this.acceptsDrops=true;
  }
  setScrollFrame(aScrollFrame:ScrollFrameMorphInterface):void{
        this.scrollFrame=aScrollFrame;
        this.isDraggable = false;
        this.noticesTransparentClick = false;
        this.alpha = 0;
  }
  fullBounds():Rectangle{
        var shadow = this.getShadow() as ShadowMorph;
        if (shadow !== null) {
            return this.bounds.merge(shadow.bounds);
        }
        return this.bounds;
  }

  // use only for shadows
  fullImage():HTMLCanvasElement{
        return;
  }

  fullDrawOn(aCanvas:HTMLCanvasElement,
             aRect:Rectangle):void{
      let rectangle = aRect || this.fullBounds();
      let dirty = this.bounds.intersect(rectangle);
      if (!dirty.extent().gt(new Point(0, 0))) {
          return null;
      }
      this.drawOn(aCanvas, dirty);
      this.children.forEach(child => {
          if (child instanceof ShadowMorph) {
              child.fullDrawOn(aCanvas, rectangle);
          } else {
              (child as Morph).fullDrawOn(aCanvas, dirty);
          }
      });
  }

  // FrameMorph navigation:
  topMorphAt(point:Point):Morph{
    let i:number;
    let result:Morph;
    if (!(this.isVisible && this.bounds.containsPoint(point))) {
        return null;
    }
    for (i = this.children.length - 1; i >= 0; i -= 1) {
        result = (this.children[i] as Morph).topMorphAt(point);
        if (result) {return result; }
    }
    return this.noticesTransparentClick ||
        !this.isTransparentAt(point) ? this : null;
  }

  // FrameMorph scrolling support:
  adjustBounds():void{     
  }

  // FrameMorph dragging & dropping of contents:
  reactToDropOf():void{
      this.adjustBounds();
  }

  reactToGrabOf():void{
      this.adjustBounds();
  }
  

}