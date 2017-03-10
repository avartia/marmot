import { HandMorphInterface } from './handmorph.interface'
import { Point } from './point'
import { Morph } from './morph'
import { WorldMorph } from './worldmorph'
import { Rectangle } from "./rectangle";
import { Color } from "./color";

export class HandMorph extends Morph implements HandMorphInterface{

    public morphToGrab:Morph;

    public grabPosition:Point;

    public myWorld:WorldMorph;
    
    constructor(color: Color, 
                bounds: Rectangle) { 
      super(color, bounds);
      this.drawNew();
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
