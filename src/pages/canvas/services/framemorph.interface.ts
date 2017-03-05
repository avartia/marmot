import {Morph} from './morph'
import {FrameMorph} from './framemorph'
import {ScrollFrameMorph} from './scrollframemorph'
import {Rectangle} from './rectangle'
import {Point} from './point'

// FrameMorph Class
// I clip my submorphs at my bounds
// FrameMorph inherit from Morph

export interface FrameMorphInterface{
    // public intance member and public intance methods of FrameMorph Class

    scrollFrame:ScrollFrameMorph;

    fullBounds():Rectangle;

    // use only for shadows
    fullImage():HTMLCanvasElement;

    fullDrawOn(aCanvas:HTMLCanvasElement,
                aRect:Rectangle):void;

    // FrameMorph navigation:
    topMorphAt(point:Point):Morph;

    // FrameMorph scrolling support:
    adjustBounds():void;

    // FrameMorph dragging & dropping of contents:
    reactToDropOf():void;

    reactToGrabOf():void;



}

export interface FrameMorphConstructor {
    //constructor of FrameMorph Class

    new (aScrollFrame:ScrollFrameMorph): FrameMorph;
}

export interface FrameMorphServiceInterface{

    //public methods of FrameMorphService
    create(aScrollFrame?:ScrollFrameMorph): FrameMorph;
}
