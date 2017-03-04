import {ColorPickerMorph} from './colorpickermorph'
//ColorPickerMorph Class

export interface ColorPickerMorphInterface{
  //public intance member and public intance methods of ColorPickerMorph Class
}

export interface ColorPickerMorphConstructor {
    //constructor of ColorPickerMorph Class

    new (): ColorPickerMorph;
}

export interface ColorPickerMorphServiceInterface{

    //public methods of ColorPickerMorphService
    create(): ColorPickerMorph;
}