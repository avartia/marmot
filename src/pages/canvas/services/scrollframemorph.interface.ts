import { FrameMorphInterface } from './framemorph.interface'
import { ScrollFrameMorph } from './scrollframemorph'


//ScrollFrameMorph Class

export interface ScrollFrameMorphInterface extends FrameMorphInterface{
  //public intance member and public intance methods of ScrollFrameMorph Class
}

export interface ScrollFrameMorphConstructor {
    //constructor of ScrollFrameMorph Class

    new (): ScrollFrameMorph;
}

export interface ScrollFrameMorphServiceInterface{

    //public methods of ScrollFrameMorphService
    create(): ScrollFrameMorph;
}