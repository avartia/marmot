import { ShadowMorph } from "./shadowmorph";
//ShadowMorph Class

export interface ShadowMorphInterface{
  //public intance member and public intance methods of ShadowMorph Class

    topMorphAt():void;
}

export interface ShadowMorphServiceInterface{

    //public methods of ShadowMorphService
    create(): ShadowMorph;
}