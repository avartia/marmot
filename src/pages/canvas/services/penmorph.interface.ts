import { MorphInterface } from './morph.interface'
import { RectangleService } from './rectangle.service'

//PenMorph Class

export interface PenMorphInterface extends MorphInterface{
  //public intance member and public intance methods of PenMorph Class


  // PenMorph display:
  // my orientation can be overridden with the "facing" parameter to
  // implement Scratch-style rotation styles
//   drawNew(facing:number):void;

  // PenMorph access:
  setHeading(degrees:number):void;

  turn(degrees:number):void;

  //move the turtle forward
  forward(steps:number):void;

  clear():void;



}

export interface PenMorphConstructor {
    //constructor of PenMorph Class

    new (rectangleService:RectangleService): PenMorphInterface;
}

export interface PenMorphServiceInterface{

    //public methods of PenMorphService
    create(): PenMorphInterface;
}