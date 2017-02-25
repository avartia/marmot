
//HandMorph Class

export interface HandMorphInterface{
  //public intance member and public intance methods of HandMorph Class
}

export interface HandMorphConstructor {
    //constructor of HandMorph Class

    new (): HandMorphInterface;
}

export interface HandMorphServiceInterface{

    //public methods of HandMorphService
    create(): HandMorphInterface;
}