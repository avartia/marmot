import { SpeechBubbleMorph } from "./speechbubblemorph";

//SpeechBubbleMorph Class


export interface SpeechBubbleMorphInterface {
  //public intance member and public intance methods of SpeechBubbleMorph Class
}

export interface SpeechBubbleMorphConstructor {
    //constructor of SpeechBubbleMorph Class

    new (): SpeechBubbleMorph;
}

export interface SpeechBubbleMorphServiceInterface{

    //public methods of SpeechBubbleMorphService
    create(): SpeechBubbleMorph;
}