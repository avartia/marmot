import { Injectable }    from '@angular/core';
import { WorldMorph } from './worldmorph'
@Injectable()
export class WorldMorphService {

  constructor() { }

  create(){
    return new WorldMorph();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}