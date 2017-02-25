
//Morph Class

export interface MorphInterface{
  //public intance member and public intance methods of Morph Class
}

export interface MorphConstructor {
    //constructor of Morph Class

    new (): MorphInterface;
}

export interface MorphServiceInterface{

    //public methods of MorphService
    create(): MorphInterface;
}