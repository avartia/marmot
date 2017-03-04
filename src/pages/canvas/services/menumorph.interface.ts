import {MenuMorph} from './menumorph'
//MenuMorph Class

export interface MenuMorphInterface{
  //public intance member and public intance methods of MenuMorph Class
}

export interface MenuMorphConstructor {
    //constructor of MenuMorph Class

    new (): MenuMorph;
}

export interface MenuMorphServiceInterface{

    //public methods of MenuMorphService
    create(): MenuMorph;
}