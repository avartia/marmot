import {MorphInterface} from './morph.interface'
import {BlinkerMorph} from './blinkermorph'
//BlinkerMorph Class
//can be used for text cursors

export interface BlinkerMorphInterface extends MorphInterface{
    //public intance member and public intance methods of BlinkerMorph Class

    // BlinkerMorph stepping:
    //toggle the visibility of BlinkerMorph and its children
    step():void;
}

export interface BlinkerMorphConstructor {
    //constructor of BlinkerMorph Class

    new (rate:number): BlinkerMorph;
}

export interface BlinkerMorphServiceInterface{

    //public methods of BlinkerMorphService
    create(rate?:number): BlinkerMorph;
}