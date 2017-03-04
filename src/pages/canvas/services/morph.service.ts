import { Injectable }    from '@angular/core';

import {Morph} from './morph'
import {MorphConstructor, MorphInterface, MorphServiceInterface} from './morph.interface'

@Injectable()
export class MorphService implements MorphServiceInterface{

  constructor() {

   }

  create(noDraw?:boolean): Morph{
    return this.createMorph(Morph, noDraw) as Morph;
  }

  private createMorph(morphConstructor: MorphConstructor,
                      noDraw:boolean): MorphInterface {
    return new morphConstructor(noDraw);
  }

}