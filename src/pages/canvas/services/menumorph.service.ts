import { Injectable }    from '@angular/core';

import {MenuMorph} from './menuMorph'
import {MenuMorphConstructor, MenuMorphServiceInterface} from './menumorph.interface'

@Injectable()
export class MenuMorphService implements MenuMorphServiceInterface{

  constructor() {

   }

  create(): MenuMorph{
    return this.createMenuMorph(MenuMorph);
  }

  private createMenuMorph(menuMorphConstructor: MenuMorphConstructor): MenuMorph {
    return new menuMorphConstructor() as MenuMorph;
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}