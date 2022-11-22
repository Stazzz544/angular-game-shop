import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BusketService } from 'src/app/services/busket.service';
import { IGame } from 'src/app/services/games.interface';
import { GamesService } from 'src/app/services/games.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

    currentGame = new BehaviorSubject<IGame>({
        id: 0,
        title: '',
        discription: '',
        img: '',
        images: [],
        price: 0,
    });

  constructor(
    private busketService: BusketService,
    private gamesService: GamesService, 
    private route: ActivatedRoute) { }

  ngOnInit(){
    this.gamesService
        .getGame(Number(this.route.snapshot.params['id']))
        .subscribe((res) => this.currentGame.next(res));
  }

  addToBusket(id: number, price: number){
    this.busketService
        .addGameToBasket(id, price)
        .subscribe((res => {
            console.log(res)
            this.busketService.getUserBasketData()
        }))
    
  }

}
