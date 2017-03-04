
//PenMorph Class

export interface PenMorphInterface{
  //public intance member and public intance methods of PenMorph Class


  // PenMorph display:
  // my orientation can be overridden with the "facing" parameter to
  // implement Scratch-style rotation styles
  drawNew(facing:number):void;

  // PenMorph access:
  setHeading(degrees:number):void;

  turn(degrees:number):void;

  //move the turtle forward
  forward(steps:number):void;

  clear():void;



}

export interface PenMorphConstructor {
    //constructor of PenMorph Class

    new (): PenMorphInterface;
}

export interface PenMorphServiceInterface{

    //public methods of PenMorphService
    create(): PenMorphInterface;
}