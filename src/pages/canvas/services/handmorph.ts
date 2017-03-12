import { HandMorphInterface, GesTureEvent } from './handmorph.interface'
import { Point } from './point'
import { Morph } from './morph'
import { WorldMorph } from './worldmorph'
import { Rectangle } from "./rectangle";
import { Color } from "./color";
import { FrameMorph } from "./framemorph";
import { getDocumentPositionOf } from './shared.function'
import { ShadowMorph } from "./shadowmorph";
export class HandMorph extends Morph implements HandMorphInterface{

    public morphToGrab:Morph;

    public grabPosition:Point;

    public myWorld:WorldMorph;

    private grabOrigin: {origin:Morph, position:Point};
    
    constructor(color:Color,
                bounds: Rectangle) { 
        super(color, bounds, true);
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
        let shadow:ShadowMorph;
        if(aMorph instanceof WorldMorph){
            return;
        }
        if(this.children.length === 0){
            this.grabOrigin = aMorph.situation();
            shadow = aMorph.addShadow() as ShadowMorph;
            this.addBack(shadow);
            this.fullChanged();
             
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
                (target as FrameMorph).reactToDropOf();
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

    processPanStart(event:GesTureEvent):void{
        let morph:Morph;
        let action:string;

        this.morphToGrab = null;
        this.grabPosition = null;

        let position = event.center;
        this.bounds.origin.x = event.center.x;
        this.bounds.origin.y = event.center.y;
        this.bounds.corner.x = event.center.x;
        this.bounds.corner.y = event.center.y;        

        morph = this.morphAtPointer(); 

        this.morphToGrab = morph.rootForGrab();
        this.grabPosition = this.bounds.origin.copy();
        action = "processPanStart";
        while(!morph[action]){
            morph = morph.parent as Morph;
        }     
        morph[action](this.bounds.origin);
    }

    processPanMove(event:GesTureEvent):void{
        let pos:Point;
        let posInDocument = getDocumentPositionOf(this.myWorld.worldCanvas);
        let topMorph:Morph;
        let morph:Morph;
        pos = new Point(
            event.center.x - posInDocument.x,
            event.center.y - posInDocument.y
        );

        this.setPosition(pos);

        if(this.children.length === 0){
            topMorph = this.morphAtPointer();
            morph = topMorph.rootForGrab();

            if(this.morphToGrab !== null){
                if(this.morphToGrab.isDraggable === true){
                    morph = this.morphToGrab;
                    this.grab(morph);
                }
                else if (this.morphToGrab.isTemplate){
                    morph = this.morphToGrab.fullCopy();
                    morph.isTemplate = false;
                    morph.isDraggable = true;
                    
                    this.grab(morph);
                    this.grabOrigin = this.morphToGrab.situation();
                }
                this.setPosition(pos);
            }
        }
    }

    processPanEnd(event:GesTureEvent):void{
        let morph = this.morphAtPointer();
        let action:string;
        if(this.children.length !== 0){
            this.drop();
        }
        else{
            action = "processPanEnd";
            while(!morph[action]){
                morph = morph.parent as Morph;
            }     
            morph[action](this.bounds.origin);
        }
    }
}


