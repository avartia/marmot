import {MorphInterface} from './morph.interface'
import {PointInterface} from './point.interface'
import {ColorInterface} from './color.interface'
import {MenuMorphInterface} from './menumorph.interface' 
//StringMorph Class

export interface StringMorphInterface extends MorphInterface{
  //public intance member and public intance methods of StringMorph Class

  //text content of StringMorph
  text:string;

  fontSize:number;

  fontName:string;

  fontStyle:string;

  isBold:boolean;

  isItalic:boolean;

  isEditable:boolean;

  isNumeric:boolean;

  isPassword:boolean;

  shadowOffset:PointInterface;

  shadowColor:ColorInterface;

  //additional properties for text-editing:
  //scrolls into view when edited
  isScrollable:boolean;

  currentlySelecting:boolean;

  startMark:number;

  endMark:number;

  markedTextColor:ColorInterface;

  markedBackgoundColor:ColorInterface;

  //StringMorph string representation: e.g. 'a StringMorph("Hello World")'
  toString():string;

  //StringMorph string password representation: e.g. '*******'
  //letter stands for symbol, and length stands for length of symbol array
  password(letter:string,length:number):string;

  //StringMorph font representation: e.g. 'bold italic 12px sans-serif'
  font():string;

  //StringMorph draw new StringMorph
  drawNew():void;

  //StringMorph mesuring
  // answer the position point of the given index ("slot")
  // where the cursor should be placed
  slotPosition(slot:number):PointInterface;

  //StringMorph mesuring
  // answer the slot (index) closest to the given point
  // so the cursor can be moved accordingly
  slotAt(aPoint:PointInterface):number;  
 
  //StringMorph mesuring
  //answer the slot below the given one
  //downFrom(slot:number):number;

  //StringMorph mesuring
  //answer the first slot (index) of the line for the given slot
  //startOfLine():number;  

  //StringMorph mesuring
  //answer the slot (index) indicating the EOL for the given slot
  //endOfLine():number;

  //StringMorph mesuring
  //answer my corrected fontSize
  //rawHeight():number;

  //StringMorph menus

  developersMenu():MenuMorphInterface;

  toggleIsDraggable():void;

  toggleWeight():void;

  toggleItalic():void;

  toggleIsPassword():void;

  setSerif():void;

  setSansSerif():void;

  setFontSize(size:number):void;

  setText(size:number):void;

  numericalSetters():string[];


  







  








}

export interface StringMorphConstructor {
    //constructor of StringMorph Class

    new (text:string,
         fontSize:number,
         fontStyle:string,
         isBold:boolean,
         isItalic:boolean,
         isNumeric:boolean,
         shadowOffset:PointInterface,
         shadowColor:ColorInterface,
         fontColor:ColorInterface,
         fontName:StringMorphInterface): StringMorphInterface;
}

export interface StringMorphServiceInterface{

    //public methods of StringMorphService
    create(text?:string,
           fontSize?:number,
           fontStyle?:string,
           isBold?:boolean,
           isItalic?:boolean,
           isNumeric?:boolean,
           shadowOffset?:PointInterface,
           shadowColor?:ColorInterface,
           fontColor?:ColorInterface,
           fontName?:StringMorphInterface):StringMorphInterface;
}