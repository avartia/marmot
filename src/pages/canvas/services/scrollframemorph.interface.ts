import { FrameMorphInterface } from './framemorph.interface'
//ScrollFrameMorph Class

export interface ScrollFrameMorphInterface extends FrameMorphInterface{
  //public intance member and public intance methods of ScrollFrameMorph Class
}

export interface ScrollFrameMorphConstructor {
    //constructor of ScrollFrameMorph Class

    new (): ScrollFrameMorphInterface;
}

export interface ScrollFrameMorphServiceInterface{

    //public methods of ScrollFrameMorphService
    create(): ScrollFrameMorphInterface;
}