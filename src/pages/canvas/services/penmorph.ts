import { PenMorphInterface } from './penmorph.interface'
import { Morph } from './morph'
import { Rectangle } from './rectangle'
import { newCanvas } from './shared.function'
import { RectangleService } from './rectangle.service'
import {Point} from './point'

export class PenMorph extends Morph implements PenMorphInterface{
  private heading:number;
  private size:number;
  private penBounds:Rectangle;// rect around the visible arrow shape

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
  drawNew(facing?:number):void{
      let context:CanvasRenderingContext2D;
      let start:Point;
      let dest:Point;
      let left:Point;
      let right:Point;
      let len:number;
      let direction:number;
      direction= facing || this.heading;


      this.image= newCanvas(this.extent());
      context=this.image.getContext('2d');
      len = this.width() / 2;
      start = this.center().subtract(this.bounds.origin);

      dest = start.moveAtAngleIndistance(len * 0.75, direction - 180);
      left = start.moveAtAngleIndistance(len, direction + 195);
      right = start.moveAtAngleIndistance(len, direction - 195);

      // cache penBounds
      this.penBounds = this.rectangleService.create(
          Math.min(start.x, dest.x, left.x, right.x),
          Math.min(start.y, dest.y, left.y, right.y),
          Math.max(start.x, dest.x, left.x, right.x),
          Math.max(start.y, dest.y, left.y, right.y)
      );
      // cache penBounds
    this.penBounds = this.rectangleService.create(
        Math.min(start.x, dest.x, left.x, right.x),
        Math.min(start.y, dest.y, left.y, right.y),
        Math.max(start.x, dest.x, left.x, right.x),
        Math.max(start.y, dest.y, left.y, right.y)
    );
    
    // draw arrow shape
    context.fillStyle=this.color.toString();
    context.beginPath();

    context.moveTo(start.x, start.y);
    context.lineTo(left.x, left.y);
    context.lineTo(dest.x, dest.y);
    context.lineTo(right.x, right.y);

    context.closePath();
    context.strokeStyle='white';
    context.lineWidth=3;
    context.stroke();
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    context.stroke();
    context.fill();   

  }

    
    

  // PenMorph access:
  setHeading(degrees:number):void{
    this.heading=degrees%360;
    this.drawNew();
  }

  turn(degrees:string):void{
    this.setHeading(this.heading + parseFloat(degrees));
  }

  //move the turtle forward
  forward(steps:string):void{
    let start:Point;
    let dest:Point;
    let dist:number;

    start = this.center();
    dist = parseFloat(steps);
    if(dist>=0){
      this.position().moveAtAngleIndistance(dist,this.heading);
    } else{
      dest=this.position().moveAtAngleIndistance(
        Math.abs(dist),
        (this.heading-180)
      )
    }
    this.setPosition(dest);
  }

  clear():void{
    //this.parent.drawNew();
    //this.parent.changed();
  }
}
