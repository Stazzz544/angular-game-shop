import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../api/api';
import { Observable } from 'rxjs';
import { IGame } from './games.interface';

@Injectable()

export class GamesService {

  constructor(private http: HttpClient) { }

  getGame(id:number): Observable<IGame> {
    return this.http.get<IGame>(`${API_URL}/games/${id}`)
  }

  getAllGames(): Observable<IGame[]> {
    return this.http.get<IGame[]>(`${API_URL}/games/`)
  }
}
