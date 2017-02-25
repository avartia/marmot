
//TextMorph Class

export interface TextMorphInterface{
  //public intance member and public intance methods of TextMorph Class
}

export interface TextMorphConstructor {
    //constructor of TextMorph Class

    new (): TextMorphInterface;
}

export interface TextMorphServiceInterface{

    //public methods of TextMorphService
    create(): TextMorphInterface;
}