import { Injectable }    from '@angular/core';

import {MenuItemMorph} from './MenuItemMorph'
import {MenuItemMorphConstructor, MenuItemMorphServiceInterface} from './menuitemmorph.interface'

@Injectable()
export class MenuItemMorphService implements MenuItemMorphServiceInterface{

  constructor() {

   }

  create(): MenuItemMorph{
    return this.createMenuItemMorph(MenuItemMorph);
  }

  private createMenuItemMorph(menuItemMorphConstructor: MenuItemMorphConstructor): MenuItemMorph {
    return new menuItemMorphConstructor() as MenuItemMorph;
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}