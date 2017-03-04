import { PenMorphInterface } from './penmorph.interface'
import { Morph } from './morph'
import { Rectangle } from './rectangle'
import { newCanvas } from './shared.function'
import { RectangleService } from './rectangle.service'

export class PenMorph extends Morph implements PenMorphInterface{
  private heading;
  private size;
  private penBounds;// rect around the visible arrow shape

  constructor(private rectangleService:RectangleService) { 
    super();
    this.heading=0;
    this.size=1;
    this.penBounds=null;
    //?this.setExtent(new Point(size, size));
  }

  // PenMorph display:
  // my orientation can be overridden with the "facing" parameter to
  // implement Scratch-style rotation styles
  drawNew(facing:number):void{
      let context, start, dest, left, right, len,
          direction = facing || this.heading;

      this.image= newCanvas(this.extent());
      context=this.image.getContext('2d');
      len = this.width() / 2;
      start = this.center().subtract(this.bounds.origin);

      dest = start.distanceAngle(len * 0.75, direction - 180);
      left = start.distanceAngle(len, direction + 195);
      right = start.distanceAngle(len, direction - 195);

      // cache penBounds
      this.penBounds = this.rectangleService.create(
          Math.min(start.x, dest.x, left.x, right.x),
          Math.min(start.y, dest.y, left.y, right.y),
          Math.max(start.x, dest.x, left.x, right.x),
          Math.max(start.y, dest.y, left.y, right.y)
      );
  }

  // PenMorph access:
  setHeading(degrees:number):void{

  }

  turn(degrees:number):void{

  }

  //move the turtle forward
  forward(steps:number):void{

  }

  clear():void{

  }


  

}
