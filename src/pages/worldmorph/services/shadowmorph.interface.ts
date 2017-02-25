
//ShadowMorph Class

export interface ShadowMorphInterface{
  //public intance member and public intance methods of ShadowMorph Class
}

export interface ShadowMorphConstructor {
    //constructor of ShadowMorph Class

    new (): ShadowMorphInterface;
}

export interface ShadowMorphServiceInterface{

    //public methods of ShadowMorphService
    create(): ShadowMorphInterface;
}