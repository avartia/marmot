import {NodeInterface} from './node.interface'
import {RectangleInterface} from './rectangle.interface'
import {ColorInterface} from "./color.interface"
import {MenuMorphInterface} from './menumorph.interface'
import {PointInterface} from './point.interface'
import {ShadowMorphInterface} from './shadowmorph.interface'
import {WorldMorphInterface} from './worldmorph.interface'

//Morph Class

export interface MorphInterface extends NodeInterface{
  //public intance member and public intance methods of Morph Class

  //whether to track changes
  trackChanges:boolean;

  //A float specifying the level of the blurring effect. 
  shadowBlur:number;

  //whether to be a morph
  isMorph:boolean;

  //refrence to HTMLCanvasElement, which contains appearance of a morph
  image:HTMLCanvasElement;

  //rectangle area the morph belongs to
  bounds:RectangleInterface;

  //cached whole image
  cachedFullImage:HTMLCanvasElement;

  //cached whole Bounds, which merge the bounds of children
  cachedFullBounds:RectangleInterface;

  //background color of morph
  color:ColorInterface;

  //optional url of a fill-image
  texture:string;

  //cached actually texture image 
  cachedTexture:HTMLImageElement; 

  //specifies how transparent a morph is.
  alpha:number;

  //whether a morph is visible
  isVisible:boolean;

  //whether a morph is draggable
  isDraggable:boolean;

  //whether a morph is a template, which can be cloned
  isTemplate:boolean;

  //whether a morph can accept dropping from other morphs
  acceptsDrops:boolean;

  //whether a morph can notice clicks from its parent
  noticesTransparentClick:boolean;

  //frame to be flushed per second
  fps:number;

  //customed context menu
  customContextMenu:MenuMorphInterface;

  //last modified or created time
  lastTime:number;

  //Morph string representation: e.g. 'a Morph 2 [(20,45) | (130, 250)]'
  toString():string;

  //Morph deleting
  destroy():void;

  //Morph stepping frame
  stepFrame():void;

  //Morph stepping itself
  step():void

  //Morph accessing(get morph left border geometry value)
  left():number;

  //Morph accessing(get morph right border geometry value)
  right():number;
  
  //Morph accessing(get morph top border geometry value)
  top():number;

  //Morph accessing(get morph bottom border geometry value)
  bottom():number;

  //Morph accessing(get morph center point coordinates)
  center():PointInterface;

  //Morph accessing(get morph center point's coordinate of bottom border)
  bottomCenter():PointInterface;

  //Morph accessing(get morph center point's coordinate of left border)
  leftCenter():PointInterface;

  //Morph accessing(get morph center point's coordinate of right border)
  rightCenter():PointInterface;

  //Morph accessing(get morph center point's coordinate of top border)
  topCenter():PointInterface;

  //Morph accessing(get morph bottom left point's coordinate)
  bottomLeft():PointInterface;

  //Morph accessing(get morph bottom right point's coordinate)
  bottomRight():PointInterface;

  //Morph accessing(get morph top left point's coordinate)
  topLeft():PointInterface;

  //Morph accessing(get morph top right point's coordinate)
  topRight():PointInterface;

  //Morph accessing(get morph bound itself)
  bounding():RectangleInterface;

  //Morph accessing(get morph four corners)
  corners():PointInterface[];

  //Morph accessing(get topLeftPoint of morph bound)
  position():PointInterface;

  //Morph accessing(get extent including width and height of morph)
  extent():PointInterface;

  //Morph accessing(get width of morph bound)
  width():number;

  //Morph accessing(get height of morph bound)
  height():number;

  //Morph accessing(get morph bound with its children)
  fullBounds():RectangleInterface;

  //Morph accessing(get morph bound with its children but no shadow)
  fullBoundsNoShadow():RectangleInterface;

  //Morph accessing(get morph bound itself intersected by all parents' framemorphs)
  visibleBounds():RectangleInterface;

  //Morph accessing(move morph with recording changes)
  moveBy(offset:PointInterface | number):void

  //Morph accessing(just move morph with its children)
  silentMoveBy(offset:PointInterface | number):void

  //Morph accessing(set position of morph with recording changes)
  setPosition(otherPoint:PointInterface):void;

  //Morph accessing(set position of morph without recording changes)
  silentSetPosition(offset:PointInterface):void  

  //Morph accessing(set left border of morph by translation)
  setLeft(left:number);

  //Morph accessing(set right border of morph by translation)
  setRight(left:number);  

  //Morph accessing(set top border of morph by translation)
  setTop(left:number);

  //Morph accessing(set bottom border of morph by translation)
  setBottom(left:number);  

  //Morph accessing(set center position of morph itself by translation)
  setCenter(centerPoint:PointInterface);

  //Morph accessing(set center position of morph with children by translation)
  setFullCenter(centerPoint:PointInterface);  

  //Morph accessing(make morph completely within another morph by translation)  
  keepWithin(otherMorph:MorphInterface):void;

  //Morph accessing(?)
  scrollIntoView():void;

  //Morph accessing(set new extent of morph)
  //silently avoids redrawing the morph
  setExtent(extentPoint:PointInterface, 
            silently:boolean):void;  

  //Morph accessing(set new extent of morph by redrawing a complete morph)
  silentSetExtent(extentPoint:PointInterface):void;    

  //Morph accessing(set width of morph with redrawing)
  setWidth(width:number):void;  

  //Morph accessing(set width of morph avoid redrawing)
  silentSetWidth(width:number):void;    

  //Morph accessing(set height of morph with redrawing)
  setHeight(height:number):void;  

  //Morph accessing(set height of morph avoid redrawing)
  silentSetHeight(height:number):void;  

  //Morph accessing(set color of morph with redrawing)
  setColor(newColor:ColorInterface):void;  

  //Morph displaying(initialize background of a morph)
  //if texture exists, then draw texture  
  drawNew():void;

  //Morph displaying
  //initialize texture of a morph and draw texture
  drawTexture(url:string):void;  

  //Morph displaying(draw texture of a morph)
  //maybe repeat texture 
  drawCachedTexture():void;

  //Morph displaying(draw canvas of a morph without its children)
  drawOnCanvas(otherCanvas:HTMLCanvasElement,
               drawingArea:RectangleInterface):void;

  //Morph displaying(draw canvas of a morph with its children)
  fullDrawOnCanvas(otherCanvas:HTMLCanvasElement,
               drawingArea:RectangleInterface):void;

  //Morph displaying(hide a morph with its children)
  hide():void;

  //Morph displaying(show a morph with its children)
  show():void;  

  //Morph displaying(toggle visibility of a morph with its children)
  toggleVisibility():void; 

  //Morph full image(?)
  fullImageClassic():HTMLImageElement;

  //Morph full image(?)
  fullImage():HTMLImageElement;

  //Morph shadow(?)
  shadowImage(off:PointInterface, 
              color:ColorInterface):HTMLCanvasElement;
  
  //Morph shadow(produce shadow morph)
  shadowImageBlurred(off:PointInterface, 
                     color:ColorInterface):HTMLCanvasElement;
  
  //Morph shadow(create and set shadow morph)
  shadow(off:PointInterface,
         alpha:number, 
         color:ColorInterface):ShadowMorphInterface;
  
  //Morph shadow(add shadowmorph to a morph)
  addShadow(off:PointInterface,
         alpha:number, 
         color:ColorInterface):ShadowMorphInterface;

  //Morph shadow(get shadowmorph which belongs to a morph)
  getShadow():ShadowMorphInterface;

  //Morph shadow(remove shadowmorph which belongs to a morph)
  removeShadow():void;
  
  //Morph pen trails
  //answer my pen trails canvas. default is to answer my image
  penTrails():HTMLCanvasElement;

  //Morph updating(record changes for morphs without children)
  changed():void;

  //Morph updating(record full changes for morphs with children)
  fullChanged():void

  //Morph updating
  // react to a change in one of my children,
  // default is to just pass this message on upwards
  // override this method for Morphs that need to adjust accordingly
  childChanged():void;
   
  //Morph accessing(get worldmorph which contains the morph)
  world():WorldMorphInterface;

  //Morph accessing(add new morph and remove old parent)
  add(childMorph):void;

  //Morph accessing(add new morph and remove old parent)
  //move child to the first member of its children
  addBack(childMorph):void;

  //Morph accessing(get top layer of morph)  
  topMorphAt(point:PointInterface):MorphInterface;

  //Morph accessing(get overlapped morph) 
  overlappedMorphs():MorphInterface[];

  //Morph pixel access(get color of some pixel in the morph)
  getPixelColor(aPoint:PointInterface):ColorInterface;

  //Morph pixel access
  //(answer whether some point is transparent in the morph)
  isTransparentAt(aPoint:PointInterface):boolean;

  //Morph duplicating(shallow copy without children)
  copy():MorphInterface;

  /*Morph duplicating
    Produce a copy of me with my entire tree of submorphs. Morphs
    mentioned more than once are all directed to a single new copy.
    Other properties are also *shallow* copied, so you must override
    to deep copy Arrays and (complex) Objects
  */  
  fullCopy():MorphInterface;
  
  /*Morph duplicating
    Recursively copy this entire composite morph, recording the
    correspondence between old and new morphs in the given dictionary.
    This dictionary will be used to update intra-composite references
    in the copy. See updateReferences().

    Note: This default implementation copies ONLY morphs. If a morph
    stores morphs in other properties that it wants to copy, then it
    should override this method to do so. The same goes for morphs that
    contain other complex data that should be copied when the morph is
    duplicated.
  */
  //copyRecordingReferences(map:Map<MorphInterface, MorphInterface>):

  /*Morph duplicating
    Update intra-morph references within a composite morph that has
    been copied. For example, if a button refers to morph X in the
    orginal composite then the copy of that button in the new composite
    should refer to the copy of X in new composite, not the original X.
  */
  //updateReferences(map:Map<MorphInterface, MorphInterface>);

  //Morph dragging and dropping
  //get root morph which contains dragging morph
  rootForGrab():MorphInterface;

  //Morph dragging and dropping
  //answer whether a morph can accept drop of another morph
  wantsDropOf(aMorph:MorphInterface):boolean;  

  //Morph dragging and dropping
  //pick up a morph
  pickUp(aWorld:WorldMorphInterface):void;   
  
  //Morph dragging and dropping
  //answer whether a morph has been picked up
  isPickedUp(aWorld:WorldMorphInterface):void;   

  //Morph dragging and dropping
  //answer a dictionary specifying where I am right now, so
  //I can slide back to it if I'm dropped somewhere else
  situation():{origin:MorphInterface, position:PointInterface};   

  //Morph dragging and dropping
  //slide back to origin position when dropped somewhere else
  slideBackTo(situation:{origin:MorphInterface, position:PointInterface},
              steps:number):void;

  //Morph utilities
  //do nothing
  nop():void;

  //Morph utilities
  //resize morph
  resize():void;  

  //Morph utilities
  //add handlemorph for moving morph
  move():void; 

  //Morph utilities
  //bubble help content
  hint(msg:string):void;

  //Morph utilities
  //inform menu
  inform(msg:string):void;  

  /*Morph utilities
    inform menu
    parameters:
    msg:title
    callback:function to be executed
    environment:morph prompt menu belongs to
    defaultContents
    width
    floorNum:minimum number
    ceilingNum:maximum number
    isRounded:whether input field value is rounded
  */
  prompt(msg:string,
         callback:Function,
         environment:MorphInterface,
         defaultContents:string,
         width:number,
         floorNum:number,
         ceilingNum:number,
         isRounded:boolean):void;

  /*Morph utilities
    color menu
    parameters:
    msg:title
    callback:function to be executed
    environment:morph color menu belongs to
    defaultContents:default color
  */
  pickColor(msg:string,
            callback:Function,
            environment:MorphInterface,
            defaultContents:ColorInterface):void;

  //Morph utilities
  //inspect menu
  inspect(anotherObject:MorphInterface):void;

  //Morph menus
  //answer proper menu
  contextMenu():MenuMorphInterface;

  //Morph menus
  //answer hierarchy menu
  //hierarchyMenu():MenuMorphInterface;

  //Morph menus
  //answer developers menu
  //developersMenu():MenuMorphInterface;

  //Morph menus
  //answer user menu
  //userMenu():null;

  //Morph menu actions
  //set transparent degree
  setAlphaScaled(alpha:number | string):void;

  //Morph menu actions
  //attach morph to another morph
  attach():void; 

  //Morph menu actions
  //toggle draggable property
  toggleIsDraggable():void;   

  //Morph menu actions
  //get color setters array
  colorSetters():string[];

  //Morph menu actions
  //get number setters array
  numericalSetters():string[];  

  //Morph entry field tabbing
  
  //Morph events
  //Events may be "bubbled" up a morph's owner chain
  escalateEvent(functionName:string,
                arg:any):void

  //Morph eval

  //Morph collision detection
  //isTouching(otherMorph:MorphInterface):
  
  //overlappingImage():
  
}

export interface MorphConstructor {
    //constructor of Morph Class

    new (noDraw:boolean): MorphInterface;
}

export interface MorphServiceInterface{

    //public methods of MorphService
    create(noDraw?:boolean): MorphInterface;
}