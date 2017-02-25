import { Injectable }    from '@angular/core';

import {MenuMorph} from './MenuMorph'
import {MenuMorphConstructor, MenuMorphInterface} from './shared.interface'

@Injectable()
export class MenuMorphService{

  constructor() {

   }

  create(): MenuMorph{
    return this.createMenuMorph(MenuMorph) as MenuMorph;
  }

  private createMenuMorph(menuMorphConstructor: MenuMorphConstructor): MenuMorphInterface {
    return new menuMorphConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}