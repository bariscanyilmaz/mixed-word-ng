import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { MixedWord } from '../models/word';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(private gameService: GameService) { }


  mixedWord: MixedWord;

  ngOnInit(): void {
    this.gameService.getWord().subscribe(r => {
      if (r) {
        this.mixedWord.originalWord = r.word;
        this.mixedWord.mixedWord = r.word.split("").shuffle();
        this.mixedWord.definiation = r.defination;
      }

    });
  }

  getWord() {
    this.gameService.nextWord();
  }
}
