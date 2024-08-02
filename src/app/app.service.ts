import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICoin } from './ICoin';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url: string = 'https://api.coinpaprika.com/v1/coins';
  getData(): Observable<ICoin[]> {
    return this.http.get<ICoin[]>(this.url);
  }
  constructor(private http: HttpClient) { }
}
