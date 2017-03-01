import {FrameMorphInterface} from './framemorph.interface'
import {ColorInterface} from './color.interface'
import {SliderMorphInterface} from './slidermorph.interface'
import {MorphInterface} from './morph.interface'
import {PointInterface} from './point.interface'
//ScrollFrameMorph Class

export interface ScrollFrameMorphInterface extends FrameMorphInterface{
  //public intance member and public intance methods of ScrollFrameMorph Class

  scrollBarSize:number;

  autoScrollTrigger:number;

  isScrollingByDragging:boolean;

  hasVelocity:boolean;

  padding:number;// around the scrollable area

  growth:number;// pixels or Point to grow right/left when near edge

  isTextLineWrapping:boolean;

  contents:FrameMorphInterface;

  hBar:SliderMorphInterface;

  vBar:SliderMorphInterface;

  //ScrollFrameMorph adjust
  adjustScrollBars():void

  //ScrollFrameMorph add new morph
  addContents(aMorph:MorphInterface):void;

  //ScrollFrameMorph set content
  setContents(aMorph:MorphInterface):void;

  //ScrollFrameMorph set extent
  setExtent(aPoint:PointerEventInit):void;

  //ScrollFrameMorph scrolling by dragging:
  //scrollX(steps:number):void;

  //scrollY(steps:number):void;

  //step():void;

  //ScrollFrameMorph scrolling by dragging
  //invoked when mouse down left
  mouseDownLeft(pos:PointInterface):void;

  //ScrollFrameMorph scrolling by dragging
  //start auto scrolling
  startAutoScrolling():void;

  //autoScroll(pos:PointInterface):void;

  //ScrollFrameMorph scrolling by editing text:
  scrollCursorIntoView(morph:MorphInterface):void;

  //ScrollFrameMorph events:
  mouseScroll(y:number,x:number):void;

  //ScrollFrameMorph duplicating

  //ScrollFrameMorph menu
}

export interface ScrollFrameMorphConstructor {
    //constructor of ScrollFrameMorph Class

    new (scroller:FrameMorphInterface, 
         size:number, 
         sliderColor:ColorInterface): ScrollFrameMorphInterface;
}

export interface ScrollFrameMorphServiceInterface{

    //public methods of ScrollFrameMorphService
    create(scroller?:FrameMorphInterface, 
           size?:number, 
           sliderColor?:ColorInterface): ScrollFrameMorphInterface;
}