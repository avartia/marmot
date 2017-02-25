import { Injectable }    from '@angular/core';

import {ListMorph} from './ListMorph'
import {ListMorphConstructor, ListMorphInterface} from './shared.interface'

@Injectable()
export class ListMorphService{

  constructor() {

   }

  create(): ListMorph{
    return this.createListMorph(ListMorph) as ListMorph;
  }

  private createListMorph(listMorphConstructor: ListMorphConstructor): ListMorphInterface {
    return new listMorphConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}