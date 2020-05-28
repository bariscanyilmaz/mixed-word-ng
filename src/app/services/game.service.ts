import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Word } from '../models/word';
import "../utility";
import { of, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GameService {


  private words: Word[];
  private word: BehaviorSubject<Word> = new BehaviorSubject<Word>(null);

  constructor(private http: HttpClient) {
    this.getAll();
  }

  getAll() {
    this.http.get<Word[]>("/assets/words.json").subscribe(res => {
      this.words = res.shuffle();
    })
  }

  getWord() {
    return this.word.asObservable();
  }

  nextWord() {
    this.word.next(this.words.shift());
  }

}
