import { Injectable }    from '@angular/core';

import { Point } from './point'
import { PointServiceInterface } from './point.interface'
@Injectable()
export class PointService implements PointServiceInterface{

  constructor() {

   }

  create(x:number, y:number): Point{
    return new Point(x, y);
  }

}