import { Morph } from './morph'
import { MorphInterface } from './morph.interface'
import { WorldMorph } from './worldmorph'
import { Point } from './point'
import {HandMorph} from './handmorph'

// HandMorph Class
// I represent the Mouse cursor
// HandMorph inherits from Morph

export interface HandMorphInterface extends MorphInterface{
    // public member variables
    
    myWorld:WorldMorph;

    morphToGrab:Morph;

    grabPosition:Point;
    
    // public methods

    fullChanged():void;

    // HandMorph dragging and dropping:
    grab(aMorph:Morph):void;

    // HandMorph event dispatching:
    processTouchStart(event:Event):void;

    processTouchMove(event:Event):void;

    processTouchEnd(event:Event):void;
}

export interface HandMorphConstructor {
    //constructor of HandMorph Class

    new (aWorld:WorldMorph): HandMorph;
}

export interface HandMorphServiceInterface{

    //public methods of HandMorphService
    create(aWorld:WorldMorph): HandMorph;
}