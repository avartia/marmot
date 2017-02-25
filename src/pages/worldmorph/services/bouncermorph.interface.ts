
//BouncerMorph Class

export interface BouncerMorphInterface{
  //public intance member and public intance methods of BouncerMorph Class
}

export interface BouncerMorphConstructor {
    //constructor of BouncerMorph Class

    new (): BouncerMorphInterface;
}

export interface BouncerMorphServiceInterface{

    //public methods of BouncerMorphService
    create(): BouncerMorphInterface;
}