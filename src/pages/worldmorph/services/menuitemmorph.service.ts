import { Injectable }    from '@angular/core';

import {MenuItemMorph} from './MenuItemMorph'
import {MenuItemMorphConstructor, MenuItemMorphInterface} from './shared.interface'

@Injectable()
export class MenuItemMorphService{

  constructor() {

   }

  create(): MenuItemMorph{
    return this.createMenuItemMorph(MenuItemMorph) as MenuItemMorph;
  }

  private createMenuItemMorph(menuItemMorphConstructor: MenuItemMorphConstructor): MenuItemMorphInterface {
    return new menuItemMorphConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}