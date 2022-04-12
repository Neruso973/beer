import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { beers } from '../data/interfaces';
import { Beer } from '../data/Beer';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss'],
})
export class BeerCardComponent implements OnInit {
  @Input() beer: beers = new Beer();

  constructor(private route: Router) {}

  ngOnInit(): void {}

  go(id: number) {
    this.route.navigate([`/description/${id}`]);
  }
}
