import {FrameMorphInterface} from './framemorph.interface'
import {RectangleInterface} from './rectangle.interface'
import {HandMorphInterface} from './handmorph.interface'
import {HandMorphService} from './handmorph.service'
import {ColorService} from './color.service'
import {RectangleService} from './rectangle.service'



// WorldMorph Class
// I represent the <canvas> element
// WorldMorph inherits from FrameMorph

export interface WorldMorphInterface extends FrameMorphInterface{
    // public member variables

    worldCanvas:HTMLCanvasElement;

    broken:RectangleInterface[];

    hand:HandMorphInterface;

    // public methods

    // WorldMorph does one cycle including stepping frame and updating broken areas
    doOneCycle():void;

    // World Morph display
    fullDrawOn(aCanvas:HTMLCanvasElement, aRect:RectangleInterface):void;
}

export interface WorldMorphConstructor {
    // constructor of WorldMorph Class

    new (handMorphService:HandMorphService,
         colorService:ColorService,
         rectangleService:RectangleService,
         aCanvas:HTMLCanvasElement): WorldMorphInterface;
}

export interface WorldMorphServiceInterface{

    // public methods of WorldMorphService
    create(aCanvas:HTMLCanvasElement): WorldMorphInterface;
}