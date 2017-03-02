import {HandMorphInterface} from './handmorph.interface'
import {PointInterface } from './point.interface'
import {MorphInterface} from './morph.interface'
import {WorldMorphInterface} from './worldmorph.interface'

export class HandMorph implements HandMorphInterface{
  public morphToGrab:MorphInterface;

  public grabPosition:PointInterface;
  
  constructor(public world:WorldMorphInterface) { 
  }

  fullChanged():void{

  }

  // HandMorph dragging and dropping:
  grab(aMorph:MorphInterface):void{

  }

  // HandMorph event dispatching:
  processTouchStart(event:Event):void{

  }

  processTouchMove(event:Event):void{

  }

  processTouchEnd(event:Event):void{
    
  }
}
