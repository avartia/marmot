import { Injectable }    from '@angular/core';

import {BouncerMorph} from './bouncerMorph'
import {BouncerMorphConstructor, BouncerMorphServiceInterface} from './bouncermorph.interface'

@Injectable()
export class BouncerMorphService implements BouncerMorphServiceInterface{

  constructor() {

   }

  create(): BouncerMorph{
    return this.createBouncerMorph(BouncerMorph);
  }

  private createBouncerMorph(bouncerMorphConstructor: BouncerMorphConstructor): BouncerMorph {
    return new bouncerMorphConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}