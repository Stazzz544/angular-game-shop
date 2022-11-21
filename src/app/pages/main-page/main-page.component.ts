import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IGame } from 'src/app/services/games.interface';
import { GamesService } from 'src/app/services/games.service';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {

    games = new BehaviorSubject<IGame[]>([{
        id: 0,
        title: '',
        discription: '',
        img: '',
        images: [],
        price: 0,
    }]);

    constructor(private gamesService: GamesService,) { }

    ngOnInit(): void {
        this.gamesService
            .getAllGames()
            .subscribe((res) => this.games.next(res));
             console.log(this.games)
    }
}
