import { Component, OnInit } from '@angular/core';
import { BurgerService } from './burger.service';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent implements OnInit {

  constructor(public service: BurgerService) {}

  ngOnInit(): void {
  }

  toggleBurger(){
    this.service.burgerToggle()
  }

}
