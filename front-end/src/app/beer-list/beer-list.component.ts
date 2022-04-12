import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { BeersService } from '../services/beers.service';
import { beers } from '../data/interfaces';
=======
>>>>>>> 09fb01bd14ad65066d0882ef1b99484ad6e518f9

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
<<<<<<< HEAD
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
  newBeer(beer: beers) {
    this.service.addBeers(beer).subscribe();
  }
=======
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> 09fb01bd14ad65066d0882ef1b99484ad6e518f9
}
