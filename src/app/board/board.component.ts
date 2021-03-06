import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { MixedWord } from '../models/word';
import { isUndefined, isNullOrUndefined } from 'util';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {


  mixedWord: MixedWord=null;
  width: number;

  status:'init'|'started'|'ended'="init";

  constructor(private gameService: GameService) {

  }


  ngOnInit(): void {
    this.gameService.getWord().subscribe(r => {
      if (!isNullOrUndefined(r)) {
        this.mixedWord = new MixedWord(r.word, r.defination, r.word.split("").shuffle());
        this.width = this.mixedWord.mixedWord.length * 40;
      } else if (isUndefined(r)) {
        this.status='ended';
      }
    });
  }

  start() {
    this.status="started";
    this.gameService.nextWord();
  }

  pass(){
    this.gameService.nextWord();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.mixedWord.mixedWord, event.previousIndex, event.currentIndex);
    this.checkWord();
  }

  checkWord(){
    if((this.mixedWord.mixedWord.join(''))===(this.mixedWord.originalWord)){
      this.gameService.increaseScore();
      this.gameService.nextWord();
    } 
  }

  restart(){
    this.status='started';
    this.gameService.restart();   
  }

}
