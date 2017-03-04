
//PenMorph Class

export interface PenMorphInterface{
  //public intance member and public intance methods of PenMorph Class
}

export interface PenMorphConstructor {
    //constructor of PenMorph Class

    new (): PenMorphInterface;
}

export interface PenMorphServiceInterface{

    //public methods of PenMorphService
    create(): PenMorphInterface;
}