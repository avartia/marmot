import { PointService } from './point.service'
import { Point } from './point'
import { RectangleInterface } from './rectangle.interface'

export class Rectangle implements RectangleInterface{
  private topLeftPoint: Point;
  private bottomRightPoint: Point;

  constructor(pointService:PointService,
              left:number = 0,
              top:number = 0,
              right:number = 0,
              bottom:number = 0) { 
    this.topLeftPoint = pointService.create(left, top);
    this.bottomRightPoint = pointService.create(right, bottom);
  }

  // public extent(): Point{
  //   return this.bottomRightPoint.subtract(this.topLeftPoint);
  // }
  
}

