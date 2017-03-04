import { Injectable }    from '@angular/core';

import {Rectangle} from './rectangle'
import {RectangleConstructor, RectangleServiceInterface} from './rectangle.interface'
import { PointService } from './point.service'

@Injectable()
export class RectangleService implements RectangleServiceInterface{

  constructor(private pointService:PointService) {

   }

  create(left:number,
         top:number,
         right:number,
         bottom:number): Rectangle{
    return this.createRectangle(Rectangle,
                                this.pointService, 
                                left, 
                                top, 
                                right,
                                bottom);
  }

  private createRectangle(rectangleConstructor: RectangleConstructor, 
                          pointService:PointService,
                          left:number,
                          top:number,
                          right:number,
                          bottom:number): Rectangle {
    return new rectangleConstructor(pointService,
                                    left,
                                    top,
                                    right,
                                    bottom);
  }

}