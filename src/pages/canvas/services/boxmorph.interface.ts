
//BoxMorph Class

export interface BoxMorphInterface{
  //public intance member and public intance methods of BoxMorph Class
}

export interface BoxMorphConstructor {
    //constructor of BoxMorph Class

    new (): BoxMorphInterface;
}

export interface BoxMorphServiceInterface{

    //public methods of BoxMorphService
    create(): BoxMorphInterface;
}