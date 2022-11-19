import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../api/api';
import { Observable } from 'rxjs';
import { ISliderData } from './main-slider.interface';

@Injectable()
export class MainSliderService {

  constructor(private http: HttpClient) {}

  getMainSliderData(): Observable<ISliderData[]> {
    return this.http.get<ISliderData[]>(`${API_URL}/sliderData`)
  }
}
