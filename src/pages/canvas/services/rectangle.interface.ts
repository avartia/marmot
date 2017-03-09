import { Point } from './point'
import { Rectangle } from './rectangle'
import { PointService } from './point.service'

//Rectangle Class

export interface RectangleInterface{
    //public member variables
    origin: Point;

    corner: Point;

    //public methods
    // Rectangle string representation: e.g. '[0@0 | 160@80]'
    toString():string;

    // Rectangle copying:
    copy():Rectangle;

    // Rectangle accessing - setting:
    // Change the Rectangle by resetting topLeftPoint and bottomRightPoint
    setTo(left?:number,top?:number,right?:number,bottom?:number):void;

    // Rectangle accessing - getting:
    area():number;

    //Get the Y coordinate of the bottom of the square
    bottom():number;

    //Get the bottomCenter point of the Rectangle
    bottomCenter():Point;

    bottomLeft():Point;

    bottomRight():Point;

    //Return Rectangle itself
    boundingBox():Rectangle;

    //Get the center point of the Rectangle
    center():Point;

    //Get an array containing 4 corners of the Rectangle
    corners():Point[];

    //Get the extent vector of the Rectangle
    extent():Point;

    height():number;

    left():number;

    leftCenter():Point;

    right():number;

    rightCenter():Point;

    top():number;

    topCenter():Point;

    topLeft():Point;

    topRight():Point;

    width():number;

    //Get the topLeftPoint of the Rectangle
    position():Point;

    // Rectangle comparison:

    // Compare two Rectangle
    equal(aRect:Rectangle):boolean;

    ////??????????????????
    abs():Rectangle;

    //Rectangle functions:

    //create a Rectangle that is an inset of the Rectangle
    insetBy(delta:Point|number):Rectangle;

    //create a Rectangle that can contain the current Rectangle
    expandBy(delta:Point|number):Rectangle;

    //expand the current Rectangle from bottomLeft direction
    growBy(delta:Point|number):Rectangle;

    //Get the intersect part of two Rectangle
    intersect(aRect:Rectangle):Rectangle;

    //Get the Rectangle that can contain these to Rectangle
    merge(aRect:Rectangle):Rectangle;

    //expand the rectangle that can contain aRect
    mergeWith(aRect:Rectangle):void;

    //Apply round method to topLeftPoint and bottomRightPoint to create a new Rectangle
    round():Rectangle;


    //make the rectangle be inside of aRect after self+delta
    //at least topleft inside
    amountToTranslateWithin(aRect:Rectangle):Rectangle;

    // Rectangle testing:

    //whether this rectangle can contain aPoint
    containsPoint(aPoint:Point):boolean;

    //whether this rectangle can contain aRect
    containsRectangle(aRect:Rectangle):boolean;

    //whether this rectangle can intersect with aRect
    intersects(aRect:Rectangle):boolean;

    //whether aRect is in a new Rectangle into which the rectangle expanded
    //by threshold
    isNearTo(aRect:Rectangle,threshold:number):boolean;

    // Rectangle transforming:

    //scale the current rectangle by scale
    scaleBy(scale:number):Rectangle;
    
    //translate the current rectangle by factor
    translateBy(factor:number|Point):Rectangle;

    // Rectangle converting:

    //converting 4 corners of rectangle into an array
    asArray():number[];

    asArray_xywh():number[];



}

export interface RectangleServiceInterface{

    //public methods of RectangleService
    create(left:number,
           top:number,
           right:number,
           bottom:number): Rectangle;
}