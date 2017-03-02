import {FrameMorphInterface} from './framemorph.interface'
import {RectangleInterface} from './rectangle.interface'
import {HandMorphInterface} from './handmorph.interface'
import {HandMorphService} from './handmorph.service'
// WorldMorph Class
// I represent the <canvas> element
// WorldMorph inherits from FrameMorph

export interface WorldMorphInterface extends FrameMorphInterface{
  //public intance member and public intance methods of WorldMorph Class

  worldCanvas:HTMLCanvasElement;

  broken:RectangleInterface[];

  hand:HandMorphInterface;

  //WorldMorph does one cycle including stepping frame and updating broken areas
  doOneCycle():void;
}

export interface WorldMorphConstructor {
    //constructor of WorldMorph Class

    new (handMorphService:HandMorphService,
         aCanvas:HTMLCanvasElement): WorldMorphInterface;
}

export interface WorldMorphServiceInterface{

    //public methods of WorldMorphService
    create(aCanvas:HTMLCanvasElement): WorldMorphInterface;
}