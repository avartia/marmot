import { PointService } from './point.service'
//Rectangle Class

export interface RectangleInterface{
  //public intance member and public intance methods of Rectangle Class
}

export interface RectangleConstructor {
    //constructor of Rectangle Class

    new (pointService:PointService,
         left:number,
         top:number,
         right:number,
         bottom:number): RectangleInterface;
}

export interface RectangleServiceInterface{

    //public methods of RectangleService
    create(left:number,
           top:number,
           right:number,
           bottom:number): RectangleInterface;
}