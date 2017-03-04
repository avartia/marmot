import { MorphInterface } from './morph.interface'
import { WorldMorphInterface } from './worldmorph.interface'
import { PointInterface } from './point.interface'

//HandMorph Class
// I represent the Mouse cursor
// HandMorph inherits from Morph

export interface HandMorphInterface extends MorphInterface{
  //public intance member and public intance methods of HandMorph Class

  world:WorldMorphInterface;

  morphToGrab:MorphInterface;

  grabPosition:PointInterface;

  fullChanged():void;

  // HandMorph dragging and dropping:
  grab(aMorph:MorphInterface):void;

  // HandMorph event dispatching:
  processTouchStart(event:Event):void;

  processTouchMove(event:Event):void;

  processTouchEnd(event:Event):void;
}

export interface HandMorphConstructor {
    //constructor of HandMorph Class

    new (aWorld:WorldMorphInterface): HandMorphInterface;
}

export interface HandMorphServiceInterface{

    //public methods of HandMorphService
    create(aWorld:WorldMorphInterface): HandMorphInterface;
}