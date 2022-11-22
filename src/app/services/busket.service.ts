import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { API_URL } from '../api/api';
import { IBusketGame } from './basket.servise';

@Injectable()

export class BusketService {

    gameInButsket = new BehaviorSubject<IBusketGame[]>([])

    constructor(private http: HttpClient) { }

    getUserBasketData(): void {
        this.gameInButsket.next([])
        this.http.get<IBusketGame[]>(`${API_URL}/currentUser/`)
            .subscribe((data: IBusketGame[]) => {
                this.gameInButsket.next(data)
            })
        console.log(this.gameInButsket)
    }

    addGameToBasket(gameId: number, price: number): Observable<any> {
        const data = {
            gameId,
            price,
        }
        // потом можно будет вместо currentUser использлвать уникальное имя
        return this.http.post(`${API_URL}/currentUser/`, data)
    }

    removeGameFromBasket(id: number) {
        return this.http.delete(`${API_URL}/currentUser/${id}`)
    }

}
