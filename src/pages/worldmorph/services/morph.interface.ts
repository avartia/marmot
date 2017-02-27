import {NodeInterface} from './node.interface'
import {RectangleInterface} from './rectangle.interface'
import {ColorInterface} from "./color.interface"
import {MenuMorphInterface} from './menumorph.interface'
import {PointInterface} from './point.interface'
import {ShadowMorphInterface} from './shadowmorph.interface'

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

  //Morph shadow()
  shadowImage(off:PointInterface, 
              color:ColorInterface):HTMLCanvasElement;
  
  //Morph shadow()
  shadowImageBlurred(off:PointInterface, 
                     color:ColorInterface):HTMLCanvasElement;
  
  //Morph shadow()
  shadow(off:PointInterface,
         alpha:number, 
         color:ColorInterface):ShadowMorphInterface;
  
  //Morph shadow()
  addShadow(off:PointInterface,
         alpha:number, 
         color:ColorInterface):ShadowMorphInterface;

  //Morph shadow()
  getShadow():ShadowMorphInterface;

  //Morph shadow()
  removeShadow():void;
  
   
  






}

export interface MorphConstructor {
    //constructor of Morph Class

    new (): MorphInterface;
}

export interface MorphServiceInterface{

    //public methods of MorphService
    create(): MorphInterface;
}