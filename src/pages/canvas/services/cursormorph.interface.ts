import {BlinkerMorphInterface} from './blinkermorph.interface'
import {TextMorph} from './textmorph'
import {CursorMorph} from './cursormorph'
//CursorMorph Class

export interface CursorMorphInterface extends BlinkerMorphInterface{
  //public intance member and public intance methods of CursorMorph Class
  //String/Text editing widget

  //when focus on a textmorph, initialize the clipboard
  initializeClipboardHandler():void;

  //process keyPress event(process character)
  processKeyPress(event:Event):void;

  //process keyDown event(process without characters)
  processKeyDown(event:Event):void;

  // CursorMorph navigation:
  //first compute cursor's next position
  //in this.setPosition(pos) draw the position
  gotoSlot(slot:number):void;

  //after pressing these keys,
  goLeft(shift:boolean):void;

  goRight(shift:boolean):void;

  goUp(shift:boolean):void;

  goDown(shift:boolean):void;

  goHome(shift:boolean):void;

  goEnd(shift:boolean):void;

  //
  goToPos(shift:boolean):void;

  
}

export interface CursorMorphConstructor {
    //constructor of CursorMorph Class

    new (aStringOrTextMorph:string|TextMorph): CursorMorph;
}

export interface CursorMorphServiceInterface{

    //public methods of CursorMorphService
    create(aStringOrTextMorph:string|TextMorph): CursorMorph;
}