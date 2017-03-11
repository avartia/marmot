import { Injectable }    from '@angular/core';

import {Rectangle} from './rectangle'
import {RectangleServiceInterface} from './rectangle.interface'
import {Point} from './point'

@Injectable()
export class RectangleService implements RectangleServiceInterface{

  constructor(private rectangleService:RectangleService) {

   }

  create(left:number=0,
         top:number=0,
         right:number=0,
         bottom:number=0): Rectangle{
    let origin:Point= new Point(left,top);
    let corner:Point= new Point(right,bottom);

     return new Rectangle(origin,
                          corner,
                          this.rectangleService);
  }


}