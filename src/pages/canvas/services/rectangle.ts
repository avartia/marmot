import { PointService } from './point.service'
import { Point } from './point'
import { RectangleInterface } from './rectangle.interface'




export class Rectangle implements RectangleInterface{

    constructor(public origin:Point, 
                public corner:Point) { 
    }

    // public extent(): Point{
    //   return this.bottomRightPoint.subtract(this.topLeftPoint);
    // }


    // Rectangle string representation: e.g. '[0@0 | 160@80]'
    toString():string{
        return;
    }

    // Rectangle copying:
    copy():Rectangle{
        return Object.assign({},this);
    }

    // Rectangle accessing - setting:
    // Change the Rectangle by resetting topLeftPoint and bottomRightPoint
    setTo(left?:number,top?:number,right?:number,bottom?:number):void{
        return;
    }

    // Rectangle accessing - getting:
    area():number{
        return;
    }

    //Get the Y coordinate of the bottom of the square
    bottom():number{
		return this.corner.y;
	}

    //Get the bottomCenter point of the Rectangle
    bottomCenter():Point{
		return;
	}

    bottomLeft():Point{
		return;
	}

    bottomRight():Point{
		return;
	}

    //Return Rectangle itself
    boundingBox():Rectangle{
		return;
	}

    //Get the center point of the Rectangle
    center():Point{
		return this.origin.add(
            this.corner.subtract(this.origin).floorDivideBy(2)
        );
	}

    //Get an array containing 4 corners of the Rectangle
    corners():Point[]{
		return;
	}

    //Get the extent vector of the Rectangle
    extent():Point{
		return this.corner.subtract(this.origin);
	}

    height():number{
		return;
	}

    left():number{
		return this.origin.x;;
	}

    leftCenter():Point{
		return;
	}

    right():number{
		return this.corner.x;
	}

    rightCenter():Point{
		return;
	}

    top():number{
		return this.origin.y;
	}

    topCenter():Point{
		return;
	}

    topLeft():Point{
		return;
	}

    topRight():Point{
		return;
	}

    width():number{
		return this.corner.x-this.origin.x;
	}

    //Get the topLeftPoint of the Rectangle
    position():Point{
		return this.origin;
	}

    // Rectangle comparison:

    // Compare two Rectangle
    equal(aRect:Rectangle):boolean{
		return;
	}

    ////??????????????????
    abs():Rectangle{
		return;
	}

    //Rectangle functions:

    //create a Rectangle that is an inset of the Rectangle
    insetBy(delta:Point|number):Rectangle{
		return;
	}

    //create a Rectangle that can contain the current Rectangle
    expandBy(delta:Point|number):Rectangle{
		return;
	}

    //expand the current Rectangle from bottomLeft direction
    growBy(delta:Point|number):Rectangle{
		return;
	}

    //Get the intersect part of two Rectangles
    intersect(aRect:Rectangle):Rectangle{
        
        let origin:Point=this.origin.max(aRect.origin);
        let corner:Point=this.corner.min(aRect.corner);
		return new Rectangle(origin,corner);
	}

    //Get the Rectangle that can contain these to Rectangle
    merge(aRect:Rectangle):Rectangle{
		return;
	}

    //expand the rectangle that can contain aRect
    mergeWith(aRect:Rectangle):void{
		this.origin = this.origin.min(aRect.origin);
        this.corner = this.corner.max(aRect.corner);
	}

    //Apply round method to topLeftPoint and bottomRightPoint to create a new Rectangle
    round():Rectangle{
		return;
	}

    // round me by applying floor() to my origin and ceil() to my corner
    // expand by 1 to be on the safe side, this eliminates rounding
    // artifacts caused by Safari's auto-scaling on retina displays
    spread():Rectangle{
		return;
	}

    //make the rectangle be inside of aRect after self+delta
    //at least topleft inside
    amountToTranslateWithin(aRect:Rectangle):Rectangle{
		return;
	}

    // Rectangle testing:

    //whether this rectangle can contain aPoint
    containsPoint(aPoint:Point):boolean{
		return;
	}

    //whether this rectangle can contain aRect
    containsRectangle(aRect:Rectangle):boolean{
		return;
	}

    //whether this rectangle can intersect with aRect
    intersects(aRect:Rectangle):boolean{
		return;
	}

    //whether aRect is in a new Rectangle into which the rectangle expanded
    //by threshold
    isNearTo(aRect:Rectangle,threshold:number = 0):boolean{
        if(!aRect){
            return false;
        }
		let ro = aRect.origin;
        let rc = aRect.corner;
        let border = threshold;

        if(rc.x + border >= this.origin.x &&
           rc.y + border >= this.origin.y &&
           ro.x - border <= this.corner.x &&
           ro.y - border <= this.corner.y)  {
            return true;
        }           
        else{
            return false;
        }                                                              
	}

    // Rectangle transforming:

    //scale the current rectangle by scale
    scaleBy(scale:number):Rectangle{
		return;
	}
    
    //translate the current rectangle by factor
    translateBy(factor:number|Point):Rectangle{
        var o = this.origin.add(factor),
            c = this.corner.add(factor);
		return new Rectangle(o,c);
	}

    // Rectangle converting:

    //converting 4 corners of rectangle into an array
    asArray():number[]{
		return;
	}

    asArray_xywh():number[]{
		return;
	}
  
}

