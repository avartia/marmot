
//HandleMorph Class

export interface HandleMorphInterface{
  //public intance member and public intance methods of HandleMorph Class
}

export interface HandleMorphConstructor {
    //constructor of HandleMorph Class

    new (): HandleMorphInterface;
}

export interface HandleMorphServiceInterface{

    //public methods of HandleMorphService
    create(): HandleMorphInterface;
}