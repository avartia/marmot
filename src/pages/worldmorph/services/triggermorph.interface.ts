import {MorphInterface} from './morph.interface'
//TriggerMorph Class

export interface TriggerMorphInterface extends MorphInterface{
  //public intance member and public intance methods of TriggerMorph Class
}

export interface TriggerMorphConstructor {
    //constructor of TriggerMorph Class

    new (): TriggerMorphInterface;
}

export interface TriggerMorphServiceInterface{

    //public methods of TriggerMorphService
    create(): TriggerMorphInterface;
}