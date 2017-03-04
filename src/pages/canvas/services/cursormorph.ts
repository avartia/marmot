import { CursorMorphInterface } from './cursormorph.interface'
import { TextMorph } from './textmorph'
import { BlinkerMorph } from './blinkermorph'
export class CursorMorph extends BlinkerMorph implements CursorMorphInterface{

    constructor(aStringOrTextMorph:string|TextMorph) { 
        super();
    }
    
    //when focus on a textmorph, initialize the clipboard
    initializeClipboardHandler():void{

    }

    //process keyPress event(process character)
    processKeyPress(event:Event):void{

    }

    //process keyDown event(process without characters)
    processKeyDown(event:Event):void{

    }

    // CursorMorph navigation:
    //first compute cursor's next position
    //in this.setPosition(pos) draw the position
    gotoSlot(slot:number):void{

    }

    //after pressing these keys,
    goLeft(shift:boolean):void{

    }

    goRight(shift:boolean):void{

    }

    goUp(shift:boolean):void{

    }

    goDown(shift:boolean):void{

    }

    goHome(shift:boolean):void{

    }

    goEnd(shift:boolean):void{

    }

    //
    goToPos(shift:boolean):void{

    }

  

}
