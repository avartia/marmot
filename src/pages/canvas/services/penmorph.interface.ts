import { RectangleService } from './rectangle.service'
import { PenMorph } from "./penmorph";

//PenMorph Class


export interface PenMorphInterface{
    //public intance member and public intance methods of PenMorph Class

    // PenMorph display:
    // my orientation can be overridden with the "facing" parameter to
    // implement Scratch-style rotation styles
    drawNew(facing:number):void;

    // PenMorph access:
    setHeading(degrees:number):void;

    turn(degrees:string):void;

    //move the turtle forward
    forward(steps:string):void;

    clear():void;



}

export interface PenMorphServiceInterface{

    //public methods of PenMorphService
    create(): PenMorph;
}