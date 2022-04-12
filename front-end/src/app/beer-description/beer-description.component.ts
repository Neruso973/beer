import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer } from '../data/Beer';
import { beers } from '../data/interfaces';
import { BeersService } from '../services/beers.service';

@Component({
  selector: 'app-beer-description',
  templateUrl: './beer-description.component.html',
  styleUrls: ['./beer-description.component.scss'],
})
export class BeerDescriptionComponent implements OnInit {
  public beer: beers = new Beer();
  private service: BeersService;

  constructor(param_service: BeersService, private route: ActivatedRoute) {
    this.service = param_service;
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    id &&
      this.service.getBeerById(parseInt(id)).subscribe((param_data: beers) => {
        this.beer = param_data;
      });
  }

  log(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
  }
}
