import { TriggerMorph } from "./triggermorph";
//TriggerMorph Class

export interface TriggerMorphInterface{
  //public intance member and public intance methods of TriggerMorph Class
}

export interface TriggerMorphConstructor {
    //constructor of TriggerMorph Class

    new (): TriggerMorph;
}

export interface TriggerMorphServiceInterface{

    //public methods of TriggerMorphService
    create(): TriggerMorph;
}