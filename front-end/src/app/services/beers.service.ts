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
    const beers: Observable<any> = this.service.get(
      'http://localhost:3333/api/beers'
    );
    return beers;
  }

  public getBeerById(id: number): Observable<beers> {
    const beer: Observable<any> = this.service.get(
      `http://localhost:3333/api/beers/${id}`
    );
    return beer;
  }

  public addBeers(beer: beers): Observable<beers> {
    const newBeer: Observable<any> = this.service.post(
      'http://localhost:3333/api/beers/',
      beer
    );
    return newBeer;
  }

  public editBeer(id: number, beer: beers): Observable<beers> {
    const updateBeer: Observable<any> = this.service.put(
      `http://localhost:3333/api/beers/${id}`,
      beer
    );
    return updateBeer;
  }

  public deleteBeer(id: number): Observable<beers> {
    const deletedBeer: Observable<any> = this.service.delete(
      `http://localhost:3333/api/beers/${id}`
    );
    return deletedBeer;
  }
}
