import { Injectable }    from '@angular/core';

import {Rectangle} from './rectangle'
import {RectangleServiceInterface} from './rectangle.interface'
import {PointService} from './point.service'
import {Point} from './point'

@Injectable()
export class RectangleService implements RectangleServiceInterface{

  constructor(private pointService:PointService) {

   }

  create(left:number=0,
         top:number=0,
         right:number=0,
         bottom:number=0): Rectangle{
    let origin:Point=this.pointService.create(left,top);
    let corner:Point=this.pointService.create(right,bottom);

     return new Rectangle(
                          origin,
                          corner);
  }


}