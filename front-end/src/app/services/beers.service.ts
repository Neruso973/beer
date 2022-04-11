import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { beers } from '../data/interfaces';

@Injectable({
  providedIn: 'root',
})
export class BeersService {
  private service: HttpClient;

  constructor(param_service: HttpClient) {
    this.service = param_service;
  }

  public getBeers(): Observable<Array<beers>> {
    const beer: Observable<any> = this.service.get('../assets/beers.json');
    return beer;
  }

  public addBeers(beer: beers): Observable<beers> {
    const newBeer: Observable<any> = this.service.post(
      '../assets/beers.json',
      beer
    );
    return newBeer;
  }
}
