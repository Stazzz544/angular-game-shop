import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IBusketGame } from 'src/app/services/basket.servise';
import { BusketService } from 'src/app/services/busket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  basketCount = new BehaviorSubject<IBusketGame[]>([])

  constructor(private busketService: BusketService) {}

  ngOnInit(): void {
    this.busketService.getUserBasketData()
    this.basketCount = this.busketService.gameInButsket
  }
}
