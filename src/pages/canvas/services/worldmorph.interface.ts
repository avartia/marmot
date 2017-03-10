import { Rectangle } from './rectangle'
import { HandMorph } from './handmorph'
import { WorldMorph } from "./worldmorph";



// WorldMorph Class
// I represent the <canvas> element
// WorldMorph inherits from FrameMorph

export interface WorldMorphInterface{
    // public member variables

    worldCanvas:HTMLCanvasElement;

    broken:Rectangle[];

    hand:HandMorph;

    // public methods

    // WorldMorph does one cycle including stepping frame and updating broken areas
    doOneCycle():void;

    // World Morph display
    fullDrawOn(aCanvas:HTMLCanvasElement, aRect:Rectangle):void;
}

export interface WorldMorphServiceInterface{

    // public methods of WorldMorphService
    create(aCanvas:HTMLCanvasElement): WorldMorph;
}