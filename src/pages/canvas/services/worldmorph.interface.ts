import {FrameMorphInterface} from './framemorph.interface'
import {Rectangle} from './rectangle'
import {HandMorph} from './handmorph'
import {HandMorphService} from './handmorph.service'
import {ColorService} from './color.service'
import { RectangleService } from './rectangle.service'
import { WorldMorph } from "./worldmorph";



// WorldMorph Class
// I represent the <canvas> element
// WorldMorph inherits from FrameMorph

export interface WorldMorphInterface extends FrameMorphInterface{
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

export interface WorldMorphConstructor {
    // constructor of WorldMorph Class

    new (handMorphService:HandMorphService,
         colorService:ColorService,
         rectangleService:RectangleService,
         aCanvas:HTMLCanvasElement): WorldMorph;
}

export interface WorldMorphServiceInterface{

    // public methods of WorldMorphService
    create(aCanvas:HTMLCanvasElement): WorldMorph;
}