import { HandMorphInterface } from './handmorph.interface'
import { Point } from './point'
import { Morph } from './morph'
import { WorldMorph } from './worldmorph'
import { Rectangle } from "./rectangle";
import { Color } from "./color";
import { FrameMorph } from "./framemorph";

export class HandMorph extends Morph implements HandMorphInterface{

    public morphToGrab:Morph;

    public grabPosition:Point;

    public myWorld:WorldMorph;

    private grabOrigin: {origin:Morph, position:Point};
    
    constructor(bounds: Rectangle) { 
        super(null, bounds, false);
        this.morphToGrab = null;
        this.grabPosition = null;
        this.grabOrigin = null;
    }

    setWorld(world:WorldMorph):void{
        this.myWorld = world;
    }

    changed():void{
        let bound: Rectangle;
        let extent: Point;
        if(this.myWorld !== null){
            bound = this.fullBounds();
            extent = bound.extent();
            if(extent.x !== 0 && extent.y !== 0){
                this.myWorld.broken.push(bound);
            }
        }
    }
    fullChanged():void{
        this.changed();
    }

    private morphAtPointer(): Morph{
        return this.myWorld.topMorphAt(this.bounds.origin) || this.myWorld;
    }

    grab(aMorph:Morph):void{
        let oldParent = aMorph.parent;
        if(aMorph instanceof WorldMorph){
            return;
        }
        if(this.children.length === 0){
            this.grabOrigin = aMorph.situation();
            aMorph.addShadow();
            aMorph.cachedFullImage = aMorph.fullImageClassic();
            aMorph.cachedFullBounds = aMorph.fullBounds();
            this.add(aMorph);
            this.changed();
            if(oldParent && (oldParent as FrameMorph).reactToGrabOf){
                (oldParent as FrameMorph).reactToGrabOf();
            }
        }
    }

    private drop():void{
        let target:Morph;
        let morphToDrop:Morph;
        if(this.children.length !== 0){
            morphToDrop = this.children[0] as Morph;
            target = this.dropTargetFor(morphToDrop);
            this.changed();
            target.add(morphToDrop);
            morphToDrop.cachedFullImage = null;
            morphToDrop.cachedFullBounds = null;
            morphToDrop.changed();
            morphToDrop.removeShadow();
            this.children = [];
            this.setExtent(new Point(), false);
            if((target as FrameMorph).reactToDropOf){
                (target as FrameMorph).reactToDropOf(morphToDrop, this);
            }
        }
    }
    private dropTargetFor(aMorph:Morph):Morph{
        let target = this.morphAtPointer();
        while(target.wantsDropOf(aMorph) === false){
            target = target.parent as Morph;
        }
        return target;
    }

    processTouchStart(event:Event):void{
        
    }

    processTouchMove(event:Event):void{

    }

    processTouchEnd(event:Event):void{
      
    }
}
