import { PointService } from './point.service'
import { Point } from './point'
export class Rectangle{
  private topLeftPoint: Point;
  private bottomRightPoint: Point;

  constructor(left:number = 0,
              top:number = 0,
              right:number = 0,
              bottom:number = 0,
              private pointService:PointService) { 
    this.topLeftPoint = pointService.create(left, top);
    this.bottomRightPoint = pointService.create(right, bottom);
  }

  public extent(): Point{
    return this.bottomRightPoint.subtract(this.topLeftPoint);
  }
  
}