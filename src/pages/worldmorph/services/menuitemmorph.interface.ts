import {TriggerMorphInterface} from './triggermorph.interface'
//MenuItemMorph Class

export interface MenuItemMorphInterface extends TriggerMorphInterface{
  //public intance member and public intance methods of MenuItemMorph Class


}

export interface MenuItemMorphConstructor {
    //constructor of MenuItemMorph Class

    new (): MenuItemMorphInterface;
}

export interface MenuItemMorphServiceInterface{

    //public methods of MenuItemMorphService
    create(): MenuItemMorphInterface;
}