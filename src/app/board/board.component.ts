import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { MixedWord } from '../models/word';
import { isUndefined, isNullOrUndefined } from 'util';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(private gameService: GameService) { }

  
  mixedWord:MixedWord;

  ngOnInit(): void {
    this.gameService.getWord().subscribe(r => {

      if (!isNullOrUndefined(r)) {
        
        this.mixedWord=new MixedWord(r.word,r.defination,r.word.split("").shuffle());
      } else if (isUndefined(r)) {
        console.log('congratz it\'s done');
      }
    }, err => {

    }, () => {
      this.getWord();
    });

  }

  getWord() {
    this.gameService.nextWord();
  }

}
