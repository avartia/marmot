
//StringMorph Class

export interface StringMorphInterface{
  //public intance member and public intance methods of StringMorph Class
}

export interface StringMorphConstructor {
    //constructor of StringMorph Class

    new (): StringMorphInterface;
}

export interface StringMorphServiceInterface{

    //public methods of StringMorphService
    create(): StringMorphInterface;
}