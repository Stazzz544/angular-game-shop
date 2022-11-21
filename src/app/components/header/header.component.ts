import { Component, OnInit } from '@angular/core';
import { BurgerService } from './burger/burger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public service: BurgerService) { }

  ngOnInit(): void {
  }

}
