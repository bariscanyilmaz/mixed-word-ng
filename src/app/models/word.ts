export class Word {
    word:string;
    defination:string;
}

export class MixedWord {
    originalWord:string;
    mixedWord:string[];
    defination:string;

    constructor(originalWord:string,defination:string,mixedWord:string[]) {
        this.originalWord=originalWord;
        this.defination=defination;
        this.mixedWord=mixedWord;
    }
    
}