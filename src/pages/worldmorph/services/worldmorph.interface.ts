
//WorldMorph Class

export interface WorldMorphInterface{
  //public intance member and public intance methods of WorldMorph Class
}

export interface WorldMorphConstructor {
    //constructor of WorldMorph Class

    new (): WorldMorphInterface;
}

export interface WorldMorphServiceInterface{

    //public methods of WorldMorphService
    create(): WorldMorphInterface;
}