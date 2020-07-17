import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Word } from '../models/word';
import "../utility";
import { of, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {


  private words: Word[];
  private word = new BehaviorSubject<Word>(null);
  private score = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) {
    this.getAll();
  }

  getAll() {
    return new Promise((resolve, reject) => {
      this.http.get<Word[]>("assets/words.json").subscribe(res => {
        this.words = res.shuffle();
        resolve();
      });
      
    })

  }

  getWord() {
    return this.word.asObservable();
  }

  nextWord() {
    this.word.next(this.words.shift());
  }

  increaseScore() {
    this.score.next(this.score.value + 1)
  }

  getScore() {
    return this.score.asObservable();
  }

  restart() {
    this.getAll().then(() => { this.nextWord(); this.score.next(0); });
  }

}
