import {MorphInterface} from './morph.interface'
import {ScrollFrameMorphInterface} from './scrollframemorph.interface'
import {RectangleInterface} from './rectangle.interface'
import {PointInterface} from './point.interface'

// FrameMorph Class
// I clip my submorphs at my bounds
// FrameMorph inherit from Morph

export interface FrameMorphInterface extends MorphInterface{
    // public intance member and public intance methods of FrameMorph Class

    scrollFrame:ScrollFrameMorphInterface;

    fullBounds():RectangleInterface;

    // use only for shadows
    fullImage():HTMLCanvasElement;

    fullDrawOn(aCanvas:HTMLCanvasElement,
                aRect:RectangleInterface):void;

    // FrameMorph navigation:
    topMorphAt(point:PointInterface):MorphInterface;

    // FrameMorph scrolling support:
    adjustBounds():void;

    // FrameMorph dragging & dropping of contents:
    reactToDropOf():void;

    reactToGrabOf():void;



}

export interface FrameMorphConstructor {
    //constructor of FrameMorph Class

    new (aScrollFrame:ScrollFrameMorphInterface): FrameMorphInterface;
}

export interface FrameMorphServiceInterface{

    //public methods of FrameMorphService
    create(aScrollFrame?:ScrollFrameMorphInterface): FrameMorphInterface;
}
