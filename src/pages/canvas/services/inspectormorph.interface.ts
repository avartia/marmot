
//InspectorMorph Class

export interface InspectorMorphInterface{
  //public intance member and public intance methods of InspectorMorph Class
}

export interface InspectorMorphConstructor {
    //constructor of InspectorMorph Class

    new (): InspectorMorphInterface;
}

export interface InspectorMorphServiceInterface{

    //public methods of InspectorMorphService
    create(): InspectorMorphInterface;
}