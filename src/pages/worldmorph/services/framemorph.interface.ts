import {MorphInterface} from './morph.interface'
import {ScrollFrameMorphInterface} from './scrollframemorph.interface'
import {RectangleInterface} from './rectangle.interface'
import {PointInterface} from './point.interface'
import {MenuMorphInterface} from './menumorph.interface'
//FrameMorph Class

export interface FrameMorphInterface extends MorphInterface{
  //public intance member and public intance methods of FrameMorph Class

  scrollFrame:ScrollFrameMorphInterface;

  acceptsDrops:boolean;

  //FrameMorph accessing(get framemorph bound with its shadow)
  fullBounds():RectangleInterface;

  //FrameMorph full image(use only for shadows?)
  fullImage():HTMLImageElement;

  //FrameMorph displaying(draw canvas of a FrameMorph with its children)
  fullDrawOn(otherCanvas:HTMLCanvasElement,
             drawingArea:RectangleInterface):void; 

  //FrameMorph accessing(get top layer of FrameMorph)  
  topMorphAt(point:PointInterface):MorphInterface;  
  
  //FrameMorph scrolling support:
  //get submorph bounds without itself
  submorphBounds():RectangleInterface;

  //FrameMorph scrolling support:
  keepInScrollFrame():void;

  //FrameMorph scrolling support:
  adjustBounds():void;

  //FrameMorph dragging & dropping of contents:
  reactToDropOf():void;

  //FrameMorph dragging & dropping of contents:
  reactToGrabOf():void;

  //FrameMorph menus
  //developers menu 
  developersMenu():MenuMorphInterface;

  //FrameMorph menus
  //keep all submorphs within framemorph
  keepAllSubmorphsWithin():void;
}

export interface FrameMorphConstructor {
    //constructor of FrameMorph Class

    new (aScrollFrame:ScrollFrameMorphInterface): FrameMorphInterface;
}

export interface FrameMorphServiceInterface{

    //public methods of FrameMorphService
    create(aScrollFrame?:ScrollFrameMorphInterface): FrameMorphInterface;
}