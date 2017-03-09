import { Morph } from './morph'
import { WorldMorph } from './worldmorph'
import { Point } from './point'
import { HandMorph } from './handmorph'

// HandMorph Class
// I represent the Mouse cursor
// HandMorph inherits from Morph

export interface HandMorphInterface{
    // public member variables
    
    myWorld:WorldMorph;

    morphToGrab:Morph;

    grabPosition:Point;
    
    // public methods

    setWorld(world:WorldMorph):void;

    fullChanged():void;

    // HandMorph dragging and dropping:
    grab(aMorph:Morph):void;

    // HandMorph event dispatching:
    processTouchStart(event:Event):void;

    processTouchMove(event:Event):void;

    processTouchEnd(event:Event):void;
}

export interface HandMorphServiceInterface{

    //public methods of HandMorphService
    create(): HandMorph;
}