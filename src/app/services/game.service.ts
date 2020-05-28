import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Word } from '../models/word';

@Injectable({
  providedIn: 'root'
})
export class GameService {



  constructor(private http: HttpClient) {
    this.http.get<Word[]>("/assets/words.json").subscribe(res=>{

    })
  }


}
