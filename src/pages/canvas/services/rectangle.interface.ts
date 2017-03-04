import { PointInterface } from './point.interface'
import { PointService } from './point.service'

//Rectangle Class

export interface RectangleInterface{
    //public member variables
    origin: PointInterface;

    corner: PointInterface;

    //public methods
    // Rectangle string representation: e.g. '[0@0 | 160@80]'
    toString():string;

    // Rectangle copying:
    copy():RectangleInterface;

    // Rectangle accessing - setting:
    // Change the Rectangle by resetting topLeftPoint and bottomRightPoint
    setTo(left?:number,top?:number,right?:number,bottom?:number):void;

    // Rectangle accessing - getting:
    area():number;

    //Get the Y coordinate of the bottom of the square
    bottom():number;

    //Get the bottomCenter point of the Rectangle
    bottomCenter():PointInterface;

    bottomLeft():PointInterface;

    bottomRight():PointInterface;

    //Return Rectangle itself
    boundingBox():RectangleInterface;

    //Get the center point of the Rectangle
    center():PointInterface;

    //Get an array containing 4 corners of the Rectangle
    corners():PointInterface[];

    //Get the extent vector of the Rectangle
    extent():PointInterface;

    height():number;

    left():number;

    leftCenter():PointInterface;

    right():number;

    rightCenter():PointInterface;

    top():number;

    topCenter():PointInterface;

    topLeft():PointInterface;

    topRight():PointInterface;

    width():number;

    //Get the topLeftPoint of the Rectangle
    position():PointInterface;

    // Rectangle comparison:

    // Compare two Rectangle
    equal(aRect:RectangleInterface):boolean;

    ////??????????????????
    abs():RectangleInterface;

    //Rectangle functions:

    //create a Rectangle that is an inset of the Rectangle
    insetBy(delta:PointInterface|number):RectangleInterface;

    //create a Rectangle that can contain the current Rectangle
    expandBy(delta:PointInterface|number):RectangleInterface;

    //expand the current Rectangle from bottomLeft direction
    growBy(delta:PointInterface|number):RectangleInterface;

    //Get the intersect part of two Rectangle
    intersect(aRect:RectangleInterface):RectangleInterface;

    //Get the Rectangle that can contain these to Rectangle
    merge(aRect:RectangleInterface):RectangleInterface;

    //expand the rectangle that can contain aRect
    mergeWith(aRect:RectangleInterface):void;

    //Apply round method to topLeftPoint and bottomRightPoint to create a new Rectangle
    round():RectangleInterface;

    // round me by applying floor() to my origin and ceil() to my corner
    // expand by 1 to be on the safe side, this eliminates rounding
    // artifacts caused by Safari's auto-scaling on retina displays
    spread():RectangleInterface;

    //make the rectangle be inside of aRect after self+delta
    //at least topleft inside
    amountToTranslateWithin(aRect:RectangleInterface):RectangleInterface;

    // Rectangle testing:

    //whether this rectangle can contain aPoint
    containsPoint(aPoint:PointInterface):boolean;

    //whether this rectangle can contain aRect
    containsRectangle(aRect:RectangleInterface):boolean;

    //whether this rectangle can intersect with aRect
    intersects(aRect:RectangleInterface):boolean;

    //whether aRect is in a new Rectangle into which the rectangle expanded
    //by threshold
    isNearTo(aRect:RectangleInterface,threshold:number):boolean;

    // Rectangle transforming:

    //scale the current rectangle by scale
    scaleBy(scale:number):RectangleInterface;
    
    //translate the current rectangle by factor
    translateBy(factor:number):RectangleInterface;

    // Rectangle converting:

    //converting 4 corners of rectangle into an array
    asArray():number[];

    asArray_xywh():number[];



}

export interface RectangleConstructor {
    //constructor of Rectangle Class

    new (pointService:PointService,
         left:number,
         top:number,
         right:number,
         bottom:number): RectangleInterface;
}

export interface RectangleServiceInterface{

    //public methods of RectangleService
    create(left:number,
           top:number,
           right:number,
           bottom:number): RectangleInterface;
}