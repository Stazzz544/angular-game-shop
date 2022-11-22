import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITemplateBusketGame } from 'src/app/services/basket.servise';
import { BusketService } from 'src/app/services/busket.service';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss']
})
export class BasketPageComponent implements OnInit {

  gamesInBusket = new BehaviorSubject<ITemplateBusketGame[]>([])

  constructor(
    private busketService: BusketService,
    private gamesService: GamesService
    ) {}

  ngOnInit(): void {
    this.gamesInBusket.next([])
    this.busketService.gameInButsket
      .subscribe(games => {
        games.forEach(game => {
            this.gamesService.getGame(game.gameId)
            .subscribe(gameData => {       
                this.gamesInBusket.next(this.gamesInBusket.getValue().concat([{
                    discription: gameData.discription,
                    id: gameData.id,
                    img: gameData.img,
                    price: gameData.price,
                    title: gameData.title,
                    userOrderId: game.id,
                    userPrice: game.price,
                }]))
                console.log(this.gamesInBusket)
            })
        })
    })
  }
  removeGame(id:number){
    this.busketService.removeGameFromBasket(id)
    .subscribe(resp => {
        this.gamesInBusket.next([])
        this.busketService.getUserBasketData()
    })
  }

}
