
import {MenuItemMorph} from './menuitemmorph'
//MenuItemMorph Class

export interface MenuItemMorphInterface{
  //public intance member and public intance methods of MenuItemMorph Class


}

export interface MenuItemMorphConstructor {
    //constructor of MenuItemMorph Class

    new (): MenuItemMorph;
}

export interface MenuItemMorphServiceInterface{

    //public methods of MenuItemMorphService
    create(): MenuItemMorph;
}