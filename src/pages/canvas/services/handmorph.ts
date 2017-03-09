import { HandMorphInterface } from './handmorph.interface'
import { Point } from './point'
import { Morph } from './morph'
import { WorldMorph } from './worldmorph'

export class HandMorph extends Morph implements HandMorphInterface{

    public morphToGrab:Morph;

    public grabPosition:Point;

    public myWorld:WorldMorph;
    
    constructor() { 
      super();
    }

    setWorld(world:WorldMorph):void{
        this.myWorld = world;
    }

    fullChanged():void{

    }

    grab(aMorph:Morph):void{

    }

    processTouchStart(event:Event):void{

    }

    processTouchMove(event:Event):void{

    }

    processTouchEnd(event:Event):void{
      
    }
}
