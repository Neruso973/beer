import { Component, OnInit } from '@angular/core';
import { BeersService } from '../beers.service';
import { beers } from '../data/interfaces';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss'],
})
export class BeerListComponent implements OnInit {
  public beers: Array<beers> = [];
  private service: BeersService;

  constructor(param_service: BeersService) {
    this.service = param_service;
  }

  ngOnInit(): void {
    this.service.getBeers().subscribe((param_data: Array<beers>) => {
      this.beers = param_data;
    });
  }
}
