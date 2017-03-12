import {Morph} from './morph'
import {FrameMorph} from './framemorph'
import {Rectangle} from './rectangle'
import { Point } from './point'
import { ScrollFrameMorphInterface } from "./scrollframemorph.interface";

// FrameMorph Class
// I clip my submorphs at my bounds
// FrameMorph inherit from Morph

export interface FrameMorphInterface{
    // public intance member and public intance methods of FrameMorph Class

    scrollFrame:ScrollFrameMorphInterface;

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

export interface FrameMorphServiceInterface{

    //public methods of FrameMorphService
    create(): FrameMorph;
}
