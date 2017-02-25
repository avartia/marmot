import { Injectable }    from '@angular/core';

import {ListMorph} from './ListMorph'
import {ListMorphConstructor, ListMorphServiceInterface} from './listmorph.interface'

@Injectable()
export class ListMorphService implements ListMorphServiceInterface{

  constructor() {

   }

  create(): ListMorph{
    return this.createListMorph(ListMorph);
  }

  private createListMorph(listMorphConstructor: ListMorphConstructor): ListMorph {
    return new listMorphConstructor() as ListMorph;
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}