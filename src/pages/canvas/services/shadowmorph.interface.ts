import {MorphInterface} from './morph.interface'
//ShadowMorph Class

export interface ShadowMorphInterface extends MorphInterface{
  //public intance member and public intance methods of ShadowMorph Class

  topMorphAt():null;
}

export interface ShadowMorphConstructor {
    //constructor of ShadowMorph Class

    new (): ShadowMorphInterface;
}

export interface ShadowMorphServiceInterface{

    //public methods of ShadowMorphService
    create(): ShadowMorphInterface;
}