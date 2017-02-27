
//BlinkerMorph Class
//can be used for text cursors

export interface BlinkerMorphInterface{
  //public intance member and public intance methods of BlinkerMorph Class
}

export interface BlinkerMorphConstructor {
    //constructor of BlinkerMorph Class

    new (): BlinkerMorphInterface;
}

export interface BlinkerMorphServiceInterface{

    //public methods of BlinkerMorphService
    create(): BlinkerMorphInterface;
}