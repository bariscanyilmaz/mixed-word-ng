import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Word } from '../models/word';
import  "../utility";
@Injectable({
  providedIn: 'root'
})
export class GameService {


  words: Word[];

  constructor(private http: HttpClient) {
    this.http.get<Word[]>("/assets/words.json").subscribe(res => {
      this.words = res.shuffle();
    })
  }
}
