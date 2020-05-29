import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  score: number = 0;

  constructor(private gameService:GameService) { }


  ngOnInit(): void {
    
    this.gameService.getScore().subscribe(res=>{
      this.score=res;
    });

  }



}
