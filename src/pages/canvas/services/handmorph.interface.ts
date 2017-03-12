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

    changed():void;

    fullChanged():void;

    // HandMorph dragging and dropping:
    grab(aMorph:Morph):void;

    // HandMorph event dispatching:
    processPanStart(event:GesTureEvent):void;

    processPanMove(event:GesTureEvent):void;

    processPanEnd(event:GesTureEvent):void;
}

export interface HandMorphServiceInterface{

    //public methods of HandMorphService
    create(): HandMorph;
}

export interface GesTureEvent{
    center:Point;
}