import { Injectable }    from '@angular/core';

import {BouncerMorph} from './BouncerMorph'
import {BouncerMorphConstructor, BouncerMorphInterface} from './shared.interface'

@Injectable()
export class BouncerMorphService{

  constructor() {

   }

  create(): BouncerMorph{
    return this.createBouncerMorph(BouncerMorph) as BouncerMorph;
  }

  private createBouncerMorph(bouncerMorphConstructor: BouncerMorphConstructor): BouncerMorphInterface {
    return new bouncerMorphConstructor();
  }

  get(){

  }

  update(){

  }

  delete(){

  }

}